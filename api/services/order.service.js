import Order from '../models/Order.model';
import orderDummyData from '../utils/orderDummyData';

const OrderService = {
  // Get all orders
  fetchAllOrders() {
    return orderDummyData.orders.map((order) => {
      const newOrder = new Order();
      newOrder.id = order.id;
      newOrder.name = order.name;
      newOrder.size = order.size;
      newOrder.price = order.price;
      newOrder.orderTimeStamp = new Date().toLocaleString();
      return newOrder;
    });
  },
  // Get order by ID
  getOrder(id) {
    const orderId = orderDummyData.orders.find(order => order.id === Number(id));
    return orderId;
  },
  // Post an order
  addOrder(order) {
    const getOrderLength = orderDummyData.orders.length;
    const lastId = orderDummyData.orders[getOrderLength - 1].id;
    const newId = lastId + 1;
    order.id = newId;
    orderDummyData.orders.push(order);
    return order;
  },
  // Update order by ID
  updateOrder(id, updateOrder) {
    const orderId = orderDummyData.orders.find(order => order.id === Number(id));
    updateOrder.id = orderId.id;
    orderDummyData.orders.splice(orderId.id - 1, 1, updateOrder);
    return updateOrder;
  },
};

export default OrderService;
