const menus = document.getElementsByClassName('menu');
const menusArr = Array.from(menus);
menusArr.forEach((item) => {
  item.addEventListener('click', () => {
    const nextNode = item.nextSibling;
    const nextnextNode = nextNode.nextSibling;
    if (nextnextNode.className === 'menuItems') {
      nextnextNode.classList.remove('menuItems');
      nextnextNode.classList.add('visible');
    } else if (nextnextNode.className === 'visible') {
      nextnextNode.classList.remove('visible');
      nextnextNode.classList.add('menuItems');
    }
  });
});
