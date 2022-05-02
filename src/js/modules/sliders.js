export const sliders = ({ slides, dir, prev, next }) => {
  let slideIndex = 1,
    paused = false;
  const listSlides = document.querySelectorAll(slides);

  const showSlides = (n) => {
    if (n > listSlides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = listSlides.length;
    }

    listSlides.forEach((listSlide) => {
      listSlide.classList.add('animated');
      listSlide.style.display = 'none';
    });

    listSlides[slideIndex - 1].style.display = 'block';
  };

  showSlides(slideIndex);

  const plusSlides = (n) => {
    showSlides((slideIndex += n));
  };

  try {
    const prevBtn = document.querySelector(prev),
      nextBtn = document.querySelector(next);

    prevBtn.addEventListener('click', () => {
      plusSlides(-1);
      listSlides[slideIndex - 1].classList.remove('slideInLeft');
      listSlides[slideIndex - 1].classList.add('slideInRight');
    });

    nextBtn.addEventListener('click', () => {
      plusSlides(1);
      listSlides[slideIndex - 1].classList.remove('slideInRight');
      listSlides[slideIndex - 1].classList.add('slideInLeft');
    });
  } catch (e) {}

  const activateAnimation = () => {
    if (dir === 'vertical') {
      paused = setInterval(function () {
        plusSlides(1);
        listSlides[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
    } else {
      paused = setInterval(function () {
        plusSlides(1);
        listSlides[slideIndex - 1].classList.remove('slideInRight');
        listSlides[slideIndex - 1].classList.add('slideInLeft');
      }, 3000);
    }
  };
  activateAnimation();

  listSlides[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  listSlides[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};
