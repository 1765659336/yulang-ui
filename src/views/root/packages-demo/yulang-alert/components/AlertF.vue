<template>
  <div>
    <yulang-alert
      title="成功提示的文案"
      type="success"
      show-icon
      :closable="false"
    >
    </yulang-alert>
    <yulang-alert
      title="消息提示的文案"
      type="info"
      show-icon
      :closable="false"
    >
    </yulang-alert>
    <yulang-alert
      title="警告提示的文案"
      type="warning"
      show-icon
      :closable="false"
    >
    </yulang-alert>
    <yulang-alert
      title="错误提示的文案"
      type="error"
      show-icon
      :closable="false"
    >
    </yulang-alert>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
