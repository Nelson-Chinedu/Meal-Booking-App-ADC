import Menu from '../models/Menu.model';
import menuDummyData from '../utils/menuDummyData';

const menuService = {
  addMenu(menu) {
    const getMenuLength = menuDummyData.menu.length;
    const lastId = menuDummyData.menu[getMenuLength - 1].id;
    const newId = lastId + 1;
    menu.id = newId;
    menu.createdAt = new Date().toLocaleString();
    menu.updatedAt = new Date().toLocaleString();
    menuDummyData.menu.push(menu);
    return menu;
  },
  getMenu() {
    return menuDummyData.menu.map((menu) => {
      const newMenu = new Menu();
      newMenu.id = menu.id;
      newMenu.name = menu.name;
      newMenu.size = menu.size;
      newMenu.price = menu.price;
      newMenu.createdAt = new Date().toLocaleString();
      newMenu.updatedAt = new Date().toLocaleString();
      return newMenu;
    });
  },
  getSingleMenu(id) {
    const menuId = menuDummyData.menu.find(menu => menu.id === Number(id));
    return menuId;
  },
};

export default menuService;
