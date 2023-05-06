const boxes = document.querySelectorAll('.box')

// 监听整个页面滚动, 当页面进行滚动, 触发事件checkBoxes
window.addEventListener('scroll', checkBoxes)

// 刚加载完，没滚动的时候先调用一下，否则可见区域为空，要滚动才会出现了
checkBoxes()

function checkBoxes() {
    // 获取窗口高度的4/5
    const triggerBotton = window.innerHeight / 5 * 4

    boxes.forEach((box) => {
        // getBoundingClientRect方法返回元素的大小及其相对于视口的位置，该方法没有参数。
        // // box代表某一元素
        // box.getBoundingClientRect().top    // 获取元素上边距离视窗上边的距离
        // box.getBoundingClientRect().bottom // 获取元素下边距离视窗上边的距离
        // box.getBoundingClientRect().left   // 获取元素左边距离视窗左边的距离
        // box.getBoundingClientRect().right  // 获取元素右边距离视窗左边的距离
        const boxTop = box.getBoundingClientRect().top

        // 如果box的距离小于窗口高度，即进入可见区域了，就加show
        if (boxTop<triggerBotton) {
            box.classList.add('show')
        } else{
            box.classList.remove('show')
        }
    }
    )
}