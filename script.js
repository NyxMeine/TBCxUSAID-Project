//Header Scroll Script------------------------------------------------------------------
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        header.style.backgroundColor = '#222222F2';
    } 
    else {
        header.style.backgroundColor = '#1A1E1F';
    }
});
//Header Scroll Script------------------------------------------------------------------





//Color change for clicked list items Script------------------------------------------------------------------
function changeColor(clickedElement, selector) {
    var items = document.querySelectorAll(selector);
    
    items.forEach(function(item) {
        item.classList.remove('clicked');
    });

    clickedElement.classList.add('clicked');
}

//Color change for clicked list items Script------------------------------------------------------------------



//carousel/carousel Script------------------------------------------------------------------
const slides = document.querySelectorAll(".slides img");
const slidesPerPage = 3;
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeCarousel());

function initializeCarousel() {
    if (slides.length > 0) {
        showSlides();
        intervalId = setInterval(nextSlide, 7000);

        const radioButtons = document.querySelectorAll(".carousel-radio");
        radioButtons.forEach((radio, index) => {
            radio.addEventListener("click", () => {
                slideIndex = index * slidesPerPage;
                showSlides();
            });
        });
    }
}


function showSlides() {
    const endIndex = slideIndex + slidesPerPage;
    slides.forEach((slide, index) => {
        if (index >= slideIndex && index < endIndex) {
            slide.classList.add("displaySlide");
        } else {
            slide.classList.remove("displaySlide");
        }
    });

    const radioButtons = document.querySelectorAll(".carousel-radio");
    radioButtons.forEach((radio, index) => {
        radio.checked = index * slidesPerPage === slideIndex;
    });
}



function prevSlide() {
    slideIndex -= slidesPerPage;
    if (slideIndex < 0) {
        slideIndex = Math.floor((slides.length - 1) / slidesPerPage) * slidesPerPage;
    }
    showSlides();
}



function nextSlide() {
    slideIndex += slidesPerPage;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides();
}
//carousel/carousel Script------------------------------------------------------------------





//Accordion/Dropdown Script------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const heading = item.querySelector('.accordion-item-heading');

        heading.addEventListener('click', function () {
            const content = item.querySelector('.accordion-item-content');
            item.classList.toggle('active');

            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = 0;
            }
        });
    });
});
//Accordion/Dropdown Script------------------------------------------------------------------




//Hamburger Menu Script------------------------------------------------------------------
var checkbox = document.getElementById("check");
var menu = document.querySelector(".hamburger-menu");

checkbox.addEventListener("change", function() {
    if (this.checked) {
        menu.classList.add("menu-visible");
    } else {
        menu.classList.add("disappearing");
        setTimeout(function() {
            menu.classList.remove("menu-visible", "disappearing");
        }, 400);
    }
});
//Hamburger Menu Script------------------------------------------------------------------


//Toggle rules and darken rest screen script----------------------------------------------
function toggleRules() {
    var rulesContainer = document.querySelector('.rules-container');
    var rulesContent = document.querySelector('.rules-content');
    var body = document.body;
    var darken = document.querySelector('.darken');
    var checkbox = document.getElementById('rulesToggle');
    rulesContainer.classList.toggle('show');
    rulesContent.classList.toggle('show');
    // Check if the container has the 'show' class and the checkbox is checked
    if (rulesContainer.classList.contains('show') && checkbox.checked) {
        
        // Apply blur effect to body when container has 'show' class and checkbox is checked
        rulesContainer.addEventListener('animationend', function () {
            body.style.backdropFilter = 'blur(100%)';
            darken.style.display = 'block';
            body.style.overflowY = "auto"
            
        });
    } else {
        // Remove darken effect
        body.style.backdropFilter = 'none';
        darken.style.display = 'none';
        body.style.overflowY = "auto"
        
        
    }
}
