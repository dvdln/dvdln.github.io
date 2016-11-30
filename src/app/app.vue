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
      <p>I use things to make stuff</p>
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
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
  @import '~minireset.css';

  :root, html {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
  }

  body {
    padding: 2rem;
  }

  @media only screen and (max-device-width : 480px) {
    body {
      padding: 1rem;
      -webkit-text-size-adjust: none;
    }
  }

  .wf-loading header {
    color: white;
  }

  header h1 {
    font-family: 'Neuton', serif;
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1;
  }

  nav {
    margin: 1rem 0;
    border: 0px solid lightgray;
    border-top-width: 1px;
    line-height: 1;
  }

  nav li {
    display: inline-block;
    margin: 0 1rem -3px 0;
    color: currentColor;
    border: 0px solid transparent;
    border-bottom-width: 3px;
  }

  nav li a {
    padding: 1rem 0.5rem;
    margin: 0 -0.5rem;
    display: inline-block;
    color: currentColor;
    text-decoration: none;
  }

  nav li.router-link-active {
    border-bottom-color: currentColor;
  }

  main {
    margin: 3rem 0;
  }
</style>
