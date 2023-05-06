const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

// 刷新大杯子
updateBigCup()
// 刷新每个小杯子
smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
});

// *************控制小杯子**************************
function highlightCups(idx) {
    console.log('点击了第',idx, '个小杯子')

    // --------------如果点击的杯子本就是full的，则取消full,也就是idx--,只算前面的满---------------
    // 如果是前7个杯子中的当前杯子满了，且下一个杯子没满
    // nextElementSibling返回指定元素的下一个兄弟元素
    if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    // 如果是第8个杯子已经是满了，没有下一个，分开写
    else if (idx===7 && smallCups[idx].classList.contains('full')){
        idx--
    } 
    
    // 其他情况：如果是前7个杯子中的当前杯子满了，且下一个杯子也满，那idx不变，直接把后面的取消就行

    // 遍历每个小杯子，把第idx个之前的杯子都给full
    smallCups.forEach((cup,idx2) => {
        if (idx2<=idx) {
            cup.classList.add('full')
        } else{
            cup.classList.remove('full')
        }
    }
    )
    updateBigCup()
}


// ***********刷新大杯子****************************
function updateBigCup() {
    // 要知道大杯子的水位，首先要知道小杯子一共几个，点亮了几个 
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    // ----------设置已占的部分--------------
    // 如果小杯子点亮0个
    if (fullCups === 0) {
        // 百分比不可见
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        // 如果有若干个小杯子点亮了,更新：可见、高度、数值
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText=`${fullCups/totalCups*100}%`
    }
    // -----------设置未占的部分------------
    // 如果小杯子全都点亮
    if (fullCups===totalCups) {
        // remained就不可见
        remained.style.visibility='hidden'
        remained.style.height=0
    } else {
        // 没有全满，要刷新：可见、数值
        remained.style.visibility='visible'
        liters.innerText=`${2-(250*fullCups/1000)} L`
    }
}