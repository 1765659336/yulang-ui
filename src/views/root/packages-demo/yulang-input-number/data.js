export const codeStrB = `
<template>
  <yulang-input-number
    v-model="input"
    @change="handleChange"
    :min="1"
    :max="10"
  >
  </yulang-input-number>
</template>

<script>
export default {
  data() {
    return {
      input: 0,
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrC = `
<template>
  <yulang-input-number
    v-model="input"
    @change="handleChange"
    :min="1"
    :max="10"
    :disbaled="true"
  >
  </yulang-input-number>
</template>

<script>
export default {
  data() {
    return {
      input: 0,
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrD = `
<template>
  <yulang-input-number
    v-model="input"
    @change="handleChange"
    :step="5"
  >
  </yulang-input-number>
</template>

<script>
export default {
  data() {
    return {
      input: 0,
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrE = `
<template>
  <yulang-input-number
    v-model="input"
    @change="handleChange"
    :step="5"
    :stepStrictly="true"
  >
  </yulang-input-number>
</template>

<script>
export default {
  data() {
    return {
      input: 0,
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrF = `
<template>
  <yulang-input-number
    v-model="input"
    @change="handleChange"
    :precision="2"
  >
  </yulang-input-number>
</template>

<script>
export default {
  data() {
    return {
      input: 0,
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="less" scoped></style>
`