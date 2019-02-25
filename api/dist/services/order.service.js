"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Order = _interopRequireDefault(require("../models/Order.model"));

var _orderDummyData = _interopRequireDefault(require("../utils/orderDummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderService = {
  // Get all orders
  fetchAllOrders: function fetchAllOrders() {
    return _orderDummyData.default.orders.map(function (order) {
      var newOrder = new _Order.default();
      newOrder.id = order.id;
      newOrder.name = order.name;
      newOrder.size = order.size;
      newOrder.price = order.price;
      newOrder.orderTimeStamp = new Date().toLocaleString();
      return newOrder;
    });
  },
  // Get order by ID
  getOrder: function getOrder(id) {
    var orderId = _orderDummyData.default.orders.find(function (order) {
      return order.id === Number(id);
    });

    return orderId;
  },
  // Post an order
  addOrder: function addOrder(order) {
    var getOrderLength = _orderDummyData.default.orders.length;
    var lastId = _orderDummyData.default.orders[getOrderLength - 1].id;
    var newId = lastId + 1;
    order.id = newId;

    _orderDummyData.default.orders.push(order);

    return order;
  },
  // Update order by ID
  updateOrder: function updateOrder(id, _updateOrder) {
    var orderId = _orderDummyData.default.orders.find(function (order) {
      return order.id === Number(id);
    });

    _updateOrder.id = orderId.id;

    _orderDummyData.default.orders.splice(orderId.id - 1, 1, _updateOrder);

    return _updateOrder;
  }
};
var _default = OrderService;
exports.default = _default;