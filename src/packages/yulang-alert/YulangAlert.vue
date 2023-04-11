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
.packages-yulang-alert-container {
  padding: 10px 20px;
  margin: 10px;
  border-radius: 4px;

  .yulang-alert-content-container {
    display: flex;

    .icon-description {
      font-size: 28px;
    }

    .yulang-alert-content-content-container {
      flex: 1;

      .packages-yulang-alert-title-container {
        display: flex;
        justify-content: space-between;

        .close-container {
          cursor: pointer;
        }
      }

      .packages-yulang-alert-description {
        font-size: 12px;
      }
    }
  }
}

.effect-light.type-info {
  background-color: #f4f4f5;
  color: #909399;
}

.effect-light.type-success {
  background-color: #f0f9eb;
  color: #67c23a;
}

.effect-light.type-warning {
  background-color: #fdf6ec;
  color: #e6a23c;
}

.effect-light.type-error {
  background-color: #fef0f0;
  color: #f56c6c;
}

.effect-dark.type-info {
  background-color: #909399;
  color: #fff;
}

.effect-dark.type-success {
  background-color: #67c23a;
  color: #fff;
}

.effect-dark.type-warning {
  background-color: #e6a23c;
  color: #fff;
}

.effect-dark.type-error {
  background-color: #f56c6c;
  color: #fff;
}
</style>
