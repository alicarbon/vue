<template>

      <div class="o-page-container">
        <div id="app">

          <header class="c-header">
              <div class="c-header__wrap">

                  <router-link class="c-header__brand" to="/"></router-link>

                  <nav class="c-navigation">
                      <ul class="c-navigation__list">
                          <li class="c-navigation__item">
                              <a class="c-navigation__link" href="">Home</a>
                          </li>
                          <li class="c-navigation__item">
                              <a class="c-navigation__link" href="">Glossary</a>
                          </li>
                      </ul>
                  </nav>

                  <div class="c-header__cta">
                      <a class="c-button c-button--white" href="<?php echo home_url(); ?>/register-your-interest">Get started now!</a>
                      <p class="c-header__cta-text">
                          <!-- Uncomment this when people can register, and delete the 'register your interest' below!
                          Already started? <a class="login" href="#">Log in!</a> -->
                          Register your interest today!
                      </p>
                  </div>
                  <a class="c-header__toggle">
                      <span class="c-header__toggle__button">
                          <span class="c-header__toggle__burger"></span>
                      </span>
                  </a>
              </div>
          </header>

          <router-view></router-view>

          <footer class="c-footer__container">
              <div class="c-footer">
                  <ul>
                      <li>
                          <router-link to="/topic-1">Topic 1</router-link>
                      </li>
                      <li>
                          <router-link to="/topic-2">Topic 2</router-link>
                      </li>
                      <li>
                          <router-link to="/topic-3">Topic 3</router-link>
                      </li>
                      <li>
                          <router-link to="/topic-4">Topic 4</router-link>
                      </li>
                  </ul>
              </div>
          </footer>

      </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
@import "styles/main.css";
</style>
