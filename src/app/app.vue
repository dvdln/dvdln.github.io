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
  <div class="page wf-hide">
    <header>
      <h1 class="site-title">David Lane</h1>
      <div>I use things to make stuff</div>
    </header>

    <app-navigation></app-navigation>

    <main class="page-content">
      <transition name="crossfade">
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

  body {
    margin: 0;
    padding: 2rem;
    text-align: center;
  }

  @media only screen and (max-width : 480px) {
    :root, html { font-size: 16px; }
    body        { padding: 1rem;   }
  }

  @media only screen and (min-width : 1440px) {
    :root, html { font-size: 20px; }
    body        { padding: 3rem;   }
  }

  .crossfade-enter-active, .crossfade-leave-active {
    transition: all 0.2s;
  }

  .crossfade-enter, .crossfade-leave-active {
    opacity: 0;
    transform: translateY(1rem);
  }

  .crossfade-leave-active {
    position: absolute;
  }

  .wf-loading .wf-hide {
    color: transparent !important;
  }

  a {
    color: currentColor;
    font-weight: 700;
  }
</style>

<style scoped>
  .site-title {
    font-family: 'Neuton', serif;
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1;
  }

  .page {
    position: relative;
    margin: 0 auto;
    max-width: 48rem;
    text-align: left;
  }

  .page-content {
    margin: 2rem 0;
    position: relative;
  }
</style>
