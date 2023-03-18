import Vue from 'vue';
import YulangNotification from '@/packages/yulang-notification/YulangNotification.vue';

const notificationObject = Vue.extend(YulangNotification);

// const notification = {
export const Notification = function (option) {
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

  // 获取单个item的mrigin-bottom
  const mriginBottom = document.defaultView.getComputedStyle(instance.$el)['margin-bottom'].split('px')[0]

  // 单个高度和数量
  const heightItem = parseFloat(instance.$el.getBoundingClientRect().height) + parseFloat(mriginBottom)
  const num = instance.$el.parentNode.children.length

  // console.log('object');
  if (heightItem * (num + 1) > window.innerHeight * 0.6) {
    console.log('2222');
    document.querySelector('#notificationParentId').style.maxHeight = window.innerHeight * 0.6 + 'px'
    document.querySelector('#notificationParentId').style.overflowY = 'scroll'
  }


}

// 创建所有通知消息的父盒子(用于自盒子自动向下延展)
function createNotificationParent() {
  const notificationParent = document.createElement('div')
  notificationParent.setAttribute('id', 'notificationParentId')
  document.body.appendChild(notificationParent)
}