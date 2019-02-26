"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _order = _interopRequireDefault(require("../services/order.service"));

var _orderDummyData = _interopRequireDefault(require("../utils/orderDummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var orderController = {
  // fetch all order
  fetchAllOrders: function fetchAllOrders(req, res) {
    var order = _order.default.fetchAllOrders(); // return status of 400 and message if order are empty


    if (order.length === 0) {
      return res.status(400).json({
        message: 'No order found',
        error: true
      });
    } // return status of 200 and message if order is true


    return res.status(200).json({
      data: order,
      message: 'success',
      error: false
    });
  },
  // Get a order by ID
  getOrder: function getOrder(req, res) {
    var id = req.params.id;

    var order = _order.default.getOrder(id); // return status of 400 and message if order is false


    if (!order) {
      return res.status(400).json({
        message: 'The order with the ID is not found',
        error: true
      });
    } // return status of 200 and data if order is true


    return res.status(200).json({
      data: order,
      message: 'success',
      error: false
    });
  },
  // Post an order
  addOrder: function addOrder(req, res) {
    var newOrder = req.body; // return status of 400 and message if one or more
    // of newOrder object values are empty

    if (!newOrder.name || !newOrder.size || !newOrder.price) {
      return res.status(400).json({
        message: 'input values are required',
        error: true
      });
    } // return status of 200 and message if order is true


    var order = _order.default.addOrder(newOrder);

    return res.status(200).json({
      data: order,
      message: 'success',
      error: false
    });
  },
  // Update a meal by ID
  updateOrder: function updateOrder(req, res) {
    var id = req.params.id;

    var orderId = _orderDummyData.default.orders.find(function (order) {
      return order.id === Number(id);
    }); // return status of 400 with message if ID is not found


    if (!orderId) {
      return res.status(400).json({
        message: 'The order with the ID is not found',
        error: true
      });
    } // return status of 200 and message if newOrder and order are true


    var newOrder = req.body;

    var order = _order.default.updateOrder(id, newOrder);

    return res.status(200).json({
      data: order,
      message: 'success',
      error: false
    });
  }
};
var _default = orderController;
exports.default = _default;