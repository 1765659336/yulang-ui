export const codeStr = `
<yulang-button @click="showNotice('success')" type="success">
  成功消息
</yulang-button>
<yulang-button @click="showNotice('fail')" type="error">
  失败消息
</yulang-button>
<yulang-button @click="showNotice('warn')">警告消息</yulang-button>


<script>
  export default {
    methods: {
      showNotice(type) {
        this.$notification({ message: '小帅哥快来玩呀！！', type });
      }
    },
  };
</script>
`

export const codeStr2 = `
<yulang-button @click="showNoticeTimeout('success')" type="success">
  成功消息
</yulang-button>
<yulang-button @click="showNoticeTimeout('fail')" type="error">
  失败消息
</yulang-button>
<yulang-button @click="showNoticeTimeout('warn')"
  >警告消息</yulang-button
>

<script>
  export default {
    methods: {
      showNoticeTimeout(type) {
        this.$notification({
          message: '小美女开始了！！',
          type,
          timeout: 3000,
        });
      },
    },
  };
</script>
`

export const codeStr3 = `
<yulang-button @click="showNoticeDefault()" type="success">
  成功消息
</yulang-button>
<yulang-button @click="showNoticeDefault()" type="error">
  失败消息
</yulang-button>
<yulang-button @click="showNoticeDefault()">警告消息</yulang-button>

<script>
  export default {
    methods: {
      showNoticeDefault() {
        this.$notification({
          message: '开来玩摇摇车',
        });
      },
    },
  };
</script>
`

export const codeStr4 = `
<yulang-button @click="showNoticeSetTitle('success')" type="success">
  成功消息
</yulang-button>
<yulang-button @click="showNoticeSetTitle('fail')" type="error">
  失败消息
</yulang-button>
<yulang-button @click="showNoticeSetTitle('warn')">警告消息</yulang-button>

<script>
  export default {
    methods: {
      showNoticeSetTitle(type) {
        this.$notification({
          title: '我是标题',
          type
        });
      },
    },
  };
</script>
`

export const tableDataAttributes = [
  {
    attributeName: 'type',
    explain: '指明通知类型',
    type: 'String',
    default: 'undefined',
  },
  {
    attributeName: 'message',
    explain: '请求消息',
    type: 'String',
    default: 'undefined',
  },
  {
    attributeName: 'title',
    explain: '消息标题',
    type: 'String',
    default: 'undefined',
  },
  {
    attributeName: 'timeout',
    explain: '消息消息时间(未指明为永久)',
    type: 'Number',
    default: 'Infinity',
  }
]