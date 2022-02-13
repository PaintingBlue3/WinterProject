const tt = window.localStorage.getItem('imdb');
const comments = document.querySelector('.ct');
const many = document.getElementById('many');

let commentform = new FormData();
commentform.append('movie', tt)
    // commentform.set('movie', 'tt11219254')
const comment = await fetch('http://121.41.120.238:8080/message/msgList', {
    method: 'POST',
    body: commentform
})
const cmres = await comment.json();
const cmresInf = cmres.information[0];
console.log(cmres.information.length);
many.innerHTML = '(全部 ' + cmres.information.length + ' 条)'

for (let i = cmres.information.length - 1; i >= 0; i--) {
    //创建盒子
    let cb = document.createElement('div');
    let line = document.createElement('hr');
    line.SIZE = '1';
    console.log(line);
    cb.className = 'cb';
    line.noshade = "noshade"
    line.color = "#dddddd"
    line.size = '1'
    console.log(cb);
    comments.appendChild(line);
    comments.appendChild(cb);
    const un = document.createElement('span');
    const un1 = document.createElement('span');
    un1.id = 'no';
    const msg = document.createElement('div');
    un1.innerHTML = '第' + i + '楼'
    un.innerHTML = cmres.information[i].username;
    msg.innerHTML = cmres.information[i].msg;
    cb.appendChild(un);
    cb.appendChild(un1);
    cb.appendChild(msg);
    console.log(cb);

    //在盒子里写评论
    //在盒子里加点赞键
    const tp = document.createElement('img');
    tp.src = '/images/moviepage/tbup-before.png';
    cb.appendChild(tp)

    // window.open('search.html')
    // window.open("search.html", "newwindow", "height=100, width=400, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no")
}