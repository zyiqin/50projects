const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

// setInterval()重复调用一个函数或执行一个代码片段，在每次调用之间有固定的时间间隔
let int = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99) {
        // 清除Interval
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    // 官方写法
    // loadText.style.opacity = scale(load, 0, 100, 1, 0)
    // bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    // 我的写法
    loadText.style.opacity = load/100
    bg.style.filter = `blur(${30-load/100*30}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
