async function a() {
    const search = document.getElementById("search");
    const searchBt = document.getElementById('searchBt');
    let formdata = new FormData();
    formdata.append('name', '')
}
a();
searchBt.addEventListener('click', async () => {
    console.log(search.value);
    if (search.value == '' || search.value === null) {
        formdata.set('name', '');
        alert('?')
        localStorage.setItem('sv', '');//加个token保存
    }
    else {
        formdata.set('name', search.value);
        localStorage.setItem('sv', search.value);//加个token保存搜索框内的内容
    }
    // for (var value of formdata.values()) {
    //     console.log(value);
    // }
    const mf = await fetch("http://121.41.120.238:8080/movie/find", {
        method: 'POST',
        body: formdata
    })
    const mfres = await mf.json();
    console.log(mfres);

    self.location = 'search.html'//跳转到搜索界面
    // console.log(sv);
    // alert(sv)
    let sv = window.localStorage.getItem('sv');
    ss.innerHTML = '搜索 ' + sv;
    localStorage.setItem('sv', search.value);
})
let sv = window.localStorage.getItem('sv');
// alert(sv);
ss.innerHTML = '搜索 ' + sv;