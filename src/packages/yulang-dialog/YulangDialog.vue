<template>
  <div>
    <div
      class="dialog-mask-layer"
      v-if="visible && isShowMaskLayer"
      @click.self="touchMaskLayer"
      :style="getIndex"
    ></div>

    <div class="dialog-frame" v-if="visible" :style="getIndex">
      <!-- dialog头部 -->
      <div class="dialog-frame-header">
        <div>
          <!-- 头部标题插槽 -->
          <slot name="title">提示</slot>
        </div>
        <i class="iconfont icon-guanbi close-icon" @click="cancelDialog"></i>
      </div>

      <div class="dialog-frame-body">
        <!-- 内容插槽 -->
        <slot name="content">这是一段信息</slot>
      </div>

      <div class="dialog-frame-footer">
        <!-- 脚部按钮插槽 -->
        <slot name="footer" :changeDialog="changeDialog">
          <yulang-button @click="cancelDialog" style="margin-right: 1em"
            >取消</yulang-button
          >
          <yulang-button @click="confirmCommit">确定</yulang-button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import YulangButton from '../yulang-button/YulangButton.vue';
export default {
  components: { YulangButton },
  name: 'yulang-dialog',
  data() {
    return {};
  },
  props: {
    // 弹窗是否可见
    visible: {
      type: Boolean,
      default: false,
    },
    // 关闭对话框的之前的函数
    beforeClose: {
      type: Function,
      default: undefined,
    },
    // 是否展示遮罩层
    isShowMaskLayer: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    // 在创建初设置通知框的index值
    getIndex() {
      return {
        zIndex: this.$yulangIndex.getIndex(),
      };
    },
  },
  methods: {
    // 修改对话框的值
    changeDialog(value) {
      this.$emit('update:visible', value);
    },
    // 打开对话框
    openDialog() {
      this.$emit('update:visible', !this.visible);
    },
    // 关闭对话框
    cancelDialog() {
      this.$emit('update:visible', !this.visible);
    },
    // 按到遮蔽层逻辑
    touchMaskLayer() {
      // 如果外面没有关闭前的函数调用直接关闭,有就抛给外面
      this.beforeClose
        ? this.beforeClose(this.cancelDialog)
        : this.cancelDialog();
    },
    // 确定提交
    confirmCommit() {
      this.$emit('update:visible', !this.visible);
    },
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
