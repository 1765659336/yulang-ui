<template>
  <div>
    <div class="option-class">
      <div
        v-for="item in data"
        class="option-class-item"
        style="z-index: 3000"
        :key="item.name"
        @click.stop="chooseValue = item.name"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yulang-options',
  inject: ['fatSelect'],
  props: {
    data: {
      type: Array,
      require: true,
    },
  },
  computed: {
    chooseValue: {
      get() {
        return this.fatSelect.value;
      },
      set(val) {
        this.fatSelect.refreshInputValue(val);
      },
    },
  },
  methods: {
    aa() {
      console.log('object');
    },
  },
  beforeDestroy() {
    this.fatSelect.refreshInputValue(this.chooseValue);
  },
};
</script>

<style lang="less" scoped>
.option-class {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 100px;
  cursor: pointer;

  .option-class-item:hover {
    background-color: aqua;
  }
}
</style>
