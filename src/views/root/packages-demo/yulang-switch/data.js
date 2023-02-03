export const codeStr = `
<yulang-switch v-model="value" @change="aa"></yulang-switch>
<button @click="outerClick">外面点击</button>

<script>
export default {
  data() {
    return {
      value: true,
    };
  },
  methods: {
    aa(val) {
      console.log(val);
    },
    outerClick() {
      this.value = !this.value;
    },
  },
}
</script>
`

export const codeStr2 = `
<yulang-switch
  v-model="value3"
  active-text="按月付费"
  inactive-text="按年付费"
></yulang-switch>

<script>
export default {
  data() {
    return {
      value3: true,
    };
  }
}
</script>
`

export const codeStr3 = `
<yulang-switch
  v-model="value2"
  inactive-color="#84adea"
  active-color="#2e2e2e"
></yulang-switch>

<script>
export default {
  data() {
    return {
      value2: true,
    };
  }
}
</script>
`
export const codeStr4 = `
<yulang-switch v-model="value4" disabled></yulang-switch>

<script>
export default {
  data() {
    return {
      value4: true,
    };
  }
}
</script>
`

export default {
  codeStr,
  codeStr2,
  codeStr3,
  codeStr4
}