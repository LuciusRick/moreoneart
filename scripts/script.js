function mudouTamanho(){
    if (window.innerWidth >= 768){
        itensid.style.display = 'block'
    } else {
        itensid.style.display = 'none'
    }
}

function clickMenu() {
    if (itensid.style.display == 'none'){
        itensid.style.display = 'block'
    } else {
        itensid.style.display = 'none'
    }
    
}

    
const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.right');
    const prevButton = document.querySelector('.carousel-button.left');
    const slideWidth = slides[0].getBoundingClientRect().width;

    let currentIndex = 0;

    function moveToSlide(index) {
      track.style.transform = `translateX(-${index * slideWidth}px)`;
      currentIndex = index;
    }

    nextButton.addEventListener('click', () => {
      if (currentIndex < slides.length - 1) {
        moveToSlide(currentIndex + 1);
      }
    });

    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        moveToSlide(currentIndex - 1);
      }
    });

    