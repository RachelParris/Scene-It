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
    localStorage.setItem('watchlist', watchlistJSON);
    
    let movie = movieData.find((currentMovie) => {
        return currentMovie.imdbId == movieId;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const formSubmit = document.getElementById('form-submit');

    // TODO: Change to submit event
    formSubmit.addEventListener('click', function(event){
        event.preventDefault();

        // Render movie cards to the page
        let render = renderMovies(movieData);
        document.getElementById('list').innerHTML = render;
    });

    document.addEventListener('click', function(event) {
        let list = event.target.classList;

        if (list.contains('add-button')) {
            let movie = event.target.dataset.imdbid;
            saveToWatchlist(movie);
        }
    });
});
