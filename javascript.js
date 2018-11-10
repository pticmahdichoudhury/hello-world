var slideIndex = 0;
showSlides();
function showSlides () {
        console.log("hello, slideIndex")
    var slides = document.getElementsByClassName("myimages");
     for (var i = 0; i < slides.length; i++) {
         console.log("Hi");
        slides[i].style.display = "none";
    }
    slideIndex++
    if (slideIndex >= slides.length){
        slideIndex=0;
    }
    slides[slideIndex].style.display="block";
    setTimeout(showSlides, 4000);
}  
