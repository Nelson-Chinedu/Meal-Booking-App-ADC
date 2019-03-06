import models from '../models';

const OrderService = {
  // Get all orders
  fetchAllOrders() {
    return models.Orders.findAll()
      .then(order => order);
  },
  // Get order by ID
  // getOrder(id) {
  //   return models.Orders.findOne({
  //     where: {
  //       id,
  //     },
  //   })
  //     .then(order => order);
  // },
  // Post an order
  addOrder(order) {
    return models.Orders.create(order).then(newOrder => newOrder);    
  },
  // Update order by ID
  // updateOrder(id, updateOrder) {
  //   const orderId = orderDummyData.orders.find(order => order.id === Number(id));
  //   updateOrder.id = orderId.id;
  //   orderDummyData.orders.splice(orderId.id - 1, 1, updateOrder);
  //   return updateOrder;
  // },
};

export default OrderService;
