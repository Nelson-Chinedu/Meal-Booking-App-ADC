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
};

export default menuController;
