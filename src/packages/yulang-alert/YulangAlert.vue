<template>
  <div
    :class="[
      'packages-yulang-alert-container',
      `effect-${effect}`,
      `type-${type}`,
    ]"
    v-if="isShow"
  >
    <slot>
      <div class="yulang-alert-content-container">
        <i :class="iconClassComputed" v-if="showIcon"></i>
        <div class="yulang-alert-content-content-container">
          <div class="packages-yulang-alert-title-container">
            <div>{{ title }}</div>
            <div class="close-container" @click="close" v-if="closable">
              <div v-if="closeText">{{ closeText }}</div>
              <i v-else class="iconfont icon-guanbi"></i>
            </div>
          </div>
          <div class="packages-yulang-alert-description">
            {{ description }}
          </div>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "yulang-alert",
  props: {
    title: {},
    // 类型
    type: {
      type: String,
      default: "info",
      validator(value) {
        return ["info", "success", "warning", "error"].find(
          (item) => item === value
        );
      },
    },
    // 主题
    effect: {
      type: String,
      default: "light",
      validator(value) {
        return ["light", "dark"].find((item) => item === value);
      },
    },
    // 是否可关闭
    closable: {
      type: Boolean,
      default: true,
    },
    // 是否展示icon
    showIcon: {
      type: Boolean,
      default: false,
    },
    // 文字是否居中
    center: {
      type: Boolean,
      default: false,
    },
    // 描述文本
    description: {},
    // 替代关闭icon的文本
    closeText: {
      type: String,
    },
  },
  data() {
    return {
      isShow: true,
    };
  },
  computed: {
    iconClassComputed() {
      const iconType = {
        info: "icon-tishi1",
        success: "icon-zhengque",
        warning: "icon-jinggao",
        error: "icon-guanbi1",
      };
      return [
        "iconfont",
        iconType[this.type],
        this.description ? "icon-description" : "",
      ];
    },
  },
  methods: {
    close() {
      this.isShow = false;
      this.$listeners.close && this.$listeners.close();
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
