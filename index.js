let renderMovies = (movieArray) => {
    // To generate the movie card based on the data in data.js.
    let movieHtmlArray = movieArray.map((currentMovie) => {
        let movieTitle = currentMovie.Title;
        let movieYear = currentMovie.Year;
        let movieId = currentMovie.imdbID;
        let moviePoster = currentMovie.Poster;

        return `<div class="movie card col-3">
                <img src="${moviePoster}" alt="${movieTitle} Image">
                <h2 class="movie-title card-title">${movieTitle}</h2>
                <p class="release-date card-text">${movieYear}</p>
                <button class="add-button btn btn-primary" data-imdbid=${movieId}>Add!</button>
            </div>`;
    });

    return movieHtmlArray.join('');
}

let saveToWatchlist = (movieId) => {
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    
    // Loop through all movies in movieData until a matching movie is found
    let movie = movieData.find((currentMovie) => {
        return currentMovie.imdbID == movieId;
    });
    
    // If watchlist does not exist, create empty array
    if (watchlist == null) {
        watchlist = [];
    }

    watchlist.push(movie);

    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}

let callOMDB = (queryString) => {
    fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${queryString}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const formSubmit = document.getElementById('form-submit');

    // TODO: Change to submit event
    formSubmit.addEventListener('click', function(event){
        event.preventDefault();

        // Capture user typed input
        const searchString = document.getElementById('search-bar').value;
        // "Sanitize" the user input so there will not be spaces
        const urlEncodedSearchString = encodeURIComponent(searchString);

        callOMDB(urlEncodedSearchString);

        // Render movie cards to the page
        let render = renderMovies(movieData);
        document.getElementById('list').innerHTML = render;
    });

    document.addEventListener('click', function(event) {
        let list = event.target.classList;

        if (list.contains('add-button')) {
            // Target the indiviual movie
            let movie = event.target.dataset.imdbid;
            saveToWatchlist(movie);
        }
    });
});
