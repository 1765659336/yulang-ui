<template>
  <div>
    <span v-if="props.textTitle[0]" :class="!inputValue ? 'close' : ''">{{
      props.textTitle[0]
    }}</span>
    <div
      class="custom-switch-container"
      :style="{
        '--justify-content--': `${inputValue ? 'end' : 'start'} `,
        '--background-color--': `${inputValue ? 'green' : 'red'}`,
      }"
      @click="inputValueChange"
    >
      <div class="custom-switch-switch"></div>
    </div>
    <span v-if="props.textTitle[1]" :class="inputValue ? 'open' : ''">{{
      props.textTitle[1]
    }}</span>
  </div>
</template>

<script>
export default {
  name: "yulang-switch",
  props: {
    modelValue: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    textTitle: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  computed: {
    inputValue: {
      get: () => {
        return this.modelValue;
      },
      set: (newValue) => {
        this.$emits("update:modelValue", newValue);
      },
    },
  },
  methods: {
    inputValueChange() {
      this.emits("update:modelValue", !this.inputValue);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>