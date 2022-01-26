const unlog = document.getElementById('loginOrRegist');//获取红框
const log = document.getElementById('userHome');//获取篮筐
console.log('?')
let tokenvalue = '';
tokenvalue = window.localStorage.getItem('token');//获取token的值
console.log('tokenvalue=  '+tokenvalue);//打印token的值

let formdata = new FormData();
formdata.append('token','');

if(tokenvalue!=''){//token存在
    formdata.set('token','');
    console.log('token的值不为空')
}

else{
    formdata.set('token',tokenvalue);
    console.log(1)
}

const a = await fetch("http://121.41.120.238:8080/user/check", {
    method: 'POST',
    headers: formdata
})//验证登录状态

const res = await a.json();
console.log(res.info);
let username = res.info;

if (res.info == '你还没有登录！') {
    unlog.style.display = 'block';
    log.style.display = 'none';
    }

    else{//登录成功
    unlog.style.display = 'none';
    log.style.display = 'block';
}

document.getElementById('whos').innerHTML=username+'的账号'