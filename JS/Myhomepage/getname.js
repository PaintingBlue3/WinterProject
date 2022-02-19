let tokenvalue = window.localStorage.getItem('token'); //获取token的值

let formdata = new FormData();
formdata.append('token', '');

if (tokenvalue === null) { //token存在
} else {
    formdata.set('token', tokenvalue);
}

const a = await fetch("http://121.41.120.238:8080/user/check", {
        method: 'POST',
        headers: formdata
    }) //验证登录状态

const res = await a.json();
console.log(res.info);
let username = res.info;

if (res.info == '你还没有登录！') {
    alert('你还没有登录！')
}
if (res.info == '你的登录已过期，请重新登录！') {
    alert('你的登录已过期，请重新登录！')
    self.location = 'loginpage.html';
}

document.getElementById('whos').innerHTML = username + '的账号'
document.querySelector('#welcm').innerHTML = '欢迎你！' + username



//get自我介绍

const intro = document.querySelector('.intro');

let idform = new FormData();
idform.append('username', res.info)
const idget = await fetch('http://121.41.120.238:8080/user/getID', {
    method: 'POST',
    body: idform
})
const idgetres = await idget.json();
console.log(idgetres.info);

let introform = new FormData();
introform.append('id', idgetres.info);

const introtext = await fetch('http://121.41.120.238:8080/homepage/introduce/get', {
    method: 'POST',
    body: introform
})
const introres = await introtext.json();
console.log(introres.info)
intro.innerHTML = introres.info









const wantlook = await fetch('http://121.41.120.238:8080/user/getDetail', {
    method: 'POST',
    body: introform
})
const wlres = await wantlook.json();
console.log(wlres.information);
const wl = wlres.information.WMovie.split('');
const arl = wlres.information.DMovie.split('');
console.log(wl + '!')


const boxs = document.querySelectorAll('.mb');
//想看
//转单个字符串为n个
let num = 0;
let flag = 0;
let flag1 = wl.length;
for (let i = 0; i < wl.length; i++) {
    if (wl[i] == '/') {
        num++;
        flag = i + 1;
        for (let a = i + 1; a < wl.length; a++) {
            if (wl[a] == '/') {
                flag1 = a;
                break
            }
        }
        let s = wl.slice(flag, [flag1]).join("");
        console.log(s);
        //查电影封面
        let coverform = new FormData();
        coverform.append('IMDB', s);
        coverform.append('heading', 'view');
        const cover = await fetch('http://121.41.120.238:8080/movie/findByIMDB', {
            body: coverform,
            method: 'POST'
        })
        const coverres = await cover.json();
        console.log(coverres.information[0].picture_1);


        //插封面进盒子
        const coverbox = document.createElement('span');
        coverbox.className = 'cbs'
        const pic = document.createElement('img');
        pic.width = '100'
        pic.addEventListener('click', async() => {
            localStorage.setItem('imdb', s)
            window.open('moviepage.html')
        })
        pic.src = coverres.information[0].picture_1;
        coverbox.appendChild(pic);
        boxs[0].appendChild(coverbox);
        flag = flag1;
        flag1 = wl.length;
    }
}
const nums = document.querySelectorAll('.number');
nums[0].innerHTML = '想看' + num + '部'


//看过
//转单个字符串为n个
let num1 = 0;
// let flag = 0;
flag1 = arl.length;
for (let i = 0; i < arl.length; i++) {
    if (arl[i] == '/') {
        num1++;
        flag = i + 1;
        for (let a = i + 1; a < arl.length; a++) {
            if (arl[a] == '/') {
                flag1 = a;
                break
            }
        }
        let s = arl.slice(flag, [flag1]).join("");
        console.log(s);
        //查电影封面
        let coverform = new FormData();
        coverform.append('IMDB', s);
        coverform.append('heading', 'view');
        const cover = await fetch('http://121.41.120.238:8080/movie/findByIMDB', {
            body: coverform,
            method: 'POST'
        })
        const coverres = await cover.json();
        console.log(coverres.information[0].picture_1);


        //插封面进盒子
        const coverbox = document.createElement('span');
        coverbox.className = 'cbs'
        const pic = document.createElement('img');
        pic.width = '100'
        pic.addEventListener('click', async() => {
            localStorage.setItem('imdb', s)
            window.open('moviepage.html')
        })
        pic.src = coverres.information[0].picture_1;
        coverbox.appendChild(pic);
        boxs[1].appendChild(coverbox);
        flag = flag1;
        flag1 = arl.length;
    }
}
// const nums = document.querySelectorAll('.number');
nums[1].innerHTML = '想看' + num1 + '部'



//编辑intro
const introchange = document.querySelector('.introchange');
intro.addEventListener('click', async() => {
    intro.style.display = 'none'
    introchange.style.display = 'block'
    introchange.value = introres.info
    console.log(introchange.value)
})
const btn = introchange.querySelector('#btn');
console.log(btn)
btn.addEventListener('click', async() => {
    intro.style.display = 'block'
    introchange.style.display = 'none'
    if (introchange.value == '') {

    } else {
        let changeform = new FormData();
        changeform.append('message', introchange.value)
        const update = await fetch('http://121.41.120.238:8080/homepage/introduce/update', {
            method: 'POST',
            body: changeform,
            headers: formdata
        })
        const updtres = await update.json();
        console.log(updtres)
    }
})