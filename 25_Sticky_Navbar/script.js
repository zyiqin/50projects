const nav = document.querySelector('.nav')

// 监听页面是否有滚动，有滚动的时候触发函数
window.addEventListener('scroll',fixNav)
function fixNav(){
    if (window.scrollY>nav.offsetHeight +150) {
        nav.classList.add('active')
    } else{
        nav.classList.remove('active')
    }
}