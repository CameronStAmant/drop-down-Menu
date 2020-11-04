const menus = document.getElementsByClassName('menu');
const menusArr = Array.from(menus);
console.log(menusArr);
menusArr.forEach((item) => {
  console.log(item);
  item.addEventListener('click', () => {
    console.log('hi');
  });
});
