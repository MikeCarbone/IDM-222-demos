// GOAL: when the gallery comes into view we want it to fade in

// first we're gonna need to know where our gallery is
// lets get our gallery element
const gallery = document.getElementById('gallery');
const gallery2 = document.getElementById('gallery-2');
const img1 = document.getElementById('img-1');
const img2 = document.getElementById('img-2');
const img3 = document.getElementById('img-3');
const img4 = document.getElementById('img-4');

// were going to need to know where the bottom of our screen is
window.addEventListener("scroll", function () {
    applyClassWhenInView(gallery, 'fadeIn');
    applyClassWhenInView(img1, 'fadeIn');
    applyClassWhenInView(img2, 'fadeIn');
    applyClassWhenInView(img3, 'fadeIn');
    applyClassWhenInView(img4, 'fadeIn');
});

// Break this out to be reusable
function applyClassWhenInView(
    // Element to watch
    element,
    // Class name to add
    className
) {

    const viewportHeight = window.innerHeight;
    const positionOfElement = element.getBoundingClientRect();
    const distanceFromTop = positionOfElement.y;
    
    // When our element is in our viewport and halfway to the top...
    if (distanceFromTop < viewportHeight / 2) {

        // Lets check if the class is on our element
        // If not, we have to add the class to our element
        if (!element.classList.contains(className)) {
            element.classList.add(className);
        }
    }
}