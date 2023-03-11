import Vue from "vue";
import VueRouter from "vue-router";
import Root from "@/views/root/Root.vue";
import PackagesDemo from "@/views/root/packages-demo/PackagesDemo.vue";
import Guide from "@/views/root/guide/Guide.vue";
import YulangButton from "@/views/root/packages-demo/yulang-button/YulangButton.vue";
import YulangTabs from "@/views/root/packages-demo/yulang-tabs/YulangTabs.vue";
import YulangDivider from "@/views/root/packages-demo/yulang-divider/YulangDivider.vue";
import YulangInput from "@/views/root/packages-demo/yulang-input/YulangInput.vue";
import YulangPopover from "@/views/root/packages-demo/yulang-popover/YulangPopover.vue";
import YulangTimePicker from "@/views/root/packages-demo/yulang-time-picker/YulangTimePicker.vue";

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
    redirect: "/home",
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
    name: "root",
    component: Root,
    children: [
      {
        path: "",
        redirect: "home",
      },
      {
        path: "/home",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/root/home/Home.vue"),
        meta: {
          keepAlive: false,
          isAuth: true,
          title: "YulangUI",
        },
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
      {
        path: "packages-demo",
        name: "packages-demo",
        component: PackagesDemo,
        children: [
          {
            path: "",
            redirect: "yulang-switch",
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
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-switch/YulangSwitch.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "开关 Switch",
            },
          },
          {
            path: "yulang-slider",
            name: "yulang-slider",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-slider/YulangSlider.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "滑块 Slider",
            },
          },
          {
            path: "yulang-signaure",
            name: "yulang-signaure",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-signaure/YulangSignaure.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "签名板 Signaure",
            },
          },
          {
            path: "yulang-upload",
            name: "yulang-upload",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-upload/YulangUpload.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "上传 Upload",
            },
          },
          {
            path: "yulang-canvas",
            name: "yulang-canvas",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-canvas/YulangCanvas.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "画布 Canvas",
            },
          },
          {
            path: "yulang-anchor-point",
            name: "yulang-anchor-point",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-anchor-point/YulangAnchorPoint.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "锚点 AnchorPoint",
            },
          },
          {
            path: "yulang-icon",
            name: "yulang-icon",
            component: () =>
              import("@/views/root/packages-demo/yulang-icon/YulangIcon.vue"),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "图标 Icon",
            },
          },
          {
            path: "yulang-describe-frame",
            name: "yulang-describe-frame",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-describe-frame/YulangDescribeFrame.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "描述框 DescribeFrame",
            },
          },
          {
            path: "yulang-link",
            name: "yulang-link",
            component: () =>
              import("@/views/root/packages-demo/yulang-link/YulangLink.vue"),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "文字链接 Link",
            },
          },
          {
            path: "yulang-dialog",
            name: "yulang-dialog",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-dialog/YulangDialog.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "对话框 Dialog",
            },
          },
          {
            path: "yulang-back-top",
            name: "yulang-back-top",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-back-top/YulangBackTop.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "回到顶部 BackTop",
            },
          },
          {
            path: "yulang-checkbox",
            name: "yulang-checkbox",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-checkbox/YulangCheckbox.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "复选框 Checkbox",
            },
          },
          {
            path: "yulang-switch-copy",
            name: "yulang-switch-copy",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-switch-copy/YulangSwitchCopy.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "开关Copy SwitchCopy",
            },
          },
          {
            path: "yulang-form",
            name: "yulang-form",
            component: () =>
              import("@/views/root/packages-demo/yulang-form/YulangForm.vue"),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "表单Form Form",
            },
          },
          {
            path: "yulang-table",
            name: "yulang-table",
            component: () =>
              import("@/views/root/packages-demo/yulang-table/YulangTable.vue"),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "表格Table Table",
            },
          },
          {
            path: "yulang-notification",
            name: "yulang-notification",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-notification/YulangNotification.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "通知 Notification",
            },
          },
          {
            path: "yulang-message",
            name: "yulang-message",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-message/YulangMessage.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "消息提示Message Message",
            },
          },
          {
            path: "yulang-loading",
            name: "yulang-loading",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-loading/YulangLoading.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "加载中Loading Loading",
            },
          },
          {
            path: "yulang-leader",
            name: "yulang-leader",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-leader/YulangLeader.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "引导 Leader",
            },
          },
          {
            path: "yulang-tree",
            name: "yulang-tree",
            component: () =>
              import("@/views/root/packages-demo/yulang-tree/YulangTree.vue"),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "树Tree Tree",
            },
          },
          {
            path: "yulang-select",
            name: "yulang-select",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-select/YulangSelect.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "下拉框 Select",
            },
          },
          {
            path: "yulang-tabs",
            name: "yulang-tabs",
            component: YulangTabs,
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "标签页Tabs Tabs",
            },
          },
          {
            path: "yulang-divider",
            name: "yulang-divider",
            component: YulangDivider,
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "标签页Divider Divider",
            },
          },
          {
            path: "yulang-input",
            name: "yulang-input",
            component: YulangInput,
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "输入框 Input",
            },
          },
          {
            path: "yulang-scroll-infinite",
            name: "yulang-scroll-infinite",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-scroll-infinite/YulangScrollInfinite.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "无限滚动 ScrollInfinite",
            },
          },
          {
            path: "yulang-popover",
            name: "yulang-popover",
            component: YulangPopover,
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "弹出框 Popover",
            },
          },
          {
            path: "yulang-time-picker",
            name: "yulang-time-picker",
            component: YulangTimePicker,
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "时间选择器 TimePicker",
            },
          },
          {
            path: "yulang-tooltip",
            name: "yulang-tooltip",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-tooltip/YulangTooltip.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "文字提示 Tooltip",
            },
          },
          {
            path: "yulang-confirm",
            name: "yulang-confirm",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-confirm/YulangConfirm.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "气泡确认框 Confirm",
            },
          },
          {
            path: "yulang-drawer",
            name: "yulang-drawer",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-drawer/YulangDrawer.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "抽屉 YulangDrawer",
            },
          },
          {
            path: "yulang-collapse",
            name: "yulang-collapse",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-collapse/YulangCollapse.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "折叠面板 YulangCollapse",
            },
          },
          {
            path: "yulang-skeleton",
            name: "yulang-skeleton",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-skeleton/YulangSkeleton.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "骨架屏 YulangSkeleton",
            },
          },
          {
            path: "yulang-rate",
            name: "yulang-rate",
            component: () =>
              import("@/views/root/packages-demo/yulang-rate/YulangRate.vue"),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "评分 YulangRate",
            },
          },
          {
            path: "yulang-radio",
            name: "yulang-radio",
            component: () =>
              import("@/views/root/packages-demo/yulang-radio/YulangRadio.vue"),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "单选框 YulangRadio",
            },
          },
          {
            path: "yulang-container",
            name: "yulang-container",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-container/YulangContainer.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "布局容器 YulangContainer",
            },
          },
          {
            path: "yulang-pagination",
            name: "yulang-pagination",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-pagination/YulangPagination.vue"),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "分页 YulangPagination",
            }
          },
          {
            path: "yulang-table-plus",
            name: "yulang-table-plus",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-table-plus/YulangTablePlus.vue"),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "表格PLUS YulangTablePlus",
            },
          },
          {
            path: "yulang-color-picker",
            name: "yulang-color-picker",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-color-picker/YulangColorPicker.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "颜色选择器 YulangColorPicker",
            },
          },
          {
            path: "yulang-timeline",
            name: "yulang-timeline",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-timeline/YulangTimeline.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "时间线 YulangTimeline",
            },
          },
          {
            path: "yulang-dropdown",
            name: "yulang-dropdown",
            component: () =>
              import(
                "@/views/root/packages-demo/yulang-dropdown/YulangDropdown.vue"
              ),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "下拉菜单 YulangDropdown",
            },
          },
        ],
      },
      {
        path: "theme",
        name: "theme",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/root/theme/Theme.vue"
          ),
        meta: {
          keepAlive: true,
          isAuth: true,
        },
      },
      {
        path: "resources",
        name: "resources",
        component: () => import("@/views/root/resources/Resources.vue"),
        meta: {
          keepAlive: true,
          isAuth: true,
          title: "资源",
        },
        children: [
          {
            path: "",
            redirect: "animate",
          },
          {
            path: "animate",
            name: "animate",
            component: () =>
              import("@/views/root/resources/animate/Animate.vue"),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "动画 yulang-animate",
            },
          },
          {
            path: "tools",
            name: "tools",
            component: () => import("@/views/root/resources/tools/Tools.vue"),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "工具 yulang-tools",
            },
          },
          {
            path: "instruction",
            name: "instruction",
            component: () =>
              import("@/views/root/resources/instruction/Instruction.vue"),
            meta: {
              keepAlive: true,
              isAuth: true,
              title: "指令 yulang-instruction",
            },
          },
        ],
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
