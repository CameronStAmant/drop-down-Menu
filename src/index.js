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
      const visibleMenus = document.getElementsByClassName('visible');
      console.log(visibleMenus);
      const visibleMenusArr = Array.from(visibleMenus);
      visibleMenusArr.forEach((menu2) => {
        if (menu2.id === 'menu2' && menu2.className === 'visible') {
          menu2.classList.remove('visible');
          const copyId = menu2.id;
          const splitId = copyId.substring(0, copyId.length - 1);
          menu2.classList.add(splitId);
        } else {
          console.log(`This is the menu2 item: ${menu2}`);
          const close = menu2.closest('#menu2');
          console.log(`This is close: ${close}`);
          const copyId = document.getElementById(menu2);
          console.log(`button id ${copyId}`);
          menu2.classList.remove('visible');
          console.log(copyid);
          menu2.classList.add(copyId);
          console.log('hi belower');
        }
      });
      // menu.classList.remove('visible');
      // menu.classList.add('menu');

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
          // console.log(closeOpenMenus);
          const closeOpenMenusArr = Array.from(closeOpenMenus);
          // console.log(closeOpenMenusArr[0]);
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
