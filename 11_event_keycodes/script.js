const insert=document.getElementById('insert')

// 键盘事件，通过键盘触发
// keydown - 键按下的过程
// keypress - 键被按下
// keyup - 键被松开
window.addEventListener('keydown', (event) => {
    console.log(event)
    console.log(event.key)
    console.log(event.keyCode)
    console.log(event.code)
    // 直接把原来的div替换掉
    insert.innerHTML = `
    <div class="key">
    ${event.key === ' ' ? 'Space': event.key} 
    <small>event.key</small>
    </div>

    <div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
    </div>

    <div class="key">
    ${event.code}
    <small>event.code</small>
    </div>
    `
    // A=(B)?C:D
    // 上面是一般的形式，代表的含义是判断B是否为真。
    // 若为真，返回A=C；
    // 反之，A=D；

    // 因为如果键盘输入空格的话，event.key是空，影响显示。所以要判断一下，写成space
}
)