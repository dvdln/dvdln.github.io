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
      <p>Developer: I use things to make stuff</p>
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

<style lang="sass">
  @import '~minireset.css/minireset.sass';

  :root, html {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
  }

  body {
    padding: 2rem;
    text-align: center;

    #page {
      margin: 0 auto;
      max-width: 1024px;
      text-align: left;
    }

    @media only screen and (max-width : 480px) {
      & {
        padding: 1rem;
        -webkit-text-size-adjust: none;
      }
    }

    a {
      color: currentColor;
      font-weight: 700;
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

  $navMargin: 1rem;
  $navBetween: 1rem;
  $navUnderlineWidth: 3px;

  nav {
    margin: $navMargin 0;
    border: 0px solid lightgray;
    border-top-width: 1px;
    line-height: 1;

    li {
      display: inline-block;
      margin: 0 $navBetween (-$navUnderlineWidth) 0;
      color: currentColor;
      border: 0px solid transparent;
      border-bottom-width: $navUnderlineWidth;

      &.router-link-active {
        border-bottom-color: currentColor;
      }

      a {
        padding: $navMargin ($navBetween / 2);
        margin: 0 (-$navBetween / 2);
        display: inline-block;
        color: currentColor;
        font-weight: 400;
        text-decoration: none;
      }
    }
  }
</style>
