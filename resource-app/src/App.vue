<template>
  <div id="app">
    <header class="header">
      <div class="nav">
        <router-link to="/">Home</router-link> |
        <!--router-link to="/subscribe">Subscribe</router-link-->
        <router-link to="/donate">Donate</router-link>
      </div>
      <h1 class="logo">THE PINK BOX</h1>
    </header>
    <!--img class="logo" src="@/assets/logo.png" /-->
    <router-view class="view" />
  </div>
</template>

<style lang="scss">
@import "~pretty-checkbox/src/pretty-checkbox.scss";

* {
  margin: 0;
  padding: 0;
}

body {
  background: rgb(255, 244, 245);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}

.header {
  height: 20vh;
  width: 100vw;
}

.nav {
  padding: 10px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.logo {
  margin: 20px;
  font-family: "Helvetica Neue";
  font-weight: bold;
  font-size: 10vh;
  color: rgb(192, 54, 77);
}

.view {
  height: 80vh;
  width: 100vw;
}
</style>
