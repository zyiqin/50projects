const loveMe=document.querySelector('.loveMe')
const times=document.getElementById('times')

let clickTime=0
let timesClicked=0

loveMe.addEventListener('click', (e) => {
  if (clickTime===0) {
    clickTime=new Date().getTime()
  }else{
    // 两次点击间隔不超过800毫秒，则为双击
    if ((new Date().getTime()-clickTime)<800) {
        createHeart(e)
        clickTime=0
    }else{
        clickTime=new Date().getTime()
    }
  }
}
)

// function createHeart(e) {
const createHeart = (e) => {    
    const heart=document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    // 双击的绝对位置
    const x=e.clientX
    const y=e.clientY
    //div的位置
    const leftOffset=e.target.offsetLeft
    const topOffset=e.target.offsetTop
    // 双击的位置在div中的相对位置
    heart.style.top=`${y-topOffset}px`
    heart.style.left=`${x-leftOffset}px`

    loveMe.appendChild(heart)

    times.innerHTML= ++timesClicked
    setTimeout(() =>heart.remove(), 1000);

}