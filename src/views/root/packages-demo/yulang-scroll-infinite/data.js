export const codeStr = `
<ul
  class="infinite-list"
  style="overflow: auto"
  v-YulanginfiniteScroll="load"
>
  <li v-for="i in count" class="infinite-list-item" :key="i">
    {{ i }}
  </li>
</ul>
export default {
  name: 'packages-yulang-scroll-infinite',
  data() {
    return {
      count: 10,
    };
  },
  methods: {
    load() {
      this.count += 2;
    },
  },
};
`

export const codeStr2 = `
<ul
  class="infinite-list"
  style="overflow: auto"
  v-YulanginfiniteScroll="load2"
  yulang-infinite-scroll-disabled="disabled"
  aaa="111"
>
  <li v-for="i in count2" class="infinite-list-item" :key="i">
    {{ i }}
  </li>
</ul>

export default {
  name: 'packages-yulang-scroll-infinite',
  data() {
    return {
      count2: 10,
    };
  },
  methods: {
    load2() {
      this.count2 += 2;
    },
  },
};
`

export const tableDataAttributes = [
  {
    attributeName: 'yulang-infinite-scroll-disabled',
    explain: '是否禁用请求,disabled是禁用,不设置或值错误则不禁用',
    type: 'String',
    default: 'undefined',
  },
]

