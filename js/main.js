var slideIndex = 1;
var bookChapter = 'Home';
var sideNavItem = 0;

function setChapter(n) {
    const allSlideNavItems = document.getElementsByClassName(`side-nav__item`);
    allSlideNavItems[sideNavItem].classList.remove("side-nav__item--active");
    sideNavItem = (!n) ? 0 : n;
    allSlideNavItems[sideNavItem].classList.add("side-nav__item--active"); 
    bookChapter = (!n) ? 'Home' : 'chapter' + n;
    showSlides(1);
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;

    const allSlideshowContainer = document.getElementsByClassName(`slideshow-container`);
    for (i = 0; i < allSlideshowContainer.length; i++) {
        allSlideshowContainer[i].style.display = "none";  
    }

    const allDotsContainer = document.getElementsByClassName(`dots-container`);
    for (i = 0; i < allDotsContainer.length; i++) {
        allDotsContainer[i].style.display = "none";  
    }

    const allSlides = document.getElementsByClassName(`mySlides`);
    const allDots = document.getElementsByClassName("dot");

    for (i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = "none";  
    }

    for (i = 0; i < allDots.length; i++) {
        allDots[i].style.display = "none";  
    }

    const slideshowContainer = document.getElementsByClassName(`slideshow-container ${bookChapter}`);
    if(!!slideshowContainer && slideshowContainer.length) {
        slideshowContainer[0].style.display = "block";
    }

    const dotsContainer = document.getElementsByClassName(`dots-container ${bookChapter}`);
    if(!!dotsContainer && dotsContainer.length) {
        dotsContainer[0].style.display = "block";
    }
    
    const slides = document.getElementsByClassName(`mySlides ${bookChapter}`);
    const dots = document.getElementsByClassName(`dot ${bookChapter}`);

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].style.display = 'inline-block';  
    }

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    if(!!slides && slides.length) {
        slides[slideIndex-1].style.display = "block";
    }

    if(!!dots && dots.length) {
        dots[slideIndex-1].className += " active";
    }
}

