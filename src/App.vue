<template>
  <div id="app">
      <header class="c-header">
          <p>
              <router-link to="/">Home</router-link> Global header here
          </p>
      </header>

      <router-view></router-view>

      <footer class="c-footer">
          <p>
              Global footer here
          </p>

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
      </footer>
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

html, body {
    margin: 0;
    padding: 0;
    height: 100%;
}

* {
    box-sizing: border-box;
}

#app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
