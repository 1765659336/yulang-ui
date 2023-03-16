<template>
  <div class="root-resources-animate-container">
    <div class="animate-class-arr-container">
      <yulang-tabs
        v-model="activeName"
        @tabClick="handleClick"
        :isKeepAlive="false"
      >
        <yulang-tab-pane
          v-for="tabPaneListItem in tabPaneList"
          :key="tabPaneListItem.name"
          :label="tabPaneListItem.label"
          :name="tabPaneListItem.name"
        >
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(
                componentsDataItem, componentsDataIndex
              ) in tabPaneListItem.componentsData"
              :key="componentsDataItem.value"
            >
              <component
                :is="componentsDataItem.value"
                class="animationItemBoxContent"
              ></component>
              <yulang-link
                class="copyBtn"
                v-YulangCopy:[copySuccess]="componentsDataItem.copy"
              >
                点我复制代码
              </yulang-link>
              <i
                class="iconfont icon-shuaxin refresh"
                @click="
                  refreshItemAnimation(
                    tabPaneListItem.componentsData,
                    componentsDataIndex
                  )
                "
              ></i>
            </div>
          </div>
        </yulang-tab-pane>
      </yulang-tabs>

      <!-- <div
        v-for="item in animateClassArr"
        :key="item.value"
        @click="animateClassItem(item)"
        :class="[
          'animate-class-item',
          item.value === value.value ? 'isSelect' : '',
        ]"
      >
        {{ item.title }}
      </div> -->

      <!-- <div class="copyBtn" v-YulangCopy:[copySuccess]="copyData">
        点我复制代码
      </div> -->
    </div>

    <component :is="value.value"></component>
  </div>
</template>

<script>
import {
  Components,
  AnimateClassArr,
  AnimateClassArrLeftShow,
  AnimateClassArrLeftLeave,
  AnimateClassArrRightShow,
  AnimateClassArrRightLeave,
  AnimateClassArrTopShow,
  AnimateClassArrTopLeave,
  AnimateClassArrBottomShow,
  AnimateClassArrBottomLeave,
  AnimateClassArrMiddle,
  AnimateClassArrXAxis,
  AnimateClassArrYAxis,
} from './index';
export default {
  name: 'root-resources-animate',
  components: Components,
  data() {
    return {
      value: AnimateClassArr[0],
      animateClassArr: AnimateClassArr,
      AnimateClassArrLeftShow,
      AnimateClassArrLeftLeave,
      AnimateClassArrRightShow,
      AnimateClassArrRightLeave,
      AnimateClassArrTopShow,
      AnimateClassArrTopLeave,
      AnimateClassArrBottomShow,
      AnimateClassArrBottomLeave,
      AnimateClassArrMiddle,
      AnimateClassArrXAxis,
      AnimateClassArrYAxis,
      // 选中tab的属性
      activeName: 'leftShow',
      test: false,
      tabPaneList: [
        {
          label: '左侧进入',
          name: 'leftShow',
          componentsData: AnimateClassArrLeftShow,
        },
        {
          label: '左侧退出',
          name: 'leftLeave',
          componentsData: AnimateClassArrLeftLeave,
        },
        {
          label: '右侧进入',
          name: 'rightShow',
          componentsData: AnimateClassArrRightShow,
        },
        {
          label: '右侧退出',
          name: 'rightLeave',
          componentsData: AnimateClassArrRightLeave,
        },
        {
          label: '上边进入',
          name: 'topShow',
          componentsData: AnimateClassArrTopShow,
        },
        {
          label: '上边退出',
          name: 'TopLeave',
          componentsData: AnimateClassArrTopLeave,
        },
        {
          label: '下边进入',
          name: 'bottomShow',
          componentsData: AnimateClassArrBottomShow,
        },
        {
          label: '下边退出',
          name: 'bottomLeave',
          componentsData: AnimateClassArrBottomLeave,
        },
        {
          label: '中间',
          name: 'middle',
          componentsData: AnimateClassArrMiddle,
        },
        {
          label: 'X轴',
          name: 'xAxis',
          componentsData: AnimateClassArrXAxis,
        },
        {
          label: 'Y轴',
          name: 'yAxis',
          componentsData: AnimateClassArrYAxis,
        },
      ],
    };
  },
  computed: {
    copyData() {
      return (title) => {
        return 'yulang-animate' + ` ` + title;
      };
    },
  },
  methods: {
    animateClassItem(item) {
      this.value = item;
    },
    copySuccess(value) {
      // console.log("info", "复制成功值为:" + value);
      this.$yulangNotification({
        message: '复制成功' + value,
        type: 'success',
        timeout: 1500,
      });
    },
    // 控制tab切换
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 刷新当前动画效果
    refreshItemAnimation(data, index) {
      const value = data[index].value;
      data[index].value = '';
      this.$nextTick(() => (data[index].value = value));
    },
  },
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
