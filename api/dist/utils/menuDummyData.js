"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 Hard coded data that replicates stored data
 in db
 */
var _default = {
  menu: [{
    id: 1,
    name: 'Fried Rice and Plantain',
    size: 'combo',
    price: '400',
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString()
  }, {
    id: 2,
    name: 'Jollof Rice',
    size: 'large',
    price: '2500',
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString()
  }, {
    id: 3,
    name: 'Spaghetti',
    size: 'medium',
    price: '1500',
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString()
  }, {
    id: 4,
    name: 'Beef with Fries',
    size: 'small',
    price: '1000',
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString()
  }]
};
exports.default = _default;