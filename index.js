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
    

    let movie = movieData.find((currentMovie) => {
        return currentMovie.imdbID == movieId;
    });
    
    if (watchlist == null) {
        watchlist = [];
    }

    watchlist.push(movie);

    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}

/*
Use an if-statement to check if the watchlist is null
a) If it is null, set watchlist to an empty array
b) Try this on your own! Call for attention if you’re having trouble with this
one.
7) Push movie into the watchlist
watchlist.push(movie);
8) Turn the watchlist back into JSON
watchlistJSON = JSON.stringify(watchlist);
9) Save the JSONified watchlist back into local storage
localStorage.setItem('watchlist', watchlistJSON);
And that’s it! Now, when you click the add button for any given, you should see it’s data
saved into local storage under the key “watchlist”!
*/

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
            // Target the indiviual movie
            let movie = event.target.dataset.imdbid;
            saveToWatchlist(movie);
        }
    });
});
