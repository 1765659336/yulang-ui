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

export default {
  codeStr,
  codeStr2,
  codeStr3
}