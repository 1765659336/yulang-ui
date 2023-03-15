<template>
  <div
    :class="['packages-yulang-radio-container', 'yulang-radio-disabled']"
    :style="{ '--cursor--': disabled ? 'not-allowed' : 'pointer' }"
  >
    <input
      type="radio"
      :id="label + name"
      :value="label"
      :name="name"
      :checked="checked"
      @change="radioValueChange"
      :disabled="disabled"
      :class="[
        'yulang-radio-disabled',
        checked ? 'yulang-animate yulang-pull-release' : '',
      ]"
    />
    <label :for="label + name" class="yulang-radio-balel yulang-radio-disabled"
      ><slot></slot
    ></label>
  </div>
</template>

<script>
export default {
  name: "yulang-radio",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    label: {
      require: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      yulangComponentName: "yulang-radio",
      // radio-group的相同name值
      name: "",
      // 是否被选中
      checked: false,
    };
  },
  computed: {
    valueComputed: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
  methods: {
    // 值修改函数
    valueChange() {
      if (this.$parent.yulangComponentName === "yulang-radio-group") {
        this.$parent.valueComputed = this.label;
      }
      // 将radio-group中的元素选中状态全改为false
      this.$parent.$children.forEach((component) => {
        if (component.yulangComponentName === "yulang-radio") {
          component.checked = false;
          component.valueComputed = false;
        }
      });
      // 再将当前的改为true
      this.checked = true;
    },
    radioValueChange() {
      this.valueChange();
      this.valueComputed = !this.valueComputed;
      this.$parent.$listeners.change &&
        this.$parent.$listeners.change(this.label);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
