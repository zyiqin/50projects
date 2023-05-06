const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']




sounds.forEach((sound) => {

    // html里面没有写button，在这里加入，为什么？
    // 添加button
    const btn =document.createElement('button')
    // 添加 id='btn'
    btn.classList.add('btn')
    // 内容为 sound
    btn.innerText=sound
    // 添加点击事件：
    btn.addEventListener('click',() => {
        // 1，停止正在播放的音乐
        stopSongs() 
        // 2，播放被点击的音乐
        document.getElementById(sound).play()
    }
    )
    // 在指定节点的最后一个子节点列表之后添加一个新的子节点。
    document.getElementById('buttons').appendChild(btn)
}
)
// 添加停止按钮
const stop=document.getElementById('stop')
stop.addEventListener('click', () => {
    stopSongs() 
}
)

// 停止函数，在播音乐都停止
function stopSongs(){
    sounds.forEach((sound) => {
        const song=document.getElementById(sound)
        // 停止
        song.pause()
        // 回到开头
        song.currentTime=0;
    }
    )
}