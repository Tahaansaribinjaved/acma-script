let div = document.getElementById('news')
let getSerch = document.getElementById('search')
let getNews= () => {

    fetch(`https://api.openweathermap.org/data/3.0/onecall?p=karachiexclude={part}&appid={ed2dd5cdabee456fddc007705cbd9570}`)
    .then(data => data.json())
    .then(
        (data) => {
            // console.log(data.articles[0].urlToImage)
            for (let i = 0; i < data.articles.length; i++) {
                // console.log(data.articles[i].)
                div.innerHTML += `
                <div class="card m-2" style="width: 18rem;">
                <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>`
            }
        }
        )
        .catch(err => console.log(err))
    } 
    // getNews()