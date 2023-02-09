export const codeStr = `
<yulang-slider
  :sliderValue.sync="sliderValue"
></yulang-slider>

<script>
export default {
  data() {
    return {
      sliderValue: 8,
    };
  }
}
</script>
`

export const codeStr2 = `
<yulang-slider
  :sliderValue.sync="sliderValue2"
  :sliderStep="10"
></yulang-slider>

<script>
export default {
  data() {
    return {
      sliderValue2: 0,
    };
  }
}
</script>
`

export const codeStr3 = `
<yulang-slider
  :sliderValue.sync="sliderValue3"
  isOpenDigitalModulation
></yulang-slider>

<script>
export default {
  data() {
    return {
      sliderValue3: 0,
    };
  }
}
</script>
`

export const tableDataAttributes = [
  {
    attributeName: 'sliderValue',
    explain: '默认初始值',
    type: 'Number',
    default: '0'
  },
  {
    attributeName: 'sliderStep',
    explain: '每次移动最小步数',
    type: 'Number([1,100]整数)',
    default: '1'
  },
  {
    attributeName: 'isOpenDigitalModulation',
    explain: '是否开启按钮调节滑块',
    type: 'Boolean',
    default: 'false'
  }
]