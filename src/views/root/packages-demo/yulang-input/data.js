export const codeStrB = `
<template>
  <yulang-input v-model="value" placeholder="请输入"></yulang-input>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    };
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrC = `
<template>
  <yulang-input v-model="value" placeholder="请输入" disabled></yulang-input>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    };
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrD = `
<template>
  <yulang-input v-model="value" placeholder="请输入" clearable></yulang-input>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    };
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrE = `
<template>
  <yulang-input
    v-model="value"
    placeholder="请输入"
    showPassword
  ></yulang-input>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    };
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrF = `
<template>
  <div>
    <div>
      <div>属性方式：</div>
      <yulang-input
        placeholder="请输入日期"
        suffixIcon="icon-riqi"
        v-model="input1"
      >
      </yulang-input>
      <yulang-input
        placeholder="请输入内容"
        prefixIcon="icon-sousuo"
        v-model="input2"
      >
      </yulang-input>
    </div>
    <div>
      <div>slot 方式：</div>
      <yulang-input placeholder="请输入日期" v-model="input3">
        <template #suffix>
          <i class="iconfont icon-riqi"></i>
        </template>
      </yulang-input>
      <yulang-input placeholder="请输入内容" v-model="input4">
        <template #prefix>
          <i class="iconfont icon-sousuo"></i>
        </template>
      </yulang-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      input4: "",
    };
  },
};
</script>
`

export const codeStrG = `
<template>
  <yulang-input
    type="textarea"
    :rows="2"
    placeholder="请输入内容"
    v-model="textarea"
  >
  </yulang-input>
</template>

<script>
export default {
  data() {
    return {
      textarea: "",
    };
  },
};
</script>
`

export const codeStrH = `
<template>
  <div>
    <div>
      <yulang-input placeholder="请输入内容" v-model="input1">
        <template slot="prepend">Http://</template>
      </yulang-input>
    </div>
    <div>
      <yulang-input placeholder="请输入内容" v-model="input2">
        <template slot="append">.com</template>
      </yulang-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      input2: "",
    };
  },
};
</script>

<style lang="less" scoped></style>
`