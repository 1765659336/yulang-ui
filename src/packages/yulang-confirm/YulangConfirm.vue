<template>
  <div class="packages-yulang-confirm-container">
    <yulang-popover trigger="click" :minWidth="150" ref="popover">
      <template #reference><slot name="reference"></slot></template>
      <template #content>
        <div class="yulang-confirm-content-container">
          <div class="yulang-confirm-content-title">
            <slot
              ><i :class="['iconfont', icon]" :style="{ color: iconColor }"></i
              >{{ title }}</slot
            >
          </div>
          <div class="yulang-confirm-content-click">
            <div
              class="yulang-confirm-cancel"
              @click="($event) => cancelClick($event)"
            >
              {{ cancelButtonText }}
            </div>
            <div class="yulang-confirm-ok" @click="($event) => okClick($event)">
              {{ confirmButtonText }}
            </div>
          </div>
        </div>
      </template>
    </yulang-popover>
  </div>
</template>

<script>
export default {
  name: "yulang-confirm",
  props: {
    title: {},
    cancelButtonText: {
      default() {
        return this.$locale.gv(["confirm", "cancelButtonText"]);
      },
    },
    confirmButtonText: {
      default() {
        return this.$locale.gv(["confirm", "confirmButtonText"]);
      },
    },
    icon: {},
    iconColor: {},
  },
  methods: {
    // 返回事件
    cancelClick(e) {
      this.$refs.popover.showChange(e);
      this.$listeners.cancel && this.$listeners.cancel(e);
    },
    // 确定事件
    okClick(e) {
      this.$refs.popover.showChange(e);
      this.$listeners.confirm && this.$listeners.confirm(e);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
