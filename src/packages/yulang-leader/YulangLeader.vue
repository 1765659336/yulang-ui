<template>
  <div
    class="mask-layer"
    ref="container"
    @click.self="addStep"
    @touchmove.prevent
    v-if="isOpenLeader"
    :style="getIndex"
  >
    <!-- 单个目标框 -->
    <div
      v-for="(item, index) in leaderContainerList"
      :key="index + item"
      v-show="item.step === nowStep"
      :style="focusBoxItem(item)"
    ></div>

    <!-- 单个引导框样式 -->
    <div
      v-for="(item, index) in leaderContainerList"
      v-show="item.step === nowStep"
      class="leader-container-Item"
      :key="index"
      :style="getAddress(index)"
    >
      <div class="leader-container-Item-haeder">
        <img src="@/assets/images/delete.svg" @click="deleteLeaderComponent" />
      </div>

      <div class="leader-container-Item-body">
        {{ item.text }}
      </div>

      <div class="leader-container-Item-footer">
        <div class="leader-container-Item-footer-progress">
          <div
            class="leader-container-Item-footer-progress-one"
            v-for="index in leaderList.length"
            :key="index"
            :style="[index - 1 == nowStep ? { backgroundColor: 'black' } : {}]"
          ></div>
        </div>
        <div
          class="leader-container-Item-footer-nextstep"
          @click.self="addStep"
        >
          下一步
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yulang-leader',
  props: {
    // 表示引导的总信息
    leaderList: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      // 步数从零开始
      nowStep: 0,
      // 窗口打开位置数据
      leaderContainerList: [],
      // 是否打开引导
      isOpenLeader: true,
    };
  },
  computed: {
    // 设置z-index
    getIndex() {
      return {
        '--index--': this.$yulangIndex.getIndex(),
      };
    },
  },
  methods: {
    // 设置每个引导框位置
    getAddress(index) {
      const itemBox = this.leaderContainerList[index];
      // 设置于目标框的默认距离
      const distance = 50;

      // 如果placement为bottom或者不存在placement则在下方
      if (itemBox.placement == 'right') {
        return {
          '--box-item-top--': itemBox.top + itemBox.height / 2 + 'px',
          '--box-item-left--': itemBox.left + itemBox.width + distance + 'px',
          '--box-item-transform--': 'translateY(-50%)',
        };
      } else if (itemBox.placement == 'left') {
        return {
          '--box-item-top--': itemBox.top + itemBox.height / 2 + 'px',
          '--box-item-left--': itemBox.left - distance + 'px',
          '--box-item-transform--': 'translate(-100%, -50%)',
        };
      } else if (itemBox.placement == 'top') {
        return {
          '--box-item-top--': itemBox.top - distance + 'px',
          '--box-item-left--': itemBox.left + itemBox.width / 2 + 'px',
          '--box-item-transform--': 'translate(-50%, -100%)',
        };
      } else {
        return {
          '--box-item-top--': itemBox.top + itemBox.height + distance + 'px',
          '--box-item-left--': itemBox.left + itemBox.width / 2 + 'px',
          '--box-item-transform--': 'translateX(-50%)',
        };
      }
    },
    // 添加步数，最后一步后删除
    addStep() {
      if (this.nowStep >= this.leaderList.length - 1) {
        // 删除引导组件
        this.deleteLeaderComponent();
      } else {
        this.nowStep++;
      }
    },
    // 删除整个组件的函数
    deleteLeaderComponent() {
      this.Move();
      this.$el.parentNode.removeChild(this.$el);
    },
    /** 禁用滚动*/
    stopMove() {
      let m = function (e) {
        e.preventDefault();
      };
      document.body.style.overflow = 'hidden';
      document.addEventListener('touchmove', m, { passive: false }); //禁止页面滑动
    },
    //开启页面滚动
    Move() {
      let m = function (e) {
        e.preventDefault();
      };
      document.body.style.overflow = ''; //出现滚动条
      document.removeEventListener('touchmove', m, { passive: true });
    },
    // 目标的盒子
    focusBoxItem(item) {
      console.log(item);
      return {
        border: '3px solid red',
        position: 'absolute',
        width: item.width + 'px',
        height: item.height + 'px',
        top: item.top + 'px',
        left: item.left + 'px',
      };
    },
  },
  mounted() {
    // 禁止页面滚动
    this.stopMove();

    this.leaderList.forEach((item, index) => {
      // 这是满足条件的数组
      const targetAll = document.querySelectorAll(item.target);

      targetAll.forEach((targetItem) => {
        const leaderContainerItem = targetItem.getBoundingClientRect();
        leaderContainerItem.step = index;
        leaderContainerItem.placement = item.placement;
        leaderContainerItem.text = item.text;
        this.leaderContainerList.push(leaderContainerItem);
      });
    });

    console.log(this.leaderContainerList);
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
