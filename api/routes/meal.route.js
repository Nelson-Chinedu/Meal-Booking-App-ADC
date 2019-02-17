import express from 'express';
import mealController from '../controllers/meal.controller';

const router = express.Router();
router.get('/', mealController.fetchAllMeal);
router.get('/:id', mealController.getMeal);
router.post('/', mealController.addMeal);
router.put('/:id', mealController.updateMeal);
router.delete('/:id', mealController.deleteMeal);

export default router;
