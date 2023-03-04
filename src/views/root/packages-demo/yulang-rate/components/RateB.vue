<template>
  <ul>
    <li>
      <span>商品评价</span
      ><yulang-rate v-model="value1" :rateItemNumber="5"></yulang-rate>
      <span>{{ value1 && textTip(value1, 5) }}</span>
    </li>
    <li>
      <span>店铺评价</span
      ><yulang-rate v-model="value2" :rateItemNumber="8"></yulang-rate>
      <span>{{ value2 && textTip(value2, 8) }}</span>
    </li>
    <li>
      <span>物流评价</span
      ><yulang-rate v-model="value3" :rateItemNumber="10"></yulang-rate>
      <span>{{ value3 && textTip(value3, 10) }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      value1: 1,
      value2: 2,
      value3: 3,
    };
  },
  methods: {
    textTip(rateLevel, maxLevel) {
      return rateLevel > Math.ceil(maxLevel / 2)
        ? rateLevel === maxLevel
          ? "赞"
          : "还行"
        : "差";
    },
  },
};
</script>

<style lang="less" scoped></style>
