const empties=document.querySelectorAll('.empty')
const fill=document.querySelector('.fill')

// 监听拖拉事件
/* 
drag：拖拉过程中，在被拖拉的节点上持续触发（相隔几百毫秒）。
dragstart：用户开始拖拉时
dragend：拖拉结束时（释放鼠标键或按下 ESC 键）
dragenter：拖拉进入当前节点时触发
dragover：拖拉到当前节点上方时，只要没有离开这个节点，dragover事件会持续触发
dragleave：拖拉操作离开当前节点范围时，在当前节点上触发
drop：被拖拉的节点或选中的文本，释放到目标节点时
*/

fill.addEventListener('dragstart', dragStart) //开始拖拉  hold
fill.addEventListener('dragend', dragEnd)     //结束拖拉

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver)   //拖到上方
    empty.addEventListener('dragenter', dragEnter) //刚进入 hovered
    empty.addEventListener('dragleave', dragLeave) //离开   empty
    empty.addEventListener('drop', dragDrop)       //放下   empty fill
}

function dragStart() {
    // console.log(this.className)
    this.className += ' hold'
    // console.log(this.className)
    setTimeout(() => this.className='invisible',0) //拖起后，隐藏fill，就是空了
    // console.log(this.className)
}
function dragEnd() {
    this.className='fill'
}

function dragOver(e) {
    // 阻止浏览器默认操作，要不然放不成功
    e.preventDefault()
}
function dragEnter(e) {
    e.preventDefault()
    this.className+=' hovered'
}
function dragLeave() {
    this.className='empty'
}
function dragDrop() {
    this.className='empty'
    this.append(fill)
}