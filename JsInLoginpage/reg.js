let RegUn = document.getElementById('RegUn');
let RegPsw = document.getElementById('RegPsw');
let question = document.getElementById('question');
let answer = document.getElementById('answer');

let regbtn = document.getElementById('regbtn');

let formData = new FormData();


regbtn.onclick = () => {
    formData.append('username', RegUn.value);//上传用户名input内的值
    formData.append('password', RegPsw.value);//上传密码input内的值
    formData.append('question', question.value);//上传密码input内的值
    formData.append('answer', answer.value);//上传密码input内的值
    for (var value of formData.values()) {
        console.log(value);
    }
    fetch("http://121.41.120.238:8080/user/register", {
        method: 'POST',
        body: formData
    })
        .then(Response => Response.json())
        .then(res => {
            let a = res.info;
            alert(a +'密码应为8到16位');
        })
       
}


