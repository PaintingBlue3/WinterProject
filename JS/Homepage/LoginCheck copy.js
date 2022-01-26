const unlog = document.getElementById('loginOrRegist');//获取红框
const log = document.getElementById('userHome');//获取篮筐
console.log('?')
let tokenvalue = '';
tokenvalue = window.localStorage.getItem('token');//获取token
console.log('tokenvalue='+tokenvalue);//打印token

let formdata = new FormData();
formdata.append('token','');

// if(tokenvalue == ''){//token为空或没有token
//     console.log(1)
//     console.log('token='+ token)
// }

// else{//token存在
//     formdata.append('token','');
//     formdata.set('token',tokenvalue);
//     // console.log(tokenvalue)
//     console.log('token=' + tokenvalue)
// }

const a = await fetch("http://121.41.120.238:8080/user/check", {
    method: 'POST',
    headers: formdata
})//验证登录状态

const res = await a.json();
console.log(res.info);

if (res.info == '你还没有登录！') {
    unlog.style.display = 'block';
    log.style.display = 'none';
    }

    else{//登录成功
    unlog.style.display = 'none';
    log.style.display = 'block';
}
console.log('??')
console.log('???')

// log.addEventListener('click',()=>{
    
// })

