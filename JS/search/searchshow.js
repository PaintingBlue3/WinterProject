const ss = document.getElementById('searchshow')
const search = document.getElementById("search");
const searchBt = document.getElementById('searchBt');
let formdata = new FormData();
formdata.append('name', '')

searchBt.addEventListener('click', async () => {
    console.log(search.value)
    if (search.value == '' || search.value === null) {
        formdata.set('name', '');
        alert('你还没有在搜索框内输入内容')
        localStorage.setItem('sv', '');//加个token保存
    }
    else {
        formdata.set('name', search.value);
        localStorage.setItem('sv', search.value);//加个token保存搜索框内的内容
        // for (var value of formdata.values()) {
        //     console.log(value);
        // }

        //查电影
        const mf = await fetch("http://121.41.120.238:8080/movie/find", {
            method: 'POST',
            body: formdata
        })
        const mfres = await mf.json();
        console.log(mfres.IMDB);
        console.log(mfres.alias)//电影标题

        //查封面
        let coverform = new FormData();
        coverform.append('IMDB', '');
        coverform.append('heading', 'view');
        coverform.set('IMDB', mfres.IMDB);
        const IMDBs = await fetch("http://121.41.120.238:8080/movie/findByIMDB", {
            method: 'POST',
            body: coverform
        })
        const Is = await IMDBs.json();
        console.log(Is.picture1);
        console.log(Is);

        let coverbox1 = document.getElementById('cb1');
        let cover1 = document.createElement('img');
        cover1.src = Is.picture1;
        cover1.width = '120'
        coverbox1.appendChild(cover1);

        // self.location = 'search.html'//跳转到搜索界面
        // console.log(sv);
        // alert(sv)

        //改变为搜索框内容
        let sv = window.localStorage.getItem('sv');
        ss.innerHTML = '搜索 ' + sv;
        localStorage.setItem('sv', search.value);

        //改变搜索电影标题
        const t1 = document.getElementById('t1');
        t1.innerHTML = mfres.alias;


    }
})




// let sv = window.localStorage.getItem('sv');
// // alert(sv);
// ss.innerHTML = '搜索 ' + sv;


//显示封面
// let coverbox1 = document.getElementById('cb1');
// let cover1 = document.createElement('img');
// cover1.src = "https://douban-example.oss-cn-shenzhen.aliyuncs.com/7AKOV48%60M%7BS%602N50C2W4H%7DM.jpg"
// cover1.width = '120'
// coverbox1.appendChild(cover1);
