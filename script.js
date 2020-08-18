'use strict';

function getDogImageMulti(numDogs) {
    fetch('https://dog.ceo/api/breeds/image/random/'+ numDogs)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        
        const numDogs = $('#js-numDogs').val(); // obtains number from form
        console.log(numDogs); // confirm number has been obtained
        
        getDogImageMulti(numDogs);

    });
}

$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});