const APIURL = 'https://api.github.com/users/'
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// ------------------获取用户信息------------------------
async function getUser(username) {
    try {
        // 通过地址获得用户信息，存在字典中
        const { data } = await axios(APIURL + username)

        createUserCard(data)
        getRepos(username)
    }
    catch (err) {
        // 如果不存在这个用户
        if (err.response.status == 404) {
            createErrorCard('no profile with this username')
        }
    }
}
// ------------------获取用户仓库------------------------
async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')

        addReposToCard(data)
    } catch (err) {
        console.log(err)
        createErrorCard('problem fetching repos')
    }
}

// ------用户卡片------
function createUserCard(user) {
    const userID = user.name || user.login
    const userBio = user.bio ? `<p>${user.bio}</p>` : ''

    const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${userID}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `
    main.innerHTML=cardHTML
}
// ------错误卡片------ 
function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `
    main.innerHTML = cardHTML
}
// ------卡片中的仓库显示------ 
function addReposToCard(repos) {
    const reposEl=document.getElementById('repos')

    repos
        .slice(0,5) //取0-5索引的数组内容，即，卡片只展示5个仓库
        .forEach(repo => {
            const repoEI=document.createElement('a') //用一个a标签展示
            repoEI.classList.add('repo')  
            repoEI.hred=repo.html_url  // 获取的Data中包含了地址的
            repoEI.target='_blank'     // 在新窗口中打开被链接文档。
            repoEI.innerText=repo.name  //内容是仓库名

            console.log(repoEI.node)
            reposEl.appendChild(repoEI)
        })
}


// ---------------------------------------------------
form.addEventListener('submit',(e) => {
  e.preventDefault()

  const user=search.value
  if (user) {
    getUser(user)
    
    search.value='' //每次展示后清空输入框
  }
}
)
