import About from './app/about.vue';
import Examples from './app/examples.vue';
import Resume from './app/resume.vue';

export default [
  {
    path: '/about',
    component: About,
    nav: {
      text: 'About Me'
    }
  },
  {
    path: '/examples',
    component: Examples,
    nav: {
      text: 'My Work'
    }
  },
  {
    path: '/resume',
    component: Resume,
    nav: {
      text: 'Resumé'
    }
  }
];
