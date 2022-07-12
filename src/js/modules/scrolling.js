export const scrolling = (upSelector) => {
  const upElement = document.querySelector(upSelector);

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      upElement.classList.add('animated', 'fadeIn');
      upElement.classList.remove('fadeOut');
    } else {
      upElement.classList.add('fadeOut');
      upElement.classList.remove('fadeIn');
    }
  });

  // Scrolling with raf
  const links = document.querySelectorAll('[href^="#"]'),
    speed = 0.1;

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const widthTop = document.documentElement.scrollTop,
        hash = link.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top;
      let start = null;

      const step = (time) => {
        if (start === null) {
          start = time;
        }

        const progress = time - start,
          r =
            toBlock < 0
              ? Math.max(widthTop - progress / speed, widthTop + toBlock)
              : Math.min(widthTop + progress / speed, widthTop + toBlock);

        document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      };

      requestAnimationFrame(step);
    });
  });

  // Pure js scrolling
  /*   const element = document.documentElement,
    body = document.body;

  const calcScroll = () => {
    upElement.addEventListener('click', (event) => {
      const scrollTop = Math.round(body.scrollTop || element.scrollTop);

      if (upElement.hash != '') {
        event.preventDefault();
        let hashElement = document.querySelector(upElement.hash),
          hashElementTop = 0;

        while (hashElement.offsetParent) {
          hashElementTop += hashElement.offsetTop;
          hashElement = hashElement.offsetParent;
        }

        hashElementTop = Math.round(hashElementTop);
        smoothScroll(scrollTop, hashElementTop, upElement.hash);
      }
    });
  };

  const smoothScroll = (from, to, hash) => {
    const timeInterval = 1;
    let prevScrollTop;
    let speed;

    if (to > from) {
      speed = 30;
    } else {
      speed = -30;
    }

    const move = setInterval(() => {
      const scrollTop = Math.round(body.scrollTop || element.scrollTop);

      if (
        prevScrollTop === scrollTop ||
        (to > from && scrollTop >= to) ||
        (to < from && scrollTop <= to)
      ) {
        clearInterval(move);
        history.replaceState(
          history.state,
          document.title,
          location.href.replace(/#.*$/g, '') + hash,
        );
      } else {
        body.scrollTop += speed;
        element.scrollTop += speed;
        prevScrollTop = scrollTop;
      }
    }, timeInterval);
  };

  calcScroll(); */
};
