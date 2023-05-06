const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

console.log(boxesContainer)
console.log(btn)

// .toggle():如果classList中存在给定的值，删除它，否则，添加它
btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))
// console.log(btn)

function createBoxes() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            // .appendChild():向节点的子节点列表的末尾添加新的子节点
            boxesContainer.appendChild(box)
        }
    }
}

createBoxes()

console.log(boxesContainer)
console.log(btn)