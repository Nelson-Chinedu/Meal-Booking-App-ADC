"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Menu = _interopRequireDefault(require("../models/Menu.model"));

var _menuDummyData = _interopRequireDefault(require("../utils/menuDummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menuService = {
  addMenu: function addMenu(menu) {
    var getMenuLength = _menuDummyData.default.menu.length;
    var lastId = _menuDummyData.default.menu[getMenuLength - 1].id;
    var newId = lastId + 1;
    menu.id = newId;
    menu.createdAt = new Date().toLocaleString();
    menu.updatedAt = new Date().toLocaleString();

    _menuDummyData.default.menu.push(menu);

    return menu;
  },
  getMenu: function getMenu() {
    return _menuDummyData.default.menu.map(function (menu) {
      var newMenu = new _Menu.default();
      newMenu.id = menu.id;
      newMenu.name = menu.name;
      newMenu.size = menu.size;
      newMenu.price = menu.price;
      newMenu.createdAt = new Date().toLocaleString();
      newMenu.updatedAt = new Date().toLocaleString();
      return newMenu;
    });
  },
  getSingleMenu: function getSingleMenu(id) {
    var menuId = _menuDummyData.default.menu.find(function (menu) {
      return menu.id === Number(id);
    });

    return menuId;
  }
};
var _default = menuService;
exports.default = _default;