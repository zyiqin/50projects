// const buttons = document.querySelectorAll('.ripple')
const button = document.querySelector('.ripple')

// 注释掉的是原本的写法
// buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // 鼠标每次点击的坐标
        const x = e.pageX //对应left
        const y = e.pageY //对应top
        // console.log(x, y)
        // 按钮本身的坐标
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        // console.log(buttonTop,buttonLeft)
        // 鼠标点击和按钮的距离
        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        // 加涟漪效果
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        // 效果结束就删除
        setTimeout(() => {
            circle.remove()
        }, 500);


    })
// });