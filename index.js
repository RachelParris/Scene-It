let renderMovies = (movieArray) => {
    // To generate the movie card based on the data in data.js.
    let movieHtmlArray = movieArray.map((currentMovie) => {
        let movieTitle = currentMovie.Title;
        let movieYear = currentMovie.Year;
        let moviePoster = currentMovie.Poster;

        return `<div class="movie card col-3">
                <img src="${moviePoster}" alt="${movieTitle} Image">
                <h2 class="movie-title card-title">${movieTitle}</h2>
                <p class="release-date card-text">${movieYear}</p>
                <button class="add-movie btn btn-primary">Add~</button>
            </div>`;
    });

    return movieHtmlArray.join("");
}

document.addEventListener('DOMContentLoaded', function() {
    // code here will execute after the document is loaded
    const formSubmit = document.getElementById('form-submit');
    formSubmit.addEventListener('click', function(e){
        e.preventDefault();

        let render = renderMovies(movieData);
        document.getElementById("list").innerHTML = render;
    });
});



