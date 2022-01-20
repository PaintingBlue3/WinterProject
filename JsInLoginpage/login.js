let username = document.getElementById('LoginUn');
let password = document.getElementById('LoginPsw');
let loginbtn = document.getElementById('loginbtn');

let formData = new FormData();

loginbtn.onclick = () => {
    formData.append('username', LoginUn.value);//上传用户名input内的值
    formData.append('password', LoginPsw.value);//上传密码input内的值
    for (var value of formData.values()) {
        console.log(value);
    }
    fetch("http://121.41.120.238:8080/user/login", {
        method: 'POST',
        body: formData
    })
        .then(Response => Response.json())
        .then(res => console.log(res));
}