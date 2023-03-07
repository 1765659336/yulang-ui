/* 
Node.appendChild() 方法将一个节点附加到指定父节点的子节点列表的末尾处。
如果将被插入的节点已经存在于当前文档的文档树中，那么 appendChild() 只会将它从原先的位置移动到新的位置（不需要事先移除要移动的节点）。
这意味着，一个节点不可能同时出现在文档的不同位置。
所以，如果某个节点已经拥有父节点，在被传递给此方法后，它首先会被移除，再被插入到新的位置。若要保留已在文档中的节点，可以先使用 Node.cloneNode() 方法来为它创建一个副本，再将副本附加到目标父节点下。
请注意，用 cloneNode 制作的副本不会自动保持同步。
*/
export default {
  componentUpdated(el, binding) {
    // 注意！！！！！！！！！！！只能复制dom的属性不能复制事件
    // 先删除所有的子dom
    let child = el.lastElementChild;
    while (child) {
      el.removeChild(child);
      child = el.lastElementChild;
    }
    el.appendChild(binding.value.cloneNode(true));
  },
};
