<script>
  import AppNavigation from './app-navigation.vue';

  export default {
    name: 'app',
    components: {
      AppNavigation
    }
  };
</script>

<template>
  <div id="page">
    <header>
      <h1>David Lane</h1>
      <div>I use things to make stuff</div>
    </header>

    <app-navigation></app-navigation>

    <main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<style>
  @import '~minireset.css';

  :root, html {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    -webkit-text-size-adjust: none;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  .fade-enter-active {
    transition-delay: 0.2s;
  }

  body {
    padding: 2rem;
    text-align: center;
  }

  @media only screen and (max-width : 480px) {
    body {
      padding: 1rem;
    }
  }

  #page {
    margin: 0 auto;
    max-width: 800px;
    text-align: left;
  }

  .wf-loading header {
    color: transparent;
  }

  header h1 {
    font-family: 'Neuton', serif;
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1;
  }

  main {
    margin: 2rem 0;
  }

  a {
    color: currentColor;
    font-weight: 700;
  }
</style>
