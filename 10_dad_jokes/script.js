const jokeEI = document.getElementById('joke')
const btn = document.getElementById('btn')

btn.addEventListener('click', genrateJoke)

genrateJoke()

// 异步操作关键字
// async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。
async function genrateJoke() {
    // config的固定写法
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    // async 函数执行时，如果遇到 await 就会先暂停执行 ，等到触发的异步操作完成后，恢复 async 函数的执行并返回解析值。
    // await 操作符用于等待一个 Promise 对象, 它只能在异步函数 async function 内部使用。
    
    // 浏览器新提供的api,它是window对象上定义的方法fetch，你可以使用该方法执行请求。此方法返回一个Promise，可用于检索请求的响应。
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    // 以上是固定写法
    console.log(data)

    jokeEI.innerHTML = data.joke
}