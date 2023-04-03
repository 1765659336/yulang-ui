export const codeStrB = `
<template>
  <div>
    <yulang-select v-model="value" placeholder="请选择">
      <yulang-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </yulang-option>
    </yulang-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrC = `
<template>
  <yulang-select v-model="value" placeholder="请选择">
    <yulang-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    >
    </yulang-option>
  </yulang-select>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
          disabled: true,
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrD = `
<template>
  <yulang-select v-model="value" disabled placeholder="请选择">
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
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
  },
};
</script>
`

export const codeStrE = `
<template>
  <yulang-select v-model="value" clearable placeholder="请选择">
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
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrF = `
<template>
  <yulang-select v-model="value1" multiple placeholder="请选择">
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
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value1: [],
    };
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrG = `
<template>
  <yulang-select v-model="value" placeholder="请选择">
    <yulang-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{
        item.value
      }}</span>
    </yulang-option>
  </yulang-select>
</template>

<script>
export default {
  data() {
    return {
      cities: [
        {
          value: "Beijing",
          label: "北京",
        },
        {
          value: "Shanghai",
          label: "上海",
        },
        {
          value: "Nanjing",
          label: "南京",
        },
        {
          value: "Chengdu",
          label: "成都",
        },
        {
          value: "Shenzhen",
          label: "深圳",
        },
        {
          value: "Guangzhou",
          label: "广州",
        },
      ],
      value: "",
    };
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrH = `
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
`