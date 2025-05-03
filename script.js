document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('openMobileMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const closeBtn = document.getElementById('closeMobileMenu');
  const submenu = document.getElementById('submenuFullscreen');
  const submenuList = document.getElementById('submenuList');
  const closeSubmenuBtn = document.getElementById('closeSubmenu');
  const closeSubmenuPid = document.getElementById('closeMobileMenuPid');

  const subsubmenu = document.getElementById('subsubmenuFullscreen');
  const subsubmenuList = document.getElementById('subsubmenuList');
  const closeSubsubmenuBtn = document.getElementById('closeSubsubmenu');

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

  // Дані для під-підменю
  const subsubmenuItems = {
    more: ['Детальніше про 1', 'Детальніше про 2']
  };

  // Відкрити мобільне меню
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
        submenuList.innerHTML = items
          .map(
            (item, index) => `
              <li class="submenu-item" ${index === 0 ? 'data-subsubmenu="more"' : ''}>
                ${item}
                <svg class="menu-icon" width="10" height="7">
                  <use href="./images/icons.svg#icon-Vector-1"></use>
                </svg>
              </li>`
          )
          .join('');

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
  });

  // ⬇️ ВІДКРИТТЯ ПІД-ПІДМЕНЮ
  submenuList.addEventListener('click', e => {
    const submenuItem = e.target.closest('.submenu-item[data-subsubmenu]');
    if (submenuItem) {
      const key = submenuItem.getAttribute('data-subsubmenu');
      const items = subsubmenuItems[key];

      if (items) {
        subsubmenuList.innerHTML = items
          .map(item => `<li class="subsubmenu-item">${item}</li>`)
          .join('');

        submenu.classList.remove('open');
        subsubmenu.classList.add('open');
      }
    }
  });

  // Закриття під-підменю
  closeSubsubmenuBtn?.addEventListener('click', () => {
    subsubmenu.classList.remove('open');
    submenu.classList.add('open');
  });
});
