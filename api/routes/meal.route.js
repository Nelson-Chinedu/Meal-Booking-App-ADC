import { Router } from 'express';
import mealController from '../controllers/meal.controller';

const router = Router();
router.get('/', mealController.fetchAllMeal);
router.post('/', mealController.addMeal);
router.delete('/:id', mealController.deleteMeal);

export default router;
