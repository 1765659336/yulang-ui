export const codeStr = `
<div>
  <yulang-leader
    :leader-list="leaderList"
    v-if="isShowLeader"
  ></yulang-leader>
  <div class="leader-test">试试多层class可不可以</div>
</div>


<script>
export default {
  data() {
    return {
      isShowLeader: false,
      leaderList: [
        {
          // 指定id
          target: '#yulang-head-container',
          text: '这是step1,目标是上面的tab,目标是上面的tab',
          placement: 'bottom',
        },
        {
          // 指定id
          target: '#component-menu',
          text: '这是step2,目标是左侧的菜单',
          placement: 'right',
        },
        {
          // 指定id
          target: '.leader-test',
          text: '这是step3,目标是里面多层的class',
          placement: 'left',
        },
      ],
    };
  }
}
</script>
`

export const tableDataAttributes = [
  {
    attributeName: 'leaderList',
    explain: '用来存放每一个步骤的信息',
    type: 'Array',
    default: 'undefined',
  },
  {
    attributeName: 'target',
    explain: `leaderList子对象属性,用来锁定目标dom,尽量使用id,保持唯一('#foote','.boxclass')`,
    type: 'String',
    default: 'undefined',
  },
  {
    attributeName: 'text',
    explain: 'leaderList子对象属性,表示步骤文本',
    type: 'String',
    default: 'undefined',
  },
  {
    attributeName: 'placement',
    explain: 'leaderList子对象属性,相对目标dom的位置',
    type: 'String',
    default: 'undefined',
  },
]