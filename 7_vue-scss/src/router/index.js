import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from "../views/Contact";
import NotFound from "../views/NotFound";
import Profile from "../views/Profile";
import Login from "../views/Login";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/contact",
    name: 'Contact',
    component: Contact
  },
  {
    path: "*",
    component: NotFound
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass : "active",
})

router.beforeEach((to, from, next)=>{
  if(to.path == "/profile" || to.path == "/contact"){
    if (localStorage.getItem("vueAuth") == "true"){
      next();
    }else {
      next("/login");
    }
  }else {
    next();
  }
})

export default router
