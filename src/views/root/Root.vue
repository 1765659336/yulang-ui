<template>
  <div>
    <root-head></root-head>
    <router-view></router-view>
  </div>
</template>

<script>
import RootHead from '@/views/root/components/root-head/RootHead.vue';
export default {
  name: 'yulang-root',
  components: {
    RootHead,
  },
};
</script>

<style></style>
