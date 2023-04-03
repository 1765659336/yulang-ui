<template>
  <div class="packages-yulang-breadcrumb-container">
    <div class="hiddle-default-slot">
      <slot></slot>
    </div>
    <render-dom
      v-for="(item, index) in breadcrumbArr"
      :key="index"
      :to="item.to"
      :vNode="item.vNode"
      :index="item.index"
      :separator="separator"
      :separatorClass="separatorClass"
    ></render-dom>
  </div>
</template>

<script>
export default {
  name: "yulang-breadcrumb",
  components: {
    RenderDom: {
      props: ["to", "vNode", "index", "separator", "separatorClass"],
      render(createElement) {
        if (this.separator) {
          if (this.separatorClass) {
            const icon = createElement("i", {
              class: `iconfont ${this.separatorClass}`,
            });
            return createElement("span", [icon, this.vNode]);
          } else {
            return createElement("span", [this.separator, this.vNode]);
          }
        } else {
          return createElement("span", [this.vNode]);
        }
      },
    },
  },
  props: {
    separator: {
      default: "/",
    },
    separatorClass: {
      type: String,
    },
  },
  data() {
    return {
      breadcrumbArr: [],
    };
  },
  mounted() {
    this.$children.forEach((component, index) => {
      if (component.yulangComponentName === "yulang-breadcrumb-item") {
        this.breadcrumbArr.push({
          vNode: component.$vnode,
          to: component.to,
          index,
        });
      }
    });
  },
};
</script>

<style lang="less" scoped>
.packages-yulang-breadcrumb-container {
  .hiddle-default-slot {
    display: none;
  }
}
</style>
