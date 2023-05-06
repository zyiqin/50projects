const counters=document.querySelectorAll('.counter')



counters.forEach((counter) => {
    // 这里只执行一次
    // console.log(counter)
    counter.innerHTML='0'
    
    // 为什么这个函数定义写在循环里？递归函数！！
    //  因为
    // 如果定义在循环外面，就需要把每个counter传参进去，就只能一个一个递增
    // 写在里面，就可以三个counter同时做递增
    const updateCounter = () => {
        const target=Number(counter.getAttribute('data-target'))
        const c=Number(counter.innerText)

        // 原来的代码中，要求三个数同时更新完，所以步长不一样
        // 这里就简单的设置步长都为1，所以不是同时停止

        if (c<target) {
            counter.innerText=Number(c)+1
            // 1ms后就再加执行一次
            // 
            setTimeout(updateCounter,1)
            console.log(target, counter.innerText)
        } else{
            // 这里只执行一次
            counter.innerText=target
            console.log('done')
        }

    }

    updateCounter()

    // updateCounter2(counter)
    
    
}
)


// 还没写好 不想写了

function updateCounter2(counter){
    const target=Number(counter.getAttribute('data-target'))
    const c=Number(counter.innerText)


    while (c<target) {
        counter.innerText=Number(c)+1 
        // setTimeout(updateCounter,1)
        console.log(target, counter.innerText)
    } 
    counter.innerText=target
    console.log('done')
    
}