<template>
  <div>
    <yulang-slider
      :sliderValue.sync="sliderValue"
      :sliderStep="10"
      isOpenDigitalModulation
      @input="input"
      @change="change"
    ></yulang-slider>
  </div>
</template>

<script>
export default {
  name: "packages-demo-yulang-slider",
  data() {
    return {
      sliderValue: 0,
    };
  },
  methods: {
    input(value) {
      console.log("实时预览修改的值", value);
    },
    change(value) {
      console.log("鼠标松开之后触发", value);
    },
  },
};
</script>

<style lang="less" scoped></style>
