const unlog = document.getElementById('loginOrRegist');//获取红框
const log = document.getElementById('userHome');//获取篮筐
console.log('?')
    let formdata = new FormData();
    let token = '';
    token = window.localStorage.getItem('token');//获取token
    console.log(token);
    if(token == ''){
        unlog.style.display = 'block';
        log.style.display = 'none';
        console.log(token);
    } 
    else {
        formdata.append('token','');
        formdata.set('token',token);
        console.log(token);
        const a = await fetch("http://121.41.120.238:8080/user/check", {
            method: 'POST',
            headers: formdata
        })//验证登录状态
        const res = await a.json();
        console.log(res.info);
        if (res.info == '你还没有登录！') {//token验证通过后
            unlog.style.display = 'block';
            log.style.display = 'none';
        }
        else{
            unlog.style.display = 'none';
            log.style.display = 'block';
        }
    }
    console.log('??')
    console.log('???')

// log.addEventListener('click',()=>{
    
// })

