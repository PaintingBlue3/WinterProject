const btn = document.querySelectorAll('#write')
const jumpwin = document.querySelector('.win')
const x = document.querySelector('#x')
const tt = window.localStorage.getItem('imdb');
const token = window.localStorage.getItem('token');
// console.log(tt);
// console.log(jumpwin)
// jumpwin[0].style.display = 'block';
btn[0].addEventListener('click', async() => {
    jumpwin.style.display = 'block'
    alert('请在网页内找到弹窗并输入评论！我还不会做响应式对不起！')
})
x.addEventListener('click', async() => {
    jumpwin.style.display = 'none'
})

const send = document.querySelector('#send');
const point = document.querySelector('#point');
const essay = document.querySelector('#essay');
let essayform = new FormData();
let tokenform = new FormData();
tokenform.append('token', token)
essayform.append('movie', tt)
essayform.append('point', '')
essayform.append('essay', '')
send.addEventListener('click', async() => {
    essayform.set('point', point.value)
    essayform.set('essay', essay.value)
    const sendessay = await fetch('http://121.41.120.238:8080/message/essay', {
        method: 'POST',
        body: essayform,
        headers: tokenform
    })
    const essayres = await sendessay.json();
    console.log(essayres.status)
    console.log(essayres.info)
    if (essayres.status === true) {
        alert('成功！')
        location.reload()
    }
})