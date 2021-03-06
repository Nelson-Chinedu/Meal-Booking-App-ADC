import { Router } from 'express';
import menuController from '../controllers/menu.controller';

const router = Router();

router.get('/', menuController.getDayMenu);
router.get('/:id', menuController.getSingleMenu);
router.post('/', menuController.addDayMenu);

export default router;
