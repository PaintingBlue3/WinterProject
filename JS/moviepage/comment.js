//
const comments = document.querySelector('.ct');
let commentform = new FormData();
commentform.append('movie', 'tt11219254')
    // commentform.set('movie', 'tt11219254')
const comment = await fetch('http://121.41.120.238:8080/message/msgList', {
    method: 'POST',
    body: commentform
})
const cmres = await comment.json()
const cmresInf = cmres.information[0];
console.log(cmres.information.length);
for (let i = 0; i < cmres.information.length; i++) {
    //创建盒子
    let cb = document.createElement('div');
    let line = document.createElement('hr')
    line.SIZE = '1';
    console.log(line)
    cb.className = 'cb';
    line.noshade = "noshade"
    line.color = "#dddddd"
    line.size = '1'
    console.log(cb);
    comments.appendChild(line);
    comments.appendChild(cb);
    const un = document.createElement('span');
    const msg = document.createElement('div');
    un.innerHTML = cmres.information[0].username;
    msg.innerHTML = cmres.information[0].msg;
    cb.appendChild(un)
    cb.appendChild(msg)
    console.log(cb)

    //在盒子里写评论
    //在盒子里加点赞键
}