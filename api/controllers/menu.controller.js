import menuService from '../services/menu.service';

const menuController = {
  // Add menu for the Day
  addDayMenu(req, res) {
    const newMenu = req.body;
    // return status of 400 and message if one or more
    // of newMenu object is/are empty
    if (!newMenu.name || !newMenu.size || !newMenu.price) {
      return res.status(400).json({
        message: 'input values are required',
        error: true,
      });
    }
    // return status of 200 if menu is true
    const menu = menuService.addMenu(newMenu);
    return res.status(200).json({
      data: menu,
      message: 'success',
      error: false,
    });
  },
  // Get all Menu set for the Day
  getDayMenu(req, res) {
    const menu = menuService.getMenu();
    return res.status(200).json({
      data: menu,
      message: 'success',
      error: false,
    });
  },
  getSingleMenu(req, res) {
    const { id } = req.params;
    const menu = menuService.getSingleMenu(id);
    // return status of 400 and message if menu is false
    if (!menu) {
      return res.status(400).json({
        message: 'The menu with the ID is not found',
        error: true,
      });
    }
    // return status of 200 and data if meal is true
    return res.status(200).json({
      data: menu,
      message: 'success',
      error: false,
    });
  },
};

export default menuController;
