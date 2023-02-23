<template>
  <div
    class="packages-yulang-rate-container"
    :style="{ '--cursor--': disabled ? 'not-allowed' : 'pointer' }"
    @mouseleave="disabled ? () => {} : containerMouseLeave"
  >
    <div
      v-for="(item, index) in rateItemNumber"
      :key="index"
      @mouseenter="disabled ? () => {} : mouseEnter(index)"
      @mouseleave="disabled ? () => {} : mouseLeave(index)"
      @click="disabled ? () => {} : mouseClick(index)"
      class="rate-item-container"
    >
      <slot :name="'rateItem' + index" :selected="classArr[index]['be-select']">
        <div :class="classArr[index]"></div>
      </slot>
    </div>
    <span v-if="showText">{{ textComputed }}</span>
    <span v-if="showScore">{{ scoreComputed }}</span>
  </div>
</template>

<script>
export default {
  name: "yulang-rate",
  props: {
    // 评分共有几个评级
    rateItemNumber: {
      type: Number,
      default: 1,
    },
    // 评分的值
    value: {
      type: Number,
      require: true,
    },
    // 辅助文字
    texts: {
      type: Array,
    },
    // 是否展示辅助文字
    showText: {
      type: Boolean,
      default: false,
    },
    // 再次点击是否可清空
    clearable: {
      type: Boolean,
      default: false,
    },
    // 是否只读
    disabled: {
      type: Boolean,
      default: false,
    },
    // 是否显示分数
    showScore: {
      type: Boolean,
      default: false,
    },
    scoreTemplate: {
      type: String,
    },
  },
  data() {
    return {
      classArr: [],
      // 点击之后是否还会随着鼠标的移动而选中
      isClickLock: false,
    };
  },
  computed: {
    textComputed: {
      get() {
        // 如果value为空或者为0
        if (!this.value) {
          return "";
        }
        return this.texts[this.value - 1];
      },
    },
    scoreComputed: {
      get() {
        if (!this.scoreTemplate) {
          return this.value;
        } else {
          return this.scoreTemplate.replace("{value}", this.value);
        }
      },
    },
  },
  methods: {
    // 鼠标进入
    mouseEnter(index) {
      if (!this.isClickLock) {
        this.changeValueAndStyle(index);
      }
    },
    // 鼠标离开
    mouseLeave(index) {
      if (!this.isClickLock && this.classArr[index]) {
        this.changeValueAndStyle(index);
      }
    },
    // 鼠标点击
    mouseClick(index) {
      // 如果index+1等于value值，并且开启可清空则将value值设置为0
      console.log(this.value === index + 1);
      if (this.clearable && this.value === index + 1) {
        this.changeValueAndStyle(-1);
      } else {
        if (this.rateItemNumber) {
          this.changeValueAndStyle(index);
        }
      }
      this.isClickLock = true;
    },
    // 样式与值修改
    changeValueAndStyle(index) {
      for (let i = 0; i < this.rateItemNumber; i++) {
        this.classArr[i] && (this.classArr[i]["be-select"] = i <= index);
      }
      this.$emit("input", index + 1);
    },
    // 外部容器移出事件
    containerMouseLeave() {
      if (this.isClickLock) {
        for (let i = 0; i <= this.rateItemNumber; i++) {
          this.classArr[i] && (this.classArr[i]["be-select"] = i < this.value);
        }
      }
    },
  },
  beforeMount() {
    if (this.rateItemNumber) {
      // 初始化类名数组
      for (let i = 0; i < this.rateItemNumber; i++) {
        this.classArr.push({ "yulang-rate-item": true, "be-select": false });
      }
      // 根据外部传入的默认值来设置组件的初始选中状态
      for (let i = 0; i < this.value; i++) {
        if (i <= this.rateItemNumber) {
          this.classArr[i]["be-select"] = true;
        }
      }
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
