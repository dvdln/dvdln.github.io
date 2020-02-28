<script>
  import routes from '../routes';

  const menu = routes.filter(r => r.nav);

  export default {
    name: 'app',
    data: () => ({menu})
  };
</script>

<template>
  <nav class="navigation">
    <ul>
      <router-link v-for="item in menu"
                   :to="item.path"
                   tag="li"
                   class="menu-item">
        <a class="menu-item-link">{{item.nav.text}}</a>
      </router-link>
    </ul>
  </nav>
</template>

<style scoped>
  .navigation {
    margin: 1rem 0;
    border: 0 solid lightgray;
    border-top-width: 1px;
  }

  .menu-item {
    display: inline-block;
    margin: 0 1rem 0 0;
    border: 0 solid transparent;
    border-bottom-width: 3px;
    transition: border-color 0.2s;
  }

  .menu-item.router-link-active {
    border-color: currentColor;
  }

  .menu-item-link {
    display: inline-block;
    margin: 0 -0.5rem;
    padding: 0 0.5rem;
    line-height: 3;
    font-weight: 400;
    text-decoration: none;
  }
</style>
