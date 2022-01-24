const unlog = document.getElementById('loginOrRegist');
const log = document.getElementById('userHome');
const token = window.localStorage.getItem('token');
async () => {
    await fetch("http://121.41.120.238:8080/user/check", {
        method: 'POST',
        headers: token
    })
    const res = await aaa.json();
    console.log(res.info);
    if (res.info == '') {
        unlog.style.display='none';
        log.style.display='block';
        }
}


