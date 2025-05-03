document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('openMobileMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const closeBtn = document.getElementById('closeMobileMenu'); // Кнопка закриття мобільного меню
  const submenu = document.getElementById('submenuFullscreen');
  const submenuList = document.getElementById('submenuList');
  const closeSubmenuBtn = document.getElementById('closeSubmenu');
  const closeSubmenuPid = document.getElementById('closeMobileMenuPid'); // Кнопка закриття підменю

  // Дані для кожного підменю
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
        submenuList.innerHTML = items
          .map(
            item => `
              <li class="submenu-item">
                ${item}
                <svg class="menu-icon" width="10" height="7">
                  <use href="./images/icons.svg#icon-Vector-1"></use>
                </svg>
              </li>`
          )
          .join('');

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
});
