const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = ['Message One',
    'Message Two',
    'Message Three',
    'Message Four']

const msgType=['info','success', 'error']

button.addEventListener('click', ()=> createNotification())

// 每次都是生成随机的信息内容和类别
function createNotification() {
    const note=document.createElement('div')
    note.classList.add('toast')
    note.classList.add(msgType[Math.floor(Math.random() * messages.length)])
    note.innerText=messages[Math.floor(Math.random() * messages.length)]

    toasts.appendChild(note)

    setTimeout(() => {
        note.remove()
    }, 3000);

}