let username = document.getElementById('LoginUn');
let password = document.getElementById('LoginPsw');
let loginbtn = document.getElementById('loginbtn');

let formdata = new FormData();
loginbtn.addEventListener('click', loginclick)
formdata.append('username','');
formdata.append('password','');

async function loginclick() {
    formdata.set('username', username.value);
    formdata.set('password', password.value);
    // for (var value of formdata.values()) {
    //     console.log(value);
    // }
    // console.log(formdata)
    const res = await fetch("http://121.41.120.238:8080/user/login", {
        method: 'POST',
        body: formdata
    })//post账户和密码

    const data = await res.json();
    console.log(data.info);
    localStorage.setItem('token', data.info);//添加token

    // const token = data.info;
    // const aaa = await fetch("http://121.41.120.238:8080/user/check", {
    //     method: 'POST',
    //     body: token
    // })
    // console.log(aaa.json());
    // const post = document.getElementById('post');
    // post.addEventListener('click', async () => {
    // let aaa = new FormData();
    // aaa.append('token',data.info)
    // for (var value of formdata.values()) {
    // console.log(value);
    // }
    // console.log(aaa);
    // const token = data.info
    // // console.log(token);
    // const rescheck = await fetch("http://121.41.120.238:8080/user/check", {
    //     method: "POST",
    //     body: token
    // })
    // console.log(rescheck.json())
    // // })
}
// const logout = document.getElementById('post');

// logout.addEventListener('click', async () => {
//     const reslogout = await fetch('http://121.41.120.238:8080/user/check', {
//         method: 'POST',
//     })
//     console.log(reslogout);
// })
