import Vue from "vue";
import VueRouter from "vue-router";
import Root from "@/views/root/Root.vue";
import Home from "@/views/root/home/Home.vue";
import PackagesDemo from "@/views/root/packages-demo/PackagesDemo.vue";
import Guide from "@/views/root/guide/Guide.vue";
import YulangButton from "@/views/root/packages-demo/yulang-button/YulangButton.vue";
import YulangSwitch from "@/views/root/packages-demo/yulang-switch/YulangSwitch.vue";
import YulangSlider from "@/views/root/packages-demo/yulang-slider/YulangSlider.vue";
import YulangSignaure from "@/views/root/packages-demo/yulang-signaure/YulangSignaure.vue";
import YulangUpload from "@/views/root/packages-demo/yulang-upload/YulangUpload.vue";
import YulangCanvas from "@/views/root/packages-demo/yulang-canvas/YulangCanvas.vue";
import YulangAnchorPoint from "@/views/root/packages-demo/yulang-anchor-point/YulangAnchorPoint.vue";
import YulangIcon from "@/views/root/packages-demo/yulang-icon/YulangIcon.vue";
import YulangDescribeFrame from "@/views/root/packages-demo/yulang-describe-frame/YulangDescribeFrame.vue";
import YulangLink from "@/views/root/packages-demo/yulang-link/YulangLink.vue";
import YulangDialog from "@/views/root/packages-demo/yulang-dialog/YulangDialog.vue";
import YulangBackTop from "@/views/root/packages-demo/yulang-back-top/YulangBackTop.vue";
import YulangCheckbox from "@/views/root/packages-demo/yulang-checkbox/YulangCheckbox.vue";
import YulangSwitchCopy from "@/views/root/packages-demo/yulang-switch-copy/YulangSwitchCopy.vue";
import YulangForm from "@/views/root/packages-demo/yulang-form/YulangForm.vue";
import YulangTable from "@/views/root/packages-demo/yulang-table/YulangTable.vue";
import YulangNotification from "@/views/root/packages-demo/yulang-notification/YulangNotification.vue";

// 处理路由重复跳转控制台报错
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.push;
const originalGo = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};
VueRouter.prototype.go = function go(location) {
  return originalGo.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

/* 
  meta: {
    keepAlive:是否缓存组件
    isAuth:前端设置是否需要跳过后端路由鉴权
  }
*/

const routes = [
  {
    path: "",
    redirect: "/root",
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login/Login.vue"),
    meta: {
      keepAlive: false,
      isAuth: true,
    },
  },
  {
    path: "/root",
    // name: "root",
    component: Root,
    children: [
      {
        path: "",
        redirect: "packages-demo",
      },
      {
        path: "home",
        name: "home",
        component: Home,
        meta: {
          keepAlive: true,
          isAuth: true,
        },
      },
      {
        path: "packages-demo",
        // name: "packages-demo",
        component: PackagesDemo,
        children: [
          {
            path: "",
            redirect: "yulang-button",
          },
          {
            path: "yulang-button",
            name: "yulang-button",
            component: YulangButton,
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "按钮 Button",
            },
          },
          {
            path: "yulang-switch",
            name: "yulang-switch",
            component: YulangSwitch,
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "开关 Switch",
            },
          },
          {
            path: "yulang-slider",
            name: "yulang-slider",
            component: YulangSlider,
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "滑块 Slider",
            },
          },
          {
            path: "yulang-signaure",
            name: "yulang-signaure",
            component: YulangSignaure,
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "签名板 Signaure",
            },
          },
          {
            path: "yulang-upload",
            name: "yulang-upload",
            component: YulangUpload,
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "上传 Upload",
            },
          },
          {
            path: "yulang-canvas",
            name: "yulang-canvas",
            component: YulangCanvas,
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "画布 canvas",
            },
          },
          {
            path: "yulang-anchor-point",
            name: "yulang-anchor-point",
            component: YulangAnchorPoint,
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "锚点 AnchorPoint",
            },
          },
          {
            path: "yulang-icon",
            name: "yulang-icon",
            component: YulangIcon,
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "图标 Icon",
            },
          },
          {
            path: "yulang-describe-frame",
            name: "yulang-describe-frame",
            component: YulangDescribeFrame,
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "描述框 DescribeFrame",
            },
          },
          {
            path: "yulang-link",
            name: "yulang-link",
            component: YulangLink,
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "文字链接 Link",
            },
          },
          {
            path: "yulang-dialog",
            name: "yulang-dialog",
            component: YulangDialog,
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "对话框 Dialog",
            },
          },
          {
            path: "yulang-back-top",
            name: "yulang-back-top",
            component: YulangBackTop,
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "回到顶部 BackTop",
            },
          },
          {
            path: "yulang-checkbox",
            name: "yulang-checkbox",
            component: YulangCheckbox,
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "复选框 Checkbox",
            },
          },
          {
            path: "yulang-switch-copy",
            name: "yulang-switch-copy",
            component: YulangSwitchCopy,
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "开关Copy SwitchCopy",
            },
          },
          {
            path: "yulang-form",
            name: "yulang-form",
            component: YulangForm,
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "表单Form Form",
            },
          },
          {
            path: "yulang-table",
            name: "yulang-table",
            component: YulangTable,
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "表格Table Table",
            },
          },
          {
            path: "yulang-notification",
            name: "yulang-notification",
            component: YulangNotification,
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "通知 Notification",
            },
          },
        ],
      },
      {
        path: "guide",
        name: "guide",
        component: Guide,
        meta: {
          keepAlive: true,
          isAuth: true,
          title: "指南",
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // 前端限制,isAuth为false或者没有设置，则代表没有权限
  if (!to.meta.isAuth) {
    // 后端限制,调用后端权限接口,判断是否有权限...
    const auth = false;
    if (auth) {
      next();
    } else {
      alert("你没有访问权限");
    }
  } else {
    next();
  }
});

router.afterEach((to) => {
  document.title = to.meta.title || "找不到了嘤嘤嘤";
});

export default router;
