const dropDownMenu = document.getElementsByClassName('menu');
const dropDownMenuFunction = function menu() {
  const menuList = Array.from(dropDownMenu);
  menuList.forEach((menu) => {
    menu.addEventListener('click', () => {
      const id = menu.id;
      let change = false;
      if (menu.className === 'visible') {
        menu.classList.remove(menu.className);
        menu.classList.add(`${id.substring(0, id.length - 1)}`);
        change = true;
      }
      const menuItems = change
        ? document.getElementsByClassName('visible')
        : document.getElementsByClassName(`${id}`);
      const menuItemsArray = change
        ? Array.from(menuItems)
        : Array.from(menuItems);
      const menuButtonClass = menu.className;
      menuItemsArray.forEach((item) => {
        if (change === false) {
          //minimize all open menus
          const closeOpenMenus = document.getElementsByClassName('visible');
          console.log(closeOpenMenus);
          const closeOpenMenusArr = Array.from(closeOpenMenus);
          console.log(closeOpenMenusArr[0]);
          // closeOpenMenusArr.forEach((closeItem) => {
          //   if (closeItem.id !== null) {
          //     closeItem.classList.remove('visible');
          //     closeItem.className = closeItem.id;
          //   }
          // });
          // console.log(closeOpenMenusArr[0]);

          document.getElementById(id).classList.remove(menuButtonClass);
          document.getElementById(id).classList.add('visible');
          item.classList.remove(id);
          item.classList.add('visible');
        } else {
          item.classList.remove('visible');
          item.classList.add(id);
        }
      });
    });
  });
};

dropDownMenuFunction();
