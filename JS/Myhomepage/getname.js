let tokenvalue = window.localStorage.getItem('token');//获取token的值

let formdata = new FormData();
formdata.append('token', '');

if (tokenvalue === null) {//token存在
}

else {
    formdata.set('token', tokenvalue);
}

const a = await fetch("http://121.41.120.238:8080/user/check", {
    method: 'POST',
    headers: formdata
})//验证登录状态

const res = await a.json();
console.log(res.info);
let username = res.info;

if (res.info == '你还没有登录！') {
   alert('你还没有登录！')
}

document.getElementById('whos').innerHTML = username + '的账号'