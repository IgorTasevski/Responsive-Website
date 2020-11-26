let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls

currentSlide = (n) => {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  let current_slide_elements = document.getElementsByClassName("current-slide");
  let slide_numbers = Array.from(document.getElementsByClassName("slide-numbers")); // Array.from used to be able to use foreach on this variable
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";

  //remove the active class from each slide_number, before setting it on the correct one
  slide_numbers.forEach((slide_number) => {
    slide_number.className.replace(" active", "");
  })

  // let the number in the carousel be highlighted in red, calculated using (current_slide + current_slide*number_of_slides)
  slide_index = n-1;
  slide_numbers[slide_index + slide_index*current_slide_elements.length].className += " active";
}

// Open navigation menu

 toggleMenu = () => {
    const menuBox = document.getElementById('nav-bar');    
    if(menuBox.style.display == "block") { // if is menuBox displayed, hide it
      menuBox.style.display = "none";
    }
    else { // if is menuBox hidden, display it
      menuBox.style.display = "block";
    }
  }