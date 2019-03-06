import menuService from '../services/menu.service';

const menuController = {
  // Add menu for the Day
  async addDayMenu(req, res) {
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
    const menu = await menuService.addMenu(newMenu);
    return res.status(200).json({
      data: menu,
      message: 'success',
      error: false,
    });
  },
  // Get all Menu set for the Day
  async getDayMenu(req, res) {
    const menu = await menuService.getMenu();
    if (menu.length === 0) {
      return res.status(400).json({
        message: 'No menu found',
        error: true,
      });
    }
    return res.status(200).json({
      data: menu,
      message: 'success',
      error: false,
    });
  },
};

export default menuController;
