<template>
  <yulang-select
    v-model="value"
    remote
    placeholder="请输入关键词"
    :remoteMethod="remoteMethod"
    v-YulangLoading="loading"
  >
    <yulang-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </yulang-option>
  </yulang-select>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      value: null,
      options: [],
      list: [
        { label: 1, value: 1 },
        { label: 2, value: 2 },
        { label: 3, value: 3 },
        { label: 4, value: 4 },
        { label: 5, value: 5 },
        { label: 6, value: 6 },
        { label: 7, value: 7 },
        { label: 8, value: 8 },
        { label: 9, value: 9 },
      ],
    };
  },
  methods: {
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.options = this.list.filter((item) => item.value > Number(query));
          this.loading = false;
        }, 200);
      } else {
        this.options = [];
      }
    },
  },
};
</script>

<style lang="less" scoped></style>
