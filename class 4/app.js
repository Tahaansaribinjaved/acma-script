let div = document.getElementById('news')
let getSerch = document.getElementById('search')
let getNews= () => {

    fetch(`https://newsapi.org/v2/everything?q=${getSerch.value}&from=2023-09-11&sortBy=publishedAt&apiKey=5a855e35ba3b462c9be35a1d0d16a2dd`)
    .then(data => data.json())
    .then(
        (data) => {
            // console.log(data.articles[0].urlToImage)
            for (let i = 0; i < data.articles.length; i++) {
                // console.log(data.articles[i].)
                let title =  data.articles[i].title
                div.innerHTML += `
                <div class="card m-2" style="width: 18rem;">
                <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">${title}</p>

                </div>
                </div>`
            }
            console.log(data)
        }
        )
        .catch(err => console.log(err))
    } 
    // getNews()