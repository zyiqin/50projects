const left=document.querySelector('.left')
const right=document.querySelector('.right')
const container=document.querySelector('.container')

// mouseenter 当鼠标指针移动到元素上时触发。
// mouseleave 当鼠标指针移出元素时触发
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))