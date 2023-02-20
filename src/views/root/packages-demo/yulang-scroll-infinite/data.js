export const codeStr = `
<ul
  class="infinite-list"
  style="overflow: auto"
  v-YulangInfiniteScroll="load"
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
      return new Promise((resolve) => {
        setTimeout(() => {
          this.count += 2;
          resolve();
        }, 3000);
      });
    },
  },
};
`

export const codeStr2 = `
<ul
  class="infinite-list"
  style="overflow: auto"
  v-YulangInfiniteScroll="load2"
  yulang-infinite-scroll-disabled="disabled"
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

export const codeStr3 = `
<ul
  class="infinite-list"
  style="overflow: auto"
  v-YulangInfiniteScroll="load3"
  yulang-infinite-scroll-disabled="disabled"
>
  <li v-for="i in count3" class="infinite-list-item" :key="i">
    {{ i }}
  </li>
</ul>

export default {
  name: 'packages-yulang-scroll-infinite',
  data() {
    return {
      count3: 10,
    };
  },
  methods: {
    load3() {
      this.count3 += 2;
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
  {
    attributeName: 'yulang-infinite-scroll-minheight',
    explain: '低于底部多少触发函数,输入数字,单位为px',
    type: 'String',
    default: 'undefined',
  },
]

