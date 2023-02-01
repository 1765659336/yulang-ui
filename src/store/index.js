import Vue from "vue";
import Vuex from "vuex";
import vuexAlong from "vuex-along";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {},
  mutations: {},
  // 类似于组件中的data，数据源
  state: {
    storeTextState: "text",
  },
  // 类似于组件的计算属性，可在多个组件中复用的计算属性
  getters: {},
  // vuex持久化存储，防止刷新浏览器，vuex数据丢失
  plugins: [vuexAlong({})],
});
