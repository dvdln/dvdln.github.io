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
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
  @import '~minireset.css';

  :root, html {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  body {
    padding: 2rem;
  }

  #page {
    max-width: 640px;
  }

  h1 {
    font-size: 2rem;
    font-weight: 800;
  }

  nav {
    margin: 1.5rem 0;
  }

  nav li {
    display: inline-block;
    margin: 0 1.5rem 0 0;
    color: rebeccapurple;
    border: 0px solid transparent;
    border-bottom-width: 2px;
  }

  nav li a {
    display: inline-block;
    margin: 0 -0.75rem;
    padding: 0.5rem 0.75rem;
    color: currentColor;
    text-decoration: none;
  }

  nav li.router-link-active {
    border-bottom-color: currentColor;
  }
</style>
