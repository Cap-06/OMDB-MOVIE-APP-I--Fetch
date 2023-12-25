document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '9c472d10'; // Replace with your actual API key
    const searchBtn = document.getElementById('searchBtn');
    const movieInput = document.getElementById('movieInput');
    const movieDetails = document.getElementById('movieDetails');

    searchBtn.addEventListener('click', () => {
        const searchTerm = movieInput.value.trim();
        if (searchTerm !== '') {
            searchMovies(searchTerm);
        }
    });

    function searchMovies(query) {
        const apiUrl = `http://www.omdbapi.com/?apikey=${'9c472d10'}&t=${encodeURIComponent(query)}`;


        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.Response === 'True') {
                    displayMovieDetails(data);
                } else {
                    displayErrorMessage('Movie not found. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error fetching movie data:', error);
                displayErrorMessage('An error occurred while fetching data. Please try again.');
            });
    }

    function displayMovieDetails(movie) {
        movieDetails.innerHTML = '';

        const movieTitle = document.createElement('h2');
        movieTitle.textContent = movie.Title;

        const moviePoster = document.createElement('img');
        moviePoster.src = movie.Poster;
        moviePoster.alt = `${movie.Title} Poster`;

        const movieYear = document.createElement('p');
        movieYear.textContent = `Year: ${movie.Year}`;

        const movieGenre = document.createElement('p');
        movieGenre.textContent = `Genre: ${movie.Genre}`;

        const moviePlot = document.createElement('p');
        moviePlot.textContent = `Plot: ${movie.Plot}`;

        movieDetails.appendChild(movieTitle);
        movieDetails.appendChild(moviePoster);
        movieDetails.appendChild(movieYear);
        movieDetails.appendChild(movieGenre);
        movieDetails.appendChild(moviePlot);
    }

    function displayErrorMessage(message) {
        alert(message);
    }
});
