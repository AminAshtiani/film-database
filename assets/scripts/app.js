// const addMovieModal = document.body.children[1];
// const addMovieModal = document.querySelector('#add-modal');
const addMovieModal = document.getElementById('add-modal');

// const startAddMovieButton = docuemnt.querySelector('header').lastChildElement;
const startAddMovieButton = document.querySelector('header button');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const backdrop = document.getElementById('backdrop');
const userInputs = addMovieModal.querySelectorAll('input');


const movies = [];


const toggleBackdrop = function() {
    backdrop.classList.toggle('visible');
}
const toggleMovieModal = function() {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
}
const cancelAddMovieHandler = function() {
    toggleMovieModal();
}
const backdropClickHandler = function() {
    toggleMovieModal();
}
const clearMovieInput = function() {
    for (const userInput of userInputs) {
        userInput.value = '';
    }
}
const addMovieHandler = function() {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;
    if (
        titleValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        ratingValue < 1 ||
        ratingValue > 5
    ) {
        alert('please enter valid values!');
        return;
    }
    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue,
    }
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput();
}

startAddMovieButton.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
backdrop.addEventListener('click', backdropClickHandler);