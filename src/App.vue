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

                  <div class="c-header__user">
                      <h2 class="c-header__user-heading">Welcome, Martin</h2>
                      <p class="c-header__user-text">
                          Ready to leave? <a href="">Log out</a>
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

              <div class="c-section-nav__container c-section-nav__container--buttons">
                  <div class="c-section-nav">
                      <router-link to="" class="c-button c-button--alpha">Back</router-link>
                      <span class="c-section-nav__label">Section 5 of 6: Feedback</span>
                      <router-link to="" class="c-button c-button--alpha">Next</router-link>
                  </div>
              </div>

              <div class="c-section-nav__container c-section-nav__container--icons">
                  <div class="c-section-nav">
                      <ul class="c-section-nav__list">
                          <li class="c-section-nav__list-item">
                              <router-link to="/topic-1">Topic 1</router-link>
                          </li>
                          <li class="c-section-nav__list-item">
                              <router-link to="/topic-21">Topic 2</router-link>
                          </li>
                          <li class="c-section-nav__list-item">
                              <router-link to="/topic-22">Topic 3</router-link>
                          </li>
                          <li class="c-section-nav__list-item">
                              <router-link to="/topic-23">Topic 4</router-link>
                          </li>
                      </ul>
                  </div>
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
