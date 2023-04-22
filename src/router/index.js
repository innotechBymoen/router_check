import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import MenuPage from '@/views/MenuPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomePage,
    name: `Home Page`,
    meta: [
      {
        name: `description`,
        content: `This is the home page`
      },
      {
        name: `author`,
        content: `Alex Bymoen`
      },
    ]
  },
  {
    path: '/about',
    component: AboutPage,
    name: `About Page`,
    meta: [
      {
        name: `description`,
        content: `This is the about page`
      },
      {
        name: `author`,
        content: `Alice`
      },
    ]
  },
  {
    path: '/menu',
    component: MenuPage,
    name: `Menu Page`,
    meta: [
      {
        name: `description`,
        content: `This is the menu page`
      },
      {
        name: `author`,
        content: `Bob`
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.querySelectorAll(`.meta_remove`).forEach(tag => tag.remove());
  document.querySelector(`title`)[`innerText`] = to[`name`];
  to[`meta`].forEach(meta => document.querySelector(`head`).insertAdjacentHTML(`beforeend`, `<meta class="meta_remove" name="${meta[`name`]}" content="${meta[`content`]}">`));
  
  from;
  next();
});

export default router
