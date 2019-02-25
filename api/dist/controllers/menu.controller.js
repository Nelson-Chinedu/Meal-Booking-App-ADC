"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menu = _interopRequireDefault(require("../services/menu.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menuController = {
  // Add menu for the Day
  addDayMenu: function addDayMenu(req, res) {
    var newMenu = req.body; // return status of 400 and message if one or more
    // of newMenu object is/are empty

    if (!newMenu.name || !newMenu.size || !newMenu.price) {
      return res.status(400).json({
        message: 'input values are required',
        error: true
      });
    } // return status of 200 if menu is true


    var menu = _menu.default.addMenu(newMenu);

    return res.status(200).json({
      data: menu,
      message: 'success',
      error: false
    });
  },
  // Get all Menu set for the Day
  getDayMenu: function getDayMenu(req, res) {
    var menu = _menu.default.getMenu();

    return res.status(200).json({
      data: menu,
      message: 'success',
      error: false
    });
  },
  getSingleMenu: function getSingleMenu(req, res) {
    var id = req.params.id;

    var menu = _menu.default.getSingleMenu(id); // return status of 400 and message if menu is false


    if (!menu) {
      return res.status(400).json({
        message: 'The menu with the ID is not found',
        error: true
      });
    } // return status of 200 and data if meal is true


    return res.status(200).json({
      data: menu,
      message: 'success',
      error: false
    });
  }
};
var _default = menuController;
exports.default = _default;