import Vue from 'vue';
import YulangNotification from './YulangNotification.vue'

const notificationObject = Vue.extend(YulangNotification)

// 引入所有通知消息的父盒子的样式
import './index.less'

// const notification = {
function install(option) {
  // 如果未设置类型默认为undefined
  if (!option.type) option.type = undefined
  if (!option.message) option.message = undefined

  let instance = new notificationObject({
    data() {
      return { ...option }
    }
  }).$mount()

  // 判断是否存在notificationParentId,不存在创建
  !document.querySelector('#notificationParentId') && createNotificationParent()

  // 将实例对象挂载到bod上的id为notificationParentId身上
  document.querySelector('#notificationParentId').appendChild(instance.$el)
} 

// 创建所有通知消息的父盒子(用于自盒子自动向下延展)
function createNotificationParent() {
  const notificationParent = document.createElement('div')
  notificationParent.setAttribute('id', 'notificationParentId')
  document.body.appendChild(notificationParent)
}


Vue.prototype.$notification = install