const search = document.getElementById("search");
const searchBt = document.getElementById('searchBt');
let formdata = new FormData();
formdata.append('name', '')

searchBt.addEventListener('click', async () => {
    formdata.set('name', search.value);
    for (var value of formdata.values()) {
        console.log(value);
    }
    const mf = await fetch("http://121.41.120.238:8080/movie/find", {
        method: 'POST',
        body: formdata
    })
    const mfres = await mf.json();
    console.log(mfres);
})
