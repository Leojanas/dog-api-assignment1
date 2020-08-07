//Javascript for simple GET request to Dog API
//define default value for number of images
let number = 3;



//function to send GET request
function getDogPhotos(){
    fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson))
}
//function to update number variable
function updateNumber(){
    number = $('.js-form input[name="number"]').val();
    getDogPhotos();
}
//function to watch form submissions
function watchForm(){
    console.log('Page Loaded, watching form');
    $('.js-form').submit(event => {
        event.preventDefault();
        updateNumber();
    })
}

//ready function
$(watchForm());