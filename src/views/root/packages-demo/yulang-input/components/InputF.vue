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
