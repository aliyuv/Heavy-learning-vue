import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import profile from "../components/profile";
// import HomeNews from "../components/homeNews";
// import Home from "../components/Home";
// import About from "../components/about";
// import User from "../components/User";


const Home = () => import('../components/Home');
const HomeNews = () => import('../components/homeNews');
const About = () => import('../components/about');
const User = () => import('../components/User');
const profile = () => import('../components/profile');
//安装
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/home',

    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'news',
          component: HomeNews
        }
      ],
      meta:{
        title: '首页'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/user/:id',
      component: User,
      meta: {
        title: '用户'
      }
    },
    {
      path: '/profile',
      component: profile
    }
  ],
  linkActiveClass: 'active'
})
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})
export default router;
