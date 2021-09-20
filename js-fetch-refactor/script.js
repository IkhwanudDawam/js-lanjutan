// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function () {
//     const input = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=' + input.value)
//         .then(response => response.json())
//         .then(response => {
//             let cards = []
//             response.Search.forEach(e => cards += showCards(e))

//             const movieContainer = document.querySelector('.movie-container')
//             movieContainer.innerHTML = cards;

//             //Button Detail Diklik
//             const btnModal = document.querySelectorAll('.modal-detail-button')
//             btnModal.forEach(e => {
//                 e.addEventListener('click', function () {
//                     const imdbid = this.dataset.imdbid
//                     fetch('http://www.omdbapi.com/?apikey=dca61bcc&i=' + imdbid)
//                         .then(response => response.json())
//                         .then(response => {
//                             const movieDetail = showMovieDetail(response);

//                             const movieModalShow = document.querySelector('.modal-body')
//                             movieModalShow.innerHTML = movieDetail;
//                         })
//                 })
//             })
//         });
// })


const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
    const input = document.querySelector('.input-keyword');

    const movies = await getMovies(input.value);
    updateUI(movies);
})



// event binding
document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('modal-detail-button')) {
        const imdbid = e.target.dataset.imdbid;

        const detailsMov = await getDetails(imdbid);
        showDetails(detailsMov);
    }
})









function showDetails(value) {
    const movieModalShow = document.querySelector('.modal-body')
    movieModalShow.innerHTML = showMovieDetail(value);
}

function getDetails(value) {
    return fetch('http://www.omdbapi.com/?apikey=dca61bcc&i=' + value)
        .then(response => response.json())
        .then(response => response)
}

function getMovies(value) {
    return fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=' + value)
        .then(response => response.json())
        .then(response => response.Search)
}

function updateUI(value) {
    let cards = []
    value.forEach(e => cards += showCards(e))

    const movieContainer = document.querySelector('.movie-container')
    return movieContainer.innerHTML = cards;
}

function showCards(e) {
    return `<div class="col-md-4 my-5">
                <div class="card">
                    <img src="${e.Poster}" class="card-img-top" width="auto" height="500px">
                    <div class="card-body">
                        <h5 class="card-title">${e.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${e.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailsModal" data-imdbid="${e.imdbID}">Details</a>
                    </div>
                </div>
            </div>`
}

function showMovieDetail(m) {
    return `<div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid">
            </div>
            <div class="col-md">
                <ul class="list-group">
                    <li class="list-group-item">
                        <h4>${m.Title}(${m.Year})</h4>
                    </li>
                    <li class="list-group-item"><strong>Director: </strong>${m.Director}</li>
                    <li class="list-group-item"><strong>Actors: </strong>${m.Actors}</li>
                    <li class="list-group-item"><strong>Writer: </strong>${m.Writer}</li>
                    <li class="list-group-item"><strong>Plot: </strong>${m.Plot}</li>
                </ul>
            </div>
        </div>
    </div>`
}