export const codeStr = `
<yulang-anchor-point v-model="slotArr">
  <template #a>
    <div :style="{ height: '1000px' }">a</div>
  </template>
  <template #b>b</template>
  <template #c><div :style="{ height: '1000px' }">c</div></template>
  <template #d>d</template>
  <template #e><div :style="{ height: '1000px' }">c</div></template>
  <template #f>d</template>
  <template #g><div :style="{ height: '1000px' }">c</div></template>
  <template #h>d</template>
</yulang-anchor-point>

<script>
export default {
  data() {
    return {
      slotArr: [
        { slotName: 'a', slotTitle: 'MongoDB数据库', level: 1 },
        { slotName: 'b', slotTitle: '为什么要使用数据库', level: 2 },
        { slotName: 'c', slotTitle: '什么是数据库', level: 2 },
        { slotName: 'd', slotTitle: '下载MongoDB', level: 2 },
        { slotName: 'e', slotTitle: 'MongoDB 增删改查', level: 1 },
        { slotName: 'f', slotTitle: '创建集合', level: 2 },
        { slotName: 'g', slotTitle: '创建文档', level: 2 },
        { slotName: 'h', slotTitle: '创建文档的另一种方式', level: 2 },
      ],
    };
  },
}
</script>
`
