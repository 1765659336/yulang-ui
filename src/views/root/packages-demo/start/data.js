export const codeStrC = `
import Vue from "vue";
import App from "./App.vue";
import yulangUi from "yulang-ui";
import "yulang-ui/yulang-ui-dist/yulang-ui.css";

Vue.use(yulangUi);

new Vue({
    render: (h) => h(App),
}).$mount("#app");
`