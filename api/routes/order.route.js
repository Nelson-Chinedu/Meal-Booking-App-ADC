import { Router } from 'express';
import orderController from '../controllers/order.controller';

const router = Router();
router.get('/', orderController.fetchAllOrders);
router.get('/:id', orderController.getOrder);
router.post('/', orderController.addOrder);
router.put('/:id', orderController.updateOrder);

// export default router;
