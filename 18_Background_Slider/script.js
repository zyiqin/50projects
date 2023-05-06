//因为这边要改背景，所以要用到body
const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide=0

setBg()

// 按右箭头
rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide>slides.length-1) {
    activeSlide=0
  }

  setBg()
  setActive()
}
)

// 按左箭头
leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide<0) {
    activeSlide=slides.length-1
  }

  setBg()
  setActive()
}
)

function setBg(){
    body.style.backgroundImage=slides[activeSlide].style.backgroundImage
}

function setActive(){
    // 先把原有的active去除
    slides.forEach(slide => {
        slide.classList.remove('active')
    });
    slides[activeSlide].classList.add('active')
    // 再加上
}