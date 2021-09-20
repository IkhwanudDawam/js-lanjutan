const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
    try {
        const input = document.querySelector('.input-keyword');

        const movies = await getMovies(input.value);
        updateUI(movies);
    } catch (err) {
        alert(err)
    }
})



// event binding
document.addEventListener('click', async function (e) {
    try {
        if (e.target.classList.contains('modal-detail-button')) {
            const imdbid = e.target.dataset.imdbid;

            const detailsMov = await getDetails(imdbid);
            showDetails(detailsMov);
        }
    } catch (err) {
        console.log(err);
    }
})

function showDetails(value) {
    const movieModalShow = document.querySelector('.modal-body')
    movieModalShow.innerHTML = showMovieDetail(value);
}

function getDetails(value) {
    return fetch('http://www.omdbapi.com/?apikey=dca61bcc&i=' + value)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(response => response)
}

function getMovies(value) {
    return fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=' + value)
        .then(response => {
            // console.log(response)
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();

        })
        .then(response => {
            // console.log(response);
            if (!response.Response) {
                throw new Error(response.Error);
            }
            return response.Search

        })
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