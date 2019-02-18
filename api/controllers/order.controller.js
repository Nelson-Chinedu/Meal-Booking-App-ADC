import OrderService from '../services/order.service';
import orderDummyData from '../utils/orderDummyData';

const orderController = {
  // fetch all order
  fetchAllOrders(req, res) {
    const order = OrderService.fetchAllOrders();
    // return status of 400 and message if order are empty
    if (order.length === 0) {
      return res.status(400).json({
        message: 'No order found',
        error: true,
      });
    }
    // return status of 200 and message if order is true
    return res.status(200).json({
      data: order,
      message: 'success',
      error: false,
    });
  },
  // Get a order by ID
  getOrder(req, res) {
    const { id } = req.params;
    const order = OrderService.getOrder(id);
    // return status of 400 and message if order is false
    if (!order) {
      return res.status(400).json({
        message: 'The order with the ID is not found',
        error: true,
      });
    }
    // return status of 200 and data if order is true
    return res.status(200).json({
      data: order,
      message: 'success',
      error: false,
    });
  },
  // Post an order
  addOrder(req, res) {
    const newOrder = req.body;
    // return status of 400 and message if one or more
    // of newOrder object values are empty
    if (!newOrder.name || !newOrder.size || !newOrder.price) {
      return res.status(400).json({
        message: 'input values are required',
        error: true,
      });
    }
    // return status of 200 and message if order is true
    const order = OrderService.addOrder(newOrder);
    return res.status(200).json({
      data: order,
      message: 'success',
      error: false,
    });
  },
  // Update a meal by ID
  updateOrder(req, res) {
    const { id } = req.params;
    const orderId = orderDummyData.orders.find(order => order.id === Number(id));
    // return status of 400 with message if ID is not found
    if (!orderId) {
      return res.status(400).json({
        message: 'The order with the ID is not found',
        error: true,
      });
    }
    // return status of 200 and message if newOrder and order are true
    const newOrder = req.body;
    const order = OrderService.updateOrder(id, newOrder);
    return res.status(200).json({
      data: order,
      message: 'success',
      error: false,
    });
  },
};

export default orderController;
