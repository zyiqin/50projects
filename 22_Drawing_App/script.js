const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

// 使用[CanvasElement].getContext('2d')来获取 2D 绘图上下文
const ctx = canvas.getContext('2d')

let size = 10
let isPressed = false
colorEl.value = 'black'
let color = colorEl.value
let xDown
let yDown

// 按下鼠标
canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    xDown = e.offsetX
    yDown = e.offsetY
})
// 松开鼠标 ，为什么这里不是canvas.而是document.呢？因为按下要在画布内才有效，松开是全局
document.addEventListener('mouseup', (e) => {
    isPressed = false
    x = undefined
    y = undefined
})
// 监听鼠标移动
canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x = e.offsetX
        const y = e.offsetY

        drawCircle(x, y)           //两端圆形，防止不光滑
        drawLine(xDown, yDown, x, y) //防止不连续

        xDown = x //下一次移动跟上前一次的终点
        yDown = y
    }
})
// 画圆  arc() 方法创建弧/曲线（用于创建圆或部分圆
function drawCircle(x, y) {
    ctx.beginPath();//开始新路径
    ctx.arc(x, y, size, 0, Math.PI * 2)// 坐标，坐标，粗细，起始角，结束角
    ctx.fillStyle=color
    ctx.fill() //	填充当前绘图（路径）
}
//画直线
function drawLine(x1,y1,x2,y2) {
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle=color//笔触颜色
    ctx.lineWidth=size*2
    ctx.stroke() //绘制已定义的路径。
}

//更新画笔大小的显示
function updateSizeShow() {
    sizeEL.innerText=size
}
//画笔大小的改变
increaseBtn.addEventListener('click',() => {
  size+=5
  if (size>50) {
    size=50
  }
  updateSizeShow()
})
decreaseBtn.addEventListener('click', () => {
  size-=5
  if (size<5) {
    size=5
  }
  updateSizeShow()
})


// 改颜色
colorEl.addEventListener('change',(e) => color = colorEl.value)

//清空画布
clearEl.addEventListener('click', () => {
    //在给定的矩形内清除指定的像素。
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
)