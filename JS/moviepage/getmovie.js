const tt = window.localStorage.getItem('imdb');
const title = document.querySelector('.a3');
const cb = document.querySelector('.cover');
const ms = document.querySelectorAll('.mt');
const bt = document.getElementById('bt');
const btt = document.getElementById('btt');
const bc = document.getElementById('bc');
const movieTitle = document.getElementById('movieTitle');
console.log(bt.innerHTML)


//查电影名
let ttform = new FormData();
ttform.append('IMDB', tt);
const tts = await fetch("http://121.41.120.238:8080/movie/findByIMDB", {
    method: 'POST',
    body: ttform
})
const ttres = await tts.json();
title.innerHTML = ttres.information[0].name
bt.innerHTML = ttres.information[0].name + '的剧情简介 · · · · · ·'
bc.innerHTML = ttres.information[0].name + '的讨论区 · · · · · ·'
movieTitle.innerHTML = ttres.information[0].name;

ttform.append('heading', 'member');
const members = await fetch("http://121.41.120.238:8080/movie/findByIMDB", {
    method: 'POST',
    body: ttform
})
const memres = await members.json()
console.log(memres);

let fmform = new FormData();
fmform.append('IMDB', '');
fmform.set('IMDB', memres.information[0].director + '/' + memres.information[0].scriptwriter);
const findmeb = await fetch('http://121.41.120.238:8080/member/showMember', {
    method: 'POST',
    body: fmform
})
const fmres = await findmeb.json();
console.log(fmres.information[0])
console.log(memres.information[0].scriptwriter)

// fmform.set('IMDB', memres.information[0].scriptwriter);

//改信息
ms[0].innerHTML = fmres.information[0].Name;
ms[1].innerHTML = fmres.information[1].Name;
ms[3].innerHTML = ttres.information[0].type;
ms[4].innerHTML = ttres.information[0].date;
ms[5].innerHTML = ttres.information[0].long + '分钟';
ms[6].innerHTML = ttres.information[0].alias;
ms[7].innerHTML = ttres.information[0].imdb;


//查封面
let coverform = new FormData();
coverform.append('heading', 'view');
coverform.append('IMDB', ttres.information[0].imdb);
const cover = await fetch("http://121.41.120.238:8080/movie/findByIMDB", {
    method: 'POST',
    body: coverform
})
const coverres = await cover.json();
console.log(coverres.information[0].picture_1); //封面
btt.innerHTML = '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + coverres.information[0].brief;

//插入封面
let pic = document.createElement('img');
pic.src = coverres.information[0].picture_1;
pic.width = '150'
cb.appendChild(pic);