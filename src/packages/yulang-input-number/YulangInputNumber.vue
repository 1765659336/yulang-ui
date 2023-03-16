<template>
  <div class="packages-yulang-input-number-container">
    <yulang-input
      v-model="valueComputed"
      @input="valueComputedInput"
      @blur="valueComputedBlur"
      :disabled="disabled"
    >
      <template #prepend
        ><i
          :class="['iconfont', 'icon-jian', disabled ? 'icon-disabled' : '']"
          @click="changeValue(-step)"
        ></i
      ></template>
      <template #append
        ><i
          :class="['iconfont', 'icon-jia', disabled ? 'icon-disabled' : '']"
          @click="changeValue(step)"
        ></i
      ></template>
    </yulang-input>
  </div>
</template>

<script>
import { isRealNum } from "@/packages/lib";
import YulangInput from "@/packages/yulang-input/YulangInput.vue";
export default {
  name: "yulang-input-number",
  components: {
    YulangInput,
  },
  props: {
    value: {
      type: Number,
    },
    step: {
      type: Number,
      default() {
        return 1;
      },
    },
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    // 严格步数模式
    stepStrictly: {
      type: Boolean,
      default: false,
    },
    // 精度
    precision: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    valueComputed: {
      get() {
        return this.value;
      },
      set(newValue) {
        if (!isRealNum(newValue)) {
          // 如果输入的不是数字则不修改值，那么失焦重新渲染的值则是上一次满足要求的数字
          newValue = this.value;
        }
        if (this.min && newValue <= this.min) {
          newValue = this.min;
        }
        if (this.max && newValue >= this.max) {
          newValue = this.max;
        }
        if (this.precision) {
          newValue.toFixed &&
            (newValue = Number(newValue.toFixed(this.precision)));
        }
        this.$listeners.change && this.$listeners.change(newValue);
        this.$emit("input", newValue);
      },
    },
  },
  methods: {
    changeValue(value) {
      !this.disabled && (this.valueComputed += value);
    },
    valueComputedBlur(e) {
      // 开启严格步长模式，失去焦点修改不满足步长的倍数的值
      if (this.stepStrictly && this.valueComputed % this.step !== 0) {
        // 向上取步长
        this.valueComputed =
          Math.ceil(this.valueComputed / this.step) * this.step;
      }
      if (e.target.value !== this.valueComputed) {
        this.$forceUpdate();
      }
    },
    valueComputedInput(value) {
      this.valueComputed = Number(value);
    },
  },
};
</script>

<style lang="less" scoped>
.packages-yulang-input-number-container {
  :deep(.package-yulang-input) {
    width: 40px;
  }

  .icon-jian {
    padding: 8px;
    cursor: pointer;
  }

  .icon-jia {
    padding: 8px;
    cursor: pointer;
  }

  .icon-disabled {
    cursor: not-allowed;
  }
}
</style>
