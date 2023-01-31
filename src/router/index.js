import Vue from 'vue'
import VueRouter from 'vue-router'
import Root from '@/views/root/Root.vue'
import Home from '@/views/root/home/Home.vue'
import PackagesDemo from '@/views/root/packages-demo/PackagesDemo.vue'
import Guide from '@/views/root/guide/Guide.vue';
import YulangButton from '@/views/root/packages-demo/yulang-button/YulangButton.vue';
import YulangSwitch from '@/views/root/packages-demo/yulang-switch/YulangSwitch.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/root'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/Login.vue')
  },
  {
    path: '/root',
    name: 'root',
    component: Root,
    children: [
      {
        path: '',
        redirect: 'packages-demo'
      },
      {
        path: 'home',
        name: 'home',
        component: Home,
      },
      {
        path: 'packages-demo',
        name: 'packages-demo',
        component: PackagesDemo,
        children: [
          {
            path: '',
            redirect: 'yulang-button'
          },
          {
            path: 'yulang-button',
            name: 'yulang-button',
            component: YulangButton,
          },
          {
            path: 'yulang-switch',
            name: 'yulang-switch',
            component: YulangSwitch,
          },
        ]
      },
      {
        path: 'guide',
        name: 'guide',
        component: Guide,
      }
    ]
  }
]

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  console.log(to, from, next);
  next();
})

export default router
