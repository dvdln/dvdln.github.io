import webfont from 'webfontloader';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app/app.vue';
import routes from './routes';

webfont.load({
  google: {
    families: ['Open Sans:300,400,800']
  }
});

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

export default new Vue({
  render: h => h(App),
  router
}).$mount('#app');
