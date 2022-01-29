const search = document.getElementById("search");
const searchBt = document.getElementById('searchBt');
let searchForm = new FormData();
searchForm.append('name', '')

searchBt.addEventListener('click', async () => {
    searchForm.set('name', search.value);
    for (var value of searchForm.values()) {
        console.log(value);
    }
    console.log(search)
    const mf = await fetch("http://121.41.120.238:8080/movie/find", {
        method: 'POST',
        body: searchForm

    })
    const mfres = mf.json();
    console.log(mfres);
})
