document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('openMobileMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const closeBtn = document.getElementById('closeMobileMenu'); // Кнопка закриття мобільного меню
  const submenu = document.getElementById('submenuFullscreen');
  const submenuList = document.getElementById('submenuList');
  const closeSubmenuBtn = document.getElementById('closeSubmenu');
  const closeSubmenuPid = document.getElementById('closeMobileMenuPid'); // Кнопка закриття підменю
  const subsubmenuFullscreen = document.getElementById('subsubmenuFullscreen');
  const subsubmenuList = document.getElementById('subsubmenuList');
  const closeSubsubmenuBtn = document.getElementById('closeSubsubmenu'); // Кнопка закриття під-підменю

  // Дані для кожного підменю
  const submenuItems = {
    onas: [
      'Гостиничный бизнес',
      'Производство и логистика',
      'Кейтеринг и мероприятия',
      'Офисная работа',
      'Клининговые услуги',
      'Новый пункт 1',
      'Новый пункт 2',
      'Новый пункт 3',
      'Новый пункт 4',
      'Новый пункт 5',
      'Новый пункт 6',
      'Новый пункт 7',
      'Новый пункт 8',
      'Новый пункт 9',
      'Новый пункт 10'
    ],
    forwork: [
      'Модели сотрудничества',
      'Этапы сотрудничества',
      'Почему стоит работать с нами',
      'Как работодателю связаться с нами',
      'Галузи в которых мы работаем',
      'Новый пункт 11',
      'Новый пункт 12',
      'Новый пункт 13',
      'Новый пункт 14',
      'Новый пункт 15'
    ],
    forworking: [
      'Работа',
      'Обучение и карьерный рост',
      'Легализация',
      'Помощь в создании резюме',
      'Новый пункт 16',
      'Новый пункт 17',
      'Новый пункт 18',
      'Новый пункт 19',
      'Новый пункт 20'
    ],
    contact: ['Для работодателя', 'Для работника'],
    objeck: ['Для работодателя', 'Для работника'],
    objeck2: ['Пожаловаться на что-то']
  };

  // Дані для під-підменю (для "Модели сотрудничества")
  const subsubmenuItems = {
    'Модели сотрудничества': [
      'Лизинг персонала',
      'Аутсорсинг персонала',
      'Рекрутинг персонала',
      'Основные и дополнительные услуги',
      'Новый пункт 21',
      'Новый пункт 22',
      'Новый пункт 23',
      'Новый пункт 24'
    ]
  };

  // Відкрити мобільне меню
  burgerBtn?.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    mobileMenuOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  // Закрити мобільне меню
  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileMenuOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  // Закрити мобільне меню через кнопку з id="closeMobileMenu"
  closeBtn?.addEventListener('click', closeMobileMenu);
  mobileMenuOverlay?.addEventListener('click', closeMobileMenu); // Закриття через overlay

  // Обробка кліку на пункт меню з підменю
  const menuLinks = document.querySelectorAll('.mobile-menu-link[data-submenu]');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      const key = link.getAttribute('data-submenu');
      const items = submenuItems[key];

      if (items) {
        // Очищаємо попередні пункти підменю
        submenuList.innerHTML = '';

        // Додаємо нові пункти підменю
        items.forEach(item => {
          const submenuItem = document.createElement('li');
          submenuItem.classList.add('submenu-item');
          submenuItem.textContent = item;

          // Якщо для цього пункту є під-підменю, додаємо стрілку
          if (subsubmenuItems[item]) {
            const icon = document.createElement('svg');
            icon.classList.add('menu-icon');
            icon.setAttribute('width', '10');
            icon.setAttribute('height', '7');
            icon.innerHTML = '<use href="./images/icons.svg#icon-Vector-1"></use>';
            submenuItem.appendChild(icon);

            submenuItem.addEventListener('click', () => {
              // Очищаємо попередні пункти під-підменю
              subsubmenuList.innerHTML = '';

              // Додаємо пункти під-підменю
              subsubmenuItems[item].forEach(subItem => {
                const subsubmenuItem = document.createElement('li');
                subsubmenuItem.classList.add('subsubmenu-item');
                subsubmenuItem.textContent = subItem;
                subsubmenuList.appendChild(subsubmenuItem);
              });

              // Показуємо під-підменю
              submenu.classList.remove('open');
              subsubmenuFullscreen.classList.add('open');
            });
          }

          submenuList.appendChild(submenuItem);
        });

        // Показати підменю
        mobileMenu.classList.remove('open');
        submenu.classList.add('open');
      }
    });
  });

  // Закрити підменю
  closeSubmenuBtn?.addEventListener('click', () => {
    submenu.classList.remove('open');
    mobileMenu.classList.add('open'); // Повернення на мобільне меню
  });

  // Закрити підменю через кнопку з id="closeMobileMenuPid" і закрити мобільне меню
  closeSubmenuPid?.addEventListener('click', () => {
    submenu.classList.remove('open');
    mobileMenu.classList.remove('open');
    mobileMenuOverlay.style.display = 'none'; // Приховуємо overlay
  });

  // Закрити під-підменю
  closeSubsubmenuBtn?.addEventListener('click', () => {
    subsubmenuFullscreen.classList.remove('open');
    submenu.classList.add('open');
  });

  // Обробка кліку на пункт підменю з під-підменю
  document.querySelectorAll('.submenu-item[data-subsubmenu]').forEach(item => {
    item.addEventListener('click', () => {
      document.getElementById('submenuFullscreen').style.display = 'none';
      document.getElementById('subsubmenuFullscreen').style.display = 'block';
    });
  });

  // Закриття під-підменю
  document.getElementById('closeSubsubmenu')?.addEventListener('click', () => {
    document.getElementById('subsubmenuFullscreen').style.display = 'none';
    document.getElementById('submenuFullscreen').style.display = 'block';
  });
});
