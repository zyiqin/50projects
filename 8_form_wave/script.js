const labels=document.querySelectorAll('.form-control label')

// 波浪效果
labels.forEach((label) => {
    // console.log('1',label)
    label.innerHTML=label.innerText
        // split() 方法用于把一个字符串分割成字符串数组。
        .split('')
        // map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值
        .map((letter, idx) => `<span style="transition-delay:${idx*50}ms">${letter}</span>`)
        // join用于把数组中的所有元素放入一个字符串
        .join('')
    // console.log('2',label)

}
)