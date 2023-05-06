const tagsEl=document.getElementById('tags')
const textarea=document.getElementById('textarea')

// 获取textarea的DOM元素（通过ref），调用focus() API
textarea.focus()

// 这个函数，键盘每输入一下，就响应一次
textarea.addEventListener('keyup', (e) => {
    // 根据键盘输入，在HTML中创建相应的Tag
    // e.target.value就是键盘输入的内容
    createTags(e.target.value)
    // console.log(e.target.value)

    if (e.key==='Enter') {
        // 这个计时器的功能是：在enter之后，清空原本的输入。不然原本的输入一直在
        setTimeout(() => {
            e.target.value=''
        },10)
        // 开始随机选择
        randomSelect()
    }
}
)


function createTags(input){
    // trim() 方法用于删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等。
    // map() filter()都是对数组进行操作，不会改变原数组，会返回一个新数组
    // map()和filter()的区别是map会返回满足条件的那一项，filter会返回满足条件的所有项
    //               分割        返回不空的                      返回去掉空之后的
    const tags=input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    // console.log('11',input.split(','))
    // console.log('22',input.split(',').filter(tag => tag.trim() !== ''))
    // console.log(input.map(tag => tag.trim()))

    tagsEl.innerHTML=''

    // 给每个输入创建<span>tag
    tags.forEach(tag => {
        const tagEl=document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText=tag
        tagsEl.appendChild(tagEl)
    });
}

function randomSelect(){
    // 随机选取做30次
    const times=30

    // setInterval()以100ms的间隔定时刷新，直到 clearInterval() 被调用或窗口被关闭
    const interval = setInterval(() => {   
        // 从tag中随机选取 
        const randomTag = pickRandomTag()

        if (randomTag!==undefined) {
            // 高亮
            highlightTag(randomTag)

            // setTimeout函数用来指定某个函数或某段代码，在多少毫秒之后执行
            // 100ms后取消高亮
            setTimeout(() => {
                unHighlightTag(randomTag)
            }, 100);
        }
        
    },100);

    setTimeout(() => {
        // 停止定时刷新
        clearInterval(interval)

        // 100ms后，最后随机选一个，保持高亮
        setTimeout(() => {
            const randomTag=pickRandomTag()
            highlightTag(randomTag)
        }, 100);
    }, times*100);
}

function pickRandomTag(){
    const tags=document.querySelectorAll('.tag')
    // Math.floor() 返回小于或等于一个给定数字的最大整数。
    // Math.random()随机选取大于等于 0.0 且小于 1.0 的伪随机 double 值
    return tags[Math.floor(Math.random() * tags.length)] // 随机下标，返回一个tag
}

function highlightTag(tag){
    tag.classList.add('highlight')
}

function unHighlightTag(tag){
    tag.classList.remove('highlight')
}