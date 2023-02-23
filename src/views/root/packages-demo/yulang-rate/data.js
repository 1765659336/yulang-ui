export const codeStrB = `
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
`

export const codeStrC = `
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
  color: pink;
}
.selected {
  background-color: pink;
}
</style>
`

export const codeStrD = `
<template>
  <yulang-rate
    :rateItemNumber="3"
    v-model="value"
    :texts="['低', '中', '高']"
    showText
  >
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

<style lang="less" scoped></style>
`

export const codeStrE = `
<template>
  <yulang-rate v-model="value" :rateItemNumber="3" clearable />
</template>

<script>
export default {
  data() {
    return {
      value: 1,
    };
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrF = `
<template>
  <yulang-rate v-model="value" :rateItemNumber="3" disabled showScore scoreTemplate="{value} points"/>
</template>

<script>
export default {
  data() {
    return {
      value: 2,
    };
  },
};
</script>

<style lang="less" scoped></style>
`