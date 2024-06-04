/**Preloader */
$(window).on('load', function() {

    setTimeout(function() {
        $('#preloader').fadeOut('slow', function() {
            $('.content').fadeIn('slow');
        });
    }, 4000); 
});
window.onscroll = function() {
    var goToTopButton = document.getElementById("goToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      goToTopButton.style.display = "block";
    } else {
      goToTopButton.style.display = "none";
    }
  };

  // Smooth scroll to top
  document.getElementById("goToTop").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
/**typing effect */
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["Software Engineer", "Full-Stack Developer", "Quick Learner..."];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove('blink');
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    cursor.classList.add('blink');
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 1000);
  }
}

const type = () => {
  if (charIndex <= textArray[textArrayIndex].length - 1) {
    cursor.classList.remove('blink');
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 120);
  } else {
    cursor.classList.add('blink');
    setTimeout(erase, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
})