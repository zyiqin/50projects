const downButton=document.querySelector('.down-button')
const upButton=document.querySelector('.up-button')
const leftSlider =document.querySelector('.left-slider')
const rightSlider =document.querySelector('.right-slider')
const sliderContainer=document.querySelector('.slider-container')
const pageLength=rightSlider.querySelectorAll('div').length
// console.log(pageLength)  4

// 初始化页面，左右两边都是包含4块的一个大页，高400vh
// 当前第0页，右边不变第一块，左边滑倒第4块，-300vh
let page=0
leftSlider.style.top= `-${(pageLength-1)*100}vh`
const sliderHeight = sliderContainer.clientHeight

console.log(sliderHeight)
downButton.addEventListener('click', () => {
  if (page<pageLength-1) {
    page+=1
  }else{
    page=0
  }
  leftSlider.style.transform= `translateY(${(page)*sliderHeight}px)`
  rightSlider.style.transform= `translateY(-${(page)*sliderHeight}px)`

  console.log(page)
})
upButton.addEventListener('click', () => {
    if (page>0) {
      page-=1
    }else{
      page=pageLength-1
    }
    leftSlider.style.transform= `translateY(${(page)*sliderHeight}px)`
    rightSlider.style.transform= `translateY(-${(page)*sliderHeight}px)`
    console.log(page)

})


// | 3 |
// | 2 |             | 3 |
// | 1 |             | 2 | 0 |
// | 0 | 0 |    ==>  | 1 | 1 |
//     | 1 |         | 0 | 2 |
//     | 2 |             | 3 |
//     | 3 |