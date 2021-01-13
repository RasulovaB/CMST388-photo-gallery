// JavaScript Document

//Initialize Variables

// assign all thumbnail images to the images variable / get reference
const images = document.querySelectorAll('#thumbnails > img');
// assign id largeImage to the demo variable / get reference
const demo = document.querySelector('#largeImage');
// assign caption id tag to captionText variable / get reference
const captionText = document.querySelector('#caption');
// assign class caption to addTitle variable / get reference
const addTitle = document.querySelector('.caption');
// create new <span> element in HTML
const title = document.createElement('span');



// Function to alter DOM
const alter = function () {

    // Adding content to the <span>
    title.innerHTML = '( Spacecraft Matching Content )';
    // Add css style class
    title.classList.add('caption');
    // Append to the DOM
    addTitle.appendChild(title);

}; // end of alter() fn

// invoke function
alter();


// hoverImage function for handling hover events
const hoverImage = function (galleryImages) {

    // loop through all images
    for (let i = 0; i < images.length; i++) {
        // test if passed parameter's src matches images src
        if (galleryImages.src == images[i].src) {
            // if yes, pass and display matched content
            captionText.innerHTML = galleryImages.alt;
        } // end of test
    } // end of for loop

}; // end of hoverImage() function

// selectImage function for handling click events
const selectImage = function (glImages) {

    // iterate through the images, clear any other border that was set
    for (let i = 0; i < images.length; i++) {
        // removes css style border if not clicked, from each images
        images[i].setAttribute('class', 'thumbDown');
    } // end of for loop

    // set the border to the image that got clicked
    glImages.classList.add('thumbUp');

    // iterate through all images
    for (let i = 0; i < images.length; i++) {
        // test if passed parameter's src matches images src
        if (glImages.src == images[i].src) {
            // if yes, change large area image to parameters src
            demo.src = glImages.src;
        } // end of test condition
    } // end of for loop

}; // end of selectImage() fn