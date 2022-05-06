/*
) Create a watchlist.js file that does the following:
a) When the page loads, pull the watchlist from localStorage
4
i) Use localStorage.getItem('watchlist');
b) Renders each movie to "movies-container", just like in index.js
i) You can have the movies render exactly like they did in index.js, or
you can switch it up!
You’ll find that the above code is almost identical to what you did in Part 1! The only
difference is that instead of showing a list of movies from data.js, you’ll be showing a list
of movies from localStorage.getItem('watchlist');
*/

let renderMovies = (movieArray) => {
    // To generate the movie card based on the data in data.js
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

document.addEventListener('DOMContentLoaded', function() {
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    console.log(watchlist);
    
    let render = renderMovies(watchlist);
    document.getElementById('list').innerHTML = render;
});
    