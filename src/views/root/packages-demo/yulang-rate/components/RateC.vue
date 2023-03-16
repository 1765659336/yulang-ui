<template>
  <yulang-rate :rateItemNumber="3" v-model="value">
    <template #rateItem0="{ selected }">
      <i
        :class="['iconfont', 'icon-yanjing', selected ? 'icon-selected' : '']"
      ></i>
    </template>
    <template #rateItem2="{ selected }">
      <div :class="['rateItem3', selected ? 'selected' : '']"></div>
    </template>
  </yulang-rate>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
};
</script>

<style lang="less" scoped>
.rateItem3 {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.icon-selected {
  color: var(--yulang-theme-color--);
}
.selected {
  background-color: var(--yulang-theme-color--);
}
</style>
