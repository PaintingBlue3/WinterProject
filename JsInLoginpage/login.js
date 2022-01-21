 //src="JsInLoginpage/login.js"
 let username = document.getElementById('LoginUn');
 let password = document.getElementById('LoginPsw');
 let loginbtn = document.getElementById('loginbtn');

 let formdata = new FormData();
 loginbtn.addEventListener('click',loginclick)

 loginclick = () => {
     formdata.append('username', username.value);
     formdata.append('password', password.value);
     for (var value of formdata.values()) {
         console.log(value);
     }
     fetch("http://121.41.120.238:8080/user/login", {
         method: 'POST',
         body: formdata
     })
         .then(Response => Response.json())
         .then(res => console.log(res));
 }