import Vue from 'vue';
import YulangNotification from './YulangNotification.vue'

const notificationObject = Vue.extend(YulangNotification)

// const notification = {
function install(option) {
  // 如果未设置类型默认为成功类型
  if (!option.type) option.type = 'success'

  let instance = new notificationObject({
    data() {
      return { ...option }
    }
  }).$mount()
  // 将实例对象挂载到body上
  document.querySelector('#notificationParentId').appendChild(instance.$el)
}

// 创建所有通知消息的父盒子(用于自盒子自动向下延展)
function createNotificationParent() {
  const notificationParent = document.createElement('div')
  notificationParent.setAttribute('id', 'notificationParentId')
  notificationParent.style.top = '150px'
  notificationParent.style.left = '20px'
  notificationParent.style.position = 'fixed'
  document.body.appendChild(notificationParent)
}

createNotificationParent()
Vue.prototype.$notification = install