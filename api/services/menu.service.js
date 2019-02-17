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
      newMenu.createdAt = menu.createdAt;
      newMenu.updatedAt = menu.updatedAt;
      return newMenu;
    });
  },
};

export default menuService;
