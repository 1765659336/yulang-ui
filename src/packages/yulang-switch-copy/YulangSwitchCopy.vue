<template>
  <div>
    <span v-if="textTitle[0]" :class="!inputValue ? 'close' : ''">{{
      textTitle[0]
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
    <span v-if="textTitle[1]" :class="inputValue ? 'open' : ''">{{
      textTitle[1]
    }}</span>
  </div>
</template>

<script>
export default {
  name: "yulang-switch-copy",
  props: {
    value: {
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
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    inputValueChange() {
      this.inputValue = !this.inputValue;
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
