<template>
  <div>
    head
    <yulang-button @click="btn" size="small">不禁用按钮</yulang-button>
    <yulang-button type="success" size="mini">不禁用按钮</yulang-button>
    <yulang-button type="error">不禁用按钮</yulang-button>
    <yulang-button disabled @click="btn">按钮</yulang-button>
    <yulang-button disabled>不禁用按钮</yulang-button>
    <yulang-button disabled>不禁用按钮</yulang-button>
  </div>
</template>

<script>
import YulangButton from '@/packages/yulang-button/YulangButton.vue';
export default {
  components: { YulangButton },
  name: 'yulang-head',
  methods: {
    btn(e) {
      console.log(e, 'btn');
    },
  },
};
</script>

<style></style>
