const tt = window.localStorage.getItem('imdb');
const title = document.querySelector('.a3')
const cb = document.querySelector('.cover')
console.log(title)

//查电影名
let ttform = new FormData();
ttform.append('IMDB', tt);
const tts = await fetch("http://121.41.120.238:8080/movie/findByIMDB", {
    method: 'POST',
    body: ttform
})
const ttres = await tts.json();
title.innerHTML = ttres.information[0].name


//查封面
let coverform = new FormData();
coverform.append('heading', 'view');
coverform.append('IMDB', ttres.information[0].imdb);
const cover = await fetch("http://121.41.120.238:8080/movie/findByIMDB", {
    method: 'POST',
    body: coverform
})
const coverres = await cover.json();
console.log(coverres.information[0].picture_1);//封面

//插入封面
let pic = document.createElement('img');
pic.src = coverres.information[0].picture_1;
pic.width = '150'
cb.appendChild(pic);