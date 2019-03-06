import models from '../models';

const menuService = {
  addMenu(menu) {
    return models.Menus.create(menu).then(newMenu => newMenu);
  },
  getMenu() {
    return models.Menus.findAll()
      .then(menu => menu);
  },
  // getSingleMenu(id) {
  //   return models.Menus.findOne({
  //     where: {
  //       id,
  //     },
  //   })
  //     .then(menu => menu);
  // },
};

export default menuService;
