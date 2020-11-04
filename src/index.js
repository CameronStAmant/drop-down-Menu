const menus = document.getElementsByClassName('menu');
const menusArr = Array.from(menus);
menusArr.forEach((item) => {
  item.addEventListener('click', () => {
    const childNodes = Array.from(item.childNodes);
    childNodes.forEach((menuItems) => {
      if (menuItems.className === 'menuItems') {
        menuItems.classList.remove('menuItems');
        menuItems.classList.add('visible');
      } else if (menuItems.className === 'visible') {
        menuItems.classList.remove('visible');
        menuItems.classList.add('menuItems');
      }
    });
  });
});
