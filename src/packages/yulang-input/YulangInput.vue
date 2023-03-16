<template>
  <div class="package-yulang-input-container">
    <div class="package-yulang-input-prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <div v-if="type !== 'textarea'" class="prefix-input-suffix-conatainer">
      <div class="prefix-icon-container">
        <slot name="prefix">
          <i v-if="prefixIcon" :class="['iconfont', prefixIcon]"></i>
        </slot>
      </div>
      <input
        :class="inputClassComputed"
        :type="showPassword && !isShowPassword ? 'password' : type"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="valueComputed"
        @input="valueComputedInput"
        @blur="valueComputedBlur"
        @click="valueComputedClick"
      />
      <div class="suffix-icon-container">
        <i
          class="iconfont icon-guanbi"
          v-show="guanbiIconIsShow"
          @click="clearValue"
        ></i>
        <i
          class="iconfont icon-yanjing"
          v-if="showPassword"
          v-YulangLongClick="passwordEyeClick"
        ></i>
        <slot name="suffix">
          <i v-if="suffixIcon" :class="['iconfont', suffixIcon]"></i>
        </slot>
      </div>
    </div>
    <textarea
      v-else
      class="textarea"
      :placeholder="placeholder"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly"
      :value="valueComputed"
      @input="valueComputedInput"
      @blur="valueComputedBlur"
      @click="valueComputedClick"
    ></textarea>
    <div class="package-yulang-input-append" v-if="$slots.append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
import { mergeVueParameter } from "@/packages/lib";
import { initObj } from "./hooks/init";
import { clearObj } from "./hooks/clear";
import { passwordObj } from "./hooks/password";
import { styleObj } from "./hooks/style";

export default mergeVueParameter(initObj, clearObj, passwordObj, styleObj);
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
