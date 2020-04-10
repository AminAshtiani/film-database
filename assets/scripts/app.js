// const addMovieModal = document.body.children[1];
// const addMovieModal = document.querySelector('#add-modal');
const addMovieModal = document.getElementById('add-modal');

// const startAddMovieButton = docuemnt.querySelector('header').lastChildElement;
const startAddMovieButton = document.querySelector('header button');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const backdrop = document.getElementById('backdrop');

const toggleBackdrop = function() {
    backdrop.classList.toggle('visible');
}
const toggleMovieModal = function() {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
}
const cancelAddMovie = function() {
    toggleMovieModal();
}
const backdropClickHandler = function() {
    toggleMovieModal();
}
startAddMovieButton.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);
backdropk.addEventListener('click', backdropClickHandler);