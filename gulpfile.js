'use strict';

/* ==========================================================================
   Settings
   ========================================================================== */

var devDomain = 'carbon-lite.dev';
var themeRoot = './web/';
var loadPath = themeRoot + '/bower_components/';

/* ==========================================================================
   Packages
   ========================================================================== */

var gulp = require('gulp');
var watch = require('gulp-watch');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');

/* ==========================================================================
   PHP server
   ========================================================================== */

var browserSync = require('browser-sync');

gulp.task('server', function () {
    browserSync({
        proxy: devDomain,
        ghostMode: false,
        notify: false,
        open: false
    });
});

/* ==========================================================================
   CSS
   ========================================================================== */

var postcss = require('gulp-postcss');
var cssImport = require('postcss-import');
var scss = require('postcss-scss');
var precss = require('precss');
var responsiveType = require('postcss-responsive-type');
var assets = require('postcss-assets');
var stylelint = require('stylelint');
var cssnano = require('cssnano');
var autoprefixer = require('autoprefixer');
var reporter = require('postcss-reporter');

gulp.task('lint-styles', function () {
    var processors = [
        stylelint,
        reporter({
            clearMessages: true,
            throwError: false,
            noPlugin: true
        })
    ];
    return gulp.src(themeRoot + '/styles/src/**/*.css')
        .pipe(postcss(processors), {
            syntax: scss
        });
});

gulp.task('styles', ['lint-styles'], function () {
    var processors = [
        cssImport({
            path: [loadPath]
        }),
        precss,
        responsiveType,
        assets({
            loadPaths: [
                themeRoot + '/assets/images',
                themeRoot + '/assets/svg'
            ]
        }),
        autoprefixer({
            browsers: ['last 2 versions', '> 5% in GB']
        })
    ];
    return gulp.src(themeRoot + '/styles/src/*.css')
        .pipe(postcss(processors), {
            syntax: scss
        })
        .pipe(gulp.dest(themeRoot + '/styles/dist'))
        .pipe(browserSync.stream());
});

gulp.task('dist-styles', function () {
    var processors = [
        cssImport({
            path: [loadPath]
        }),
        precss,
        responsiveType,
        assets({
            loadPaths: [
                themeRoot + '/assets/images',
                themeRoot + '/assets/svg'
            ]
        }),
        autoprefixer({
            browsers: ['last 2 versions', '> 5% in GB']
        }),
        cssnano({
            discardComments: {
                removeAll: true
            },
            discardEmpty: true,
            calc: {
                precision: 3
            }
        })
    ];
    return gulp.src(themeRoot + '/styles/src/*.css')
        .pipe(postcss(processors), {
            syntax: scss
        })
        .pipe(gulp.dest(themeRoot + '/styles/dist'));
});

/* ==========================================================================
   Scripts
   ========================================================================== */

var browserify = require('browserify');
var babelify = require('babelify');
var tap = require('gulp-tap');
var buffer = require('gulp-buffer');
var sourcemaps = require('gulp-sourcemaps');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');

gulp.task('lint-scripts', function () {
    return gulp.src(themeRoot + '/js/src/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('scripts', ['lint-scripts'], function () {
    return gulp.src(themeRoot + '/js/src/**/*.js', { read: false })
    .pipe(tap(function (file) {
        gutil.log('Bundling ' + file.path);
        file.contents = browserify(file.path, {
            debug: true,
            transform: [babelify]
        })
        .bundle();
    }))
    .pipe(buffer())
    .pipe(sourcemaps.init({
        loadMaps: true
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(themeRoot + '/js/dist'))
    .pipe(browserSync.stream());
});

gulp.task('dist-scripts', ['lint-scripts'], function () {
    return gulp.src(themeRoot + '/js/src/**/*.js', { read: false })
    .pipe(tap(function (file) {
        gutil.log('Bundling ' + file.path);
        file.contents = browserify(file.path, {
            transform: [babelify]
        })
        .bundle();
    }))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(themeRoot + '/js/dist'));
});

/* ==========================================================================
   Watch
   ========================================================================== */

gulp.task('watch', ['styles', 'scripts', 'server'], function () {
    // .css
    watch(themeRoot + '/styles/src/**/*.css', function () {
        runSequence('styles');
    });

    // .js
    watch([
        themeRoot + '/js/src/**/*.js',
        themeRoot + '/js/src/**/*.vue'
    ], function (file) {
        runSequence('scripts');
    });

    // .html/.php
    watch([
        themeRoot + '/**/*.php',
        themeRoot + '/**/*.html'
    ], function (file) {
        gulp.src(file.path)
            .pipe(browserSync.stream());
    });
});

/* ==========================================================================
   Production 🚀
   ========================================================================== */

gulp.task('build', function () {
    runSequence(
        ['dist-styles', 'dist-scripts']
    );
});
