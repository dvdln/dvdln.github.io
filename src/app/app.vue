<script>
  import routes from '../routes';

  const menu = routes.filter(r => r.nav);

  export default {
    name: 'app',
    data: () => ({menu})
  };
</script>

<template>
  <div id="page">
    <header>
      <h1>David Lane</h1>
      <div>I use things to make stuff</div>
    </header>

    <nav>
      <ul>
        <router-link v-for="item in menu"
                     :to="item.path"
                     tag="li">
          <a>{{item.nav.text}}</a>
        </router-link>
      </ul>
    </nav>

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

  nav {
    margin: 1rem 0;
    border: 0 solid lightgray;
    border-top-width: 1px;
  }

  nav li {
    display: inline-block;
    margin: 0 1rem 0 0;
    border: 0 solid transparent;
    border-bottom-width: 3px;
    transition: border-color 0.2s;
  }

  nav li.router-link-active {
    border-color: currentColor;
  }

  nav li a {
    display: inline-block;
    margin: 0 -0.5rem;
    padding: 0 0.5rem;
    line-height: 3;
    text-decoration: none;
  }

  main {
    margin: 2rem 0;
  }

  a {
    color: currentColor;
    font-weight: 700;
  }
</style>
