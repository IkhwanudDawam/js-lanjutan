// Menggunakan ajax JQuery

// $('.search-button').on('click', function () {
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=' + $('.input-keyword').val(),
//         success: (mov) => {
//             // mov.Search.forEach(e => console.log(e.Title));
//             const movies = mov.Search;
//             let cards = []
//             movies.forEach(e => cards += showCards(e));
//             $('.movie-container').html(cards);

//             //Ketika Details diklik
//             $('.modal-detail-button').on('click', function () {
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=dca61bcc&i=' + $(this).data('imdbid'),
//                     success: m => {
//                         const movieDetail = showMovieDetail(m);
//                         $('.modal-body').html(movieDetail);
//                     },
//                     error: (e) => {
//                         console.log(e.responseText);
//                     }
//                 })

//                 // console.log($(this).data('imdbid'));
//             })
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     })
// })

// fetch
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function () {
    const input = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=' + input.value)
        .then(response => response.json())
        .then(response => {
            let cards = []
            response.Search.forEach(e => cards += showCards(e))

            const movieContainer = document.querySelector('.movie-container')
            movieContainer.innerHTML = cards;

            //Button Detail Diklik
            const btnModal = document.querySelectorAll('.modal-detail-button')
            btnModal.forEach(e => {
                e.addEventListener('click', function () {
                    const imdbid = this.dataset.imdbid
                    fetch('http://www.omdbapi.com/?apikey=dca61bcc&i=' + imdbid)
                        .then(response => response.json())
                        .then(response => {
                            const movieDetail = showMovieDetail(response);

                            const movieModalShow = document.querySelector('.modal-body')
                            movieModalShow.innerHTML = movieDetail;
                        })
                })
            })
        });
})





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