const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')
const container=document.querySelector('.clock-container')
const numbers=document.querySelectorAll('.number')
// time.getDay()下标对应
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// 点击按钮切换黑白模式,改html  (为什么不用body呢？？)
toggle.addEventListener('click', (event) => {
  console.log(typeof event) //点击事件，它是一个有很多属性的一个object
  const html=document.querySelector('html')
  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
    event.target.innerText='dark mode'  //innerText和innerHTML是一样的
  } else{  //一开始是没有class的，一点击就加上
    html.classList.add('dark')
    event.target.innerText='light mode'
  }
}
)
// 显示数字
numbers.forEach(num => {
  console.log(num.innerHTML)
  num.style.transform= `rotate(${num.innerHTML * 30}deg)`
});


// 用来算角度
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
// 刷新后首先获取当前时间
setTime()
// 每隔1000ms再获取一次，也就是时钟的运行
setInterval(setTime, 1000)



function setTime(){
    // new Date()来获得当前时间的信息
    const time = new Date()
    const month = time.getMonth()
    const day=time.getDay()  //是周几
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm=hours>12 ? 'PM':'AM'

    // 根据时间设置三根针的旋转角度
    hourEl.style.transform=`translate(-50%, -100%) rotate(${scale(hoursForClock,0,12,0,360)}deg)`
    minuteEl.style.transform=`translate(-50%, -100%) rotate(${scale(minutes,0,60,0,360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`
    
    
    // 更新剩下的显示
    timeEl.innerText=`${hours}:${minutes} ${ampm}`
    dateEl.innerHTML=`${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}



