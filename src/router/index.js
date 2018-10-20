import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import About from '@/views/About.vue'
import Livestream from '@/views/Livestream.vue'
import Events from '@/views/Events.vue'
import Admin from '@/views/Admin.vue'
import NotFound from '@/views/NotFound.vue'

import firebase from '../firebase';
import metaData from './metaData';


Vue.use(Router)

let router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/livestream',
      name: 'livestream',
      component: Livestream
    },
    {
      path: '/give',
      name: 'give',
      component: Contact
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/admin',
      name: 'admin',
      requiresAuth: true,
      component: Admin
    },
    {
      path: '**',
      name: '404',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) { next('login') } else {

    handleMetaData(to);

    next();
  }
});

//Sets doc title and all meta tags
function handleMetaData(to) {
  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  let meta = metaData[to.matched[0].path];
  if(!meta) { //Use default
    meta = metaData[''];
  }

  document.title = meta.title + ' | Progressive Baptist Church';

  let tagsToAdd = {
    'og:title': meta.title,
    'og:url': 'https://progressivechicago.org'+to.path,
    'og:description': meta.description,
  };

  for(var key in tagsToAdd) {
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('name', key);
    metaTag.setAttribute('content', tagsToAdd[key]);
    metaTag.setAttribute('data-vue-router-controlled', '');
    document.head.appendChild(metaTag);
  }
}

export default router
