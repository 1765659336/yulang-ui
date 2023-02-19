<template>
  <div>
    <div class="option-class">
      <div
        v-for="item in options"
        class="option-class-item"
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
  name: 'MyTest',
  inject: ['fatSelect'],
  data() {
    return {
      options: [
        {
          name: 'KFC',
          label: 'KFC',
        },
        {
          name: '麦当劳',
          label: '麦当劳',
        },
        {
          name: '华莱士',
          label: '华莱士',
        },
        {
          name: '必胜客',
          label: '必胜客',
        },
      ],
    };
  },
  computed: {
    chooseValue: {
      get() {
        return this.fatSelect.value;
      },
      set(val) {
        this.fatSelect.hh(val);
      },
    },
  },
  methods:{
    aa(){
      console.log('object');
    }
  }
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
