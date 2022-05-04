export const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
    btns = menu.querySelectorAll('button'),
    btnsAll = menu.querySelector('.all'),
    btnLover = menu.querySelector('.lovers'),
    btnChef = menu.querySelector('.chef'),
    btnGirl = menu.querySelector('.girl'),
    btnGuy = menu.querySelector('.guy'),
    btnGrandmother = menu.querySelector('.grandmother'),
    btnGranddad = menu.querySelector('.granddad'),
    wrapper = document.querySelector('.portfolio-wrapper'),
    marksAll = wrapper.querySelectorAll('.all'),
    markGirls = wrapper.querySelectorAll('.girl'),
    markLovers = wrapper.querySelectorAll('.lovers'),
    markChefs = wrapper.querySelectorAll('.chef'),
    markGuys = wrapper.querySelectorAll('.guy'),
    no = document.querySelector('.portfolio-no');

  const hideBlock = (mark) => {
    mark.style.display = 'none';
    mark.classList.remove('animated', 'fadeIn');
  };
  const typeFilter = (marksType) => {
    marksAll.forEach((mark) => {
      hideBlock(mark);
    });
    hideBlock(no);

    const showBlock = (mark) => {
      mark.style.display = 'block';
      mark.classList.add('animated', 'fadeIn');
    };
    if (marksType) {
      marksType.forEach((markType) => {
        showBlock(markType);
      });
    } else {
      showBlock(no);
    }
  };

  const portfolioMenu = (btn, mark) => {
    btn.addEventListener('click', () => {
      typeFilter(mark);
    });
  };

  portfolioMenu(btnsAll, marksAll);
  portfolioMenu(btnLover, markLovers);
  portfolioMenu(btnChef, markChefs);
  portfolioMenu(btnGuy, markGuys);
  portfolioMenu(btnGirl, markGirls);
  portfolioMenu(btnGrandmother, '');
  portfolioMenu(btnGranddad, '');

  menu.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.tagName == 'BUTTON') {
      btns.forEach((btn) => btn.classList.remove('active'));
      target.classList.add('active');
    }
  });
};
