import webfont from 'webfontloader';
import Vue from 'vue';
import App from './app/app.vue';

webfont.load({
  google: {
    families: ['Open Sans:300,400,800']
  }
});

export default new Vue({
  render: h => h(App)
}).$mount('#app');
