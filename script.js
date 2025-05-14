document.addEventListener('DOMContentLoaded', () => {
  // Дані для підменю
  const submenuItems = {
    onas: [
      'Гостиничный бизнес',
      'Производство и логистика',
      'Кейтеринг и мероприятия',
      'Офисная работа',
      'Клининговые услуги'
    ],
    forwork: [
      'Модели сотрудничества',
      'Этапы сотрудничества',
      'Почему стоит работать с нами',
      'Как работодателю связаться с нами',
      'Галузи в которых мы работаем'
    ],
    forworking: [
      'Работа',
      'Обучение и карьерный рост',
      'Легализация',
      'Помощь в создании резюме'
    ],
    contact: ['Для работодателя', 'Для работника'],
    objeck: ['Для работодателя', 'Для работника'],
    objeck2: ['Пожаловаться на что-то']
  };

  // Дані для під-підменю
  const subsubmenuItems = {
    'Работа': [
      'Гостинничный бизнес',
      'Повар',
      'Помощник повара',
      'Кухонный работник',
      'Бармен',
      'Официант',
      'Работник ресепшена',
      'Клининг-специалист',
      'Производство и логистика',
      'Оператор погрузчика',
      'Парковщик',
      'Оператор упаковки',
      'Клининг-специалсит',
      'Работник производства',
      'Кейтеринг и мероприятия',
      'Повар',
      'Помощник повара',
      'Кухонный работник',
      'Офисная работа',
      'Офисная работа',
      'Работа в клининге',
      'Работа в клининге',
      'Дополнительная работа'
    ],
    'Модели сотрудничества': [
      'Лизинг персонала',
      'Аутсорсинг персонала',
      'Рекрутинг персонала',
      'Основные и дополнительные услуги'
    ]
  };

  // ===== Мобільне меню ===== //
  const burgerBtn = document.getElementById('openMobileMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const closeBtn = document.getElementById('closeMobileMenu');
  const submenu = document.getElementById('submenuFullscreen');
  const submenuList = document.getElementById('submenuList');
  const closeSubmenuBtn = document.getElementById('closeSubmenu');
  const closeSubmenuPid = document.getElementById('closeMobileMenuPid');
  const subsubmenuFullscreen = document.getElementById('subsubmenuFullscreen');
  const subsubmenuList = document.getElementById('subsubmenuList');
  const closeSubsubmenuBtn = document.getElementById('closeSubsubmenu');

  burgerBtn?.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    mobileMenuOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileMenuOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  closeBtn?.addEventListener('click', closeMobileMenu);
  mobileMenuOverlay?.addEventListener('click', closeMobileMenu);

  const menuLinks = document.querySelectorAll('.mobile-menu-link[data-submenu]');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      const key = link.getAttribute('data-submenu');
      const items = submenuItems[key];

      if (items) {
        submenuList.innerHTML = '';

        items.forEach(item => {
          const submenuItem = document.createElement('li');
          submenuItem.classList.add('submenu-item');

          const textSpan = document.createElement('span');
          textSpan.textContent = item;
          submenuItem.appendChild(textSpan);

          const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          svg.setAttribute("class", "menu-icon");
          svg.setAttribute("width", "10");
          svg.setAttribute("height", "7");

          const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
          use.setAttribute("href", "./images/icons.svg#icon-Vector-1");
          svg.appendChild(use);
          submenuItem.appendChild(svg);

          if (subsubmenuItems[item]) {
            submenuItem.addEventListener('click', (e) => {
              e.stopPropagation();
              subsubmenuList.innerHTML = '';

              subsubmenuItems[item].forEach(subItem => {
                const subsubmenuItem = document.createElement('li');
                subsubmenuItem.classList.add('subsubmenu-item');

                const subText = document.createElement('span');
                subText.textContent = subItem;
                subsubmenuItem.appendChild(subText);

                const svgSub = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svgSub.setAttribute("class", "menu-icon");
                svgSub.setAttribute("width", "10");
                svgSub.setAttribute("height", "7");

                const useSub = document.createElementNS("http://www.w3.org/2000/svg", "use");
                useSub.setAttribute("href", "./images/icons.svg#icon-Vector-1");
                svgSub.appendChild(useSub);
                subsubmenuItem.appendChild(svgSub);

                subsubmenuList.appendChild(subsubmenuItem);
              });

              submenu.classList.remove('open');
              subsubmenuFullscreen.classList.add('open');
            });
          }

          submenuList.appendChild(submenuItem);
        });

        mobileMenu.classList.remove('open');
        submenu.classList.add('open');
      }
    });
  });

  closeSubmenuBtn?.addEventListener('click', () => {
    submenu.classList.remove('open');
    mobileMenu.classList.add('open');
  });

  closeSubmenuPid?.addEventListener('click', () => {
    submenu.classList.remove('open');
    mobileMenu.classList.remove('open');
    mobileMenuOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  closeSubsubmenuBtn?.addEventListener('click', () => {
    subsubmenuFullscreen.classList.remove('open');
    submenu.classList.add('open');
  });

  // Закриття підменю при кліку на порожнє місце
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
      closeMobileMenu();
    }
    if (!submenu.contains(e.target) && !submenuList.contains(e.target) && !submenu.querySelector('.submenu-item').contains(e.target)) {
      submenu.classList.remove('open');
    }
    if (!subsubmenuFullscreen.contains(e.target) && !subsubmenuList.contains(e.target)) {
      subsubmenuFullscreen.classList.remove('open');
    }
  });

  // ===== Перемикач мов ===== //
  const toggle = document.getElementById('languageToggleDector');
  const list = document.getElementById('languageListDector');

  if (toggle && list) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = list.style.display === 'block';
      list.style.display = isOpen ? 'none' : 'block';
    });

    document.addEventListener('click', () => {
      list.style.display = 'none';
    });

    const langItems = list.querySelectorAll('li');
    langItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = item.getAttribute('data-lang');
        toggle.childNodes[0].textContent = selectedLang.toUpperCase();
        list.style.display = 'none';
        console.log('Обрана мова:', selectedLang);
      });
    });
  }

  // ===== Десктопне меню (повноекранне підменю зліва) ===== //
  const desktopMenuLinks = document.querySelectorAll('.menu-link[data-submenu]');
  const desktopSubmenuFullscreen = document.getElementById('desktopSubmenuFullscreen');
  const desktopSubmenuList = document.getElementById('desktopSubmenuList');
  const closeDesktopSubmenu = document.getElementById('closeDesktopSubmenu');

  desktopMenuLinks.forEach(link => {
    const key = link.getAttribute('data-submenu');
    const items = submenuItems[key];

    if (!items) return;

    link.addEventListener('mouseenter', () => {
      desktopSubmenuList.innerHTML = '';

      items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        desktopSubmenuList.appendChild(li);
      });

      desktopSubmenuFullscreen.classList.add('open');
    });

    // При виході з зони меню можна закривати — за бажанням
    link.addEventListener('mouseleave', () => {
      // desktopSubmenuFullscreen.classList.remove('open');
    });
  });

  closeDesktopSubmenu?.addEventListener('click', () => {
    desktopSubmenuFullscreen.classList.remove('open');
  });
});
