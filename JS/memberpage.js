const memname = document.querySelector(".a3")
const memcover = document.querySelector(".cover")
const memspans = document.querySelectorAll(".mt");

console.log(memname);
console.log(memspans);

let imdb = window.localStorage.getItem('member');
let memform = new FormData();
memform.append('IMDB', imdb);
const membersearch = await fetch('http://121.41.120.238:8080/member/showMember', {
    method: 'POST',
    body: memform
})
const msres = await membersearch.json();
console.log(msres.information[0]);

const title = document.querySelector('#title');
title.innerHTML = msres.information[0].Name;

memname.innerHTML = msres.information[0].Name;
if (msres.information[0].Male == '1')
    memspans[0].innerHTML = '男'
else
    memspans[0].innerHTML = '女'
memspans[1].innerHTML = msres.information[0].Cons;
memspans[2].innerHTML = msres.information[0].Date;
memspans[3].innerHTML = msres.information[0].Place;
memspans[4].innerHTML = msres.information[0].Job;
memspans[5].innerHTML = msres.information[0].ByName;
memspans[6].innerHTML = msres.information[0].IMDB;

memform.append('heading', 'view');
const memberpic = await fetch('http://121.41.120.238:8080/member/showMember', {
    method: 'POST',
    body: memform
})
const mpres = await memberpic.json();
console.log(mpres.information[0]);
const mempic = document.createElement('img');
mempic.src = mpres.information[0].Picture1;
mempic.width = '150'
memcover.appendChild(mempic);

const mt = document.querySelector('#bt');
const mp = document.querySelector('#bp');
console.log(mt)
mt.innerHTML = mpres.information[0].Brief;

const pic2 = document.createElement('img');
pic2.src = mpres.information[0].Picture2;
pic2.width = '200'
mp.appendChild(pic2);

const pic3 = document.createElement('img');
pic3.src = mpres.information[0].Picture3;
pic3.width = '200'
mp.appendChild(pic3);

const pic4 = document.createElement('img');
pic4.src = mpres.information[0].Picture4;
pic4.width = '200'
mp.appendChild(pic4);

const mms = document.getElementById('mm');

// console.log(msres.information[0].IMDB)
let workform = new FormData();
workform.append('MemberIMDB', msres.information[0].IMDB);
const moviework = await fetch('http://121.41.120.238:8080/movie/findByMember', {
    method: 'POST',
    body: workform
})
const workres = await moviework.json();
console.log(workres.info)

//提交的代码上没写的
const imdbs = workres.info.split('')
console.log(imdbs)
let left = 1;
let right = 0;
let num = 0;
let tts = new Array()
for (let i = 0; i < imdbs.length; i++) {
    if (imdbs[i] == ',') {
        left = i + 1;
        console.log('left=' + left)
        for (let f = left; f < imdbs.length; f++) {
            if (imdbs[f] == ',') {
                right = f;
                console.log(right)
                console.log(imdbs.slice(left, [right]).join(""))
                tts[num] = imdbs.slice(left, [right]).join("")
                num++;
                left = right;
                break;
            }
        }
        right = imdbs.length;

    }
}
console.log(imdbs.slice(left, [right]).join(""))
tts[num] = imdbs.slice(left, [right]).join("")


console.log(tts)





for (let i = 0; i < tts.length; i++) { //有改动
    let coverform = new FormData();
    coverform.append('heading', 'view');
    coverform.append('IMDB', tts[i]);
    const cover = await fetch("http://121.41.120.238:8080/movie/findByIMDB", {
        method: 'POST',
        body: coverform
    })
    const coverres = await cover.json();
    let pic = document.createElement('img');
    pic.src = coverres.information[0].picture_1;
    pic.className = 'mmp'
    pic.width = '150'
    mms.appendChild(pic);
    const mmps = document.querySelectorAll('.mmp');
    mmps[i].addEventListener('click', async() => {
        localStorage.setItem('imdb', tts[i]) //代修bug
        window.open('moviepage.html')
    })
}