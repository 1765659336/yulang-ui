<template>
  <div
    class="packages-yulang-avatar-container"
    :style="{
      '--avator-img-object-fit--': 'cover',
      '--avatar-img-size--': sizeComputed + 'px',
    }"
  >
    <img
      v-if="src && imgLoadTrue"
      :src="src"
      :class="[`avatar-img-shape-${shape}`, 'avatar-content']"
      @error="imgError"
    />
    <div
      v-else-if="icon"
      :class="[`avatar-img-shape-${shape}`, 'avatar-content']"
    >
      <i :class="`iconfont ${icon}`"></i>
    </div>
    <div v-else :class="[`avatar-img-shape-${shape}`, 'avatar-content']">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "yulang-avatar",
  props: {
    // 尺寸
    size: {
      type: [String, Number],
      default: "large",
      validator(value) {
        if (typeof value === "string") {
          return ["large", "medium", "small"].find((item) => item === value);
        }
        return true;
      },
    },
    // 图片路径
    src: {
      type: String,
    },
    // 圆型或方型
    shape: {
      type: String,
      default: "circle",
      validator(value) {
        return ["square", "circle"].find((item) => item === value);
      },
    },
    // 展示的icon
    icon: {
      type: String,
    },
  },
  data() {
    return {
      imgLoadTrue: true,
    };
  },
  computed: {
    sizeComputed() {
      if (typeof this.size === "string") {
        return {
          large: 40,
          medium: 30,
          small: 20,
        }[this.size];
      } else {
        return this.size;
      }
    },
  },
  methods: {
    imgError() {
      this.imgLoadTrue = false;
      this.$listeners.error && this.$listeners.error();
    },
  },
};
</script>

<style lang="less" scoped>
.packages-yulang-avatar-container {
  display: inline-block;

  .avatar-content {
    background-color: #ccc;
    height: var(--avatar-img-size--);
    width: var(--avatar-img-size--);
    text-align: center;
    line-height: var(--avatar-img-size--);
  }

  img {
    object-fit: var(--avator-img-object-fit--);
  }

  .avatar-img-shape-circle {
    border-radius: 50%;
  }
  .avatar-img-shape-square {
    border-radius: 4px;
  }
}
</style>
