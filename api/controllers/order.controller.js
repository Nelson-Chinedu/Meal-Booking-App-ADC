import OrderService from '../services/order.service';
// import orderDummyData from '../utils/orderDummyData';

const orderController = {
  // fetch all order
  async fetchAllOrders(req, res) {
    const order = await OrderService.fetchAllOrders();
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
  // Post an order
  async addOrder(req, res) {
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
    const order = await OrderService.addOrder(newOrder);
    return res.status(200).json({
      data: order,
      message: 'success',
      error: false,
    });
  },
};

export default orderController;
