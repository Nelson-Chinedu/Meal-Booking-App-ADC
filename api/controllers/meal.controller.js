import MealService from '../services/meal.service';
import models from '../models';

const mealController = {
  // fetch all meals
  async fetchAllMeal(req, res) {
    const meal = await MealService.fetchAllMeals();
    
    // return status of 400 and message if meal are empty
    if (!meal) {
      return res.status(400).json({
        message: 'Meal not found',
        error: true,
      });
    }
    // return status of 200 and message if meal is true
    return res.status(200).json({
      data: meal,
      message: 'success',
      error: false,
    });
  },
  // Post a meal
  async addMeal(req, res) {
    const newMeal = req.body;
    // return status of 400 and message if one or more
    // of newMeal object values are empty
    if (!newMeal.name) {
      return res.status(400).json({
        message: 'input values are required',
        error: true,
      });
    }
    // return status of 200 and message if meal is true
    const meal = await MealService.addMeal(newMeal);
    return res.status(200).json({
      data: meal,
      message: 'success',
      error: false,
    });
  },
  // Get a meal by ID
  async getMeal(req, res) {
    const { id } = req.params;
    const meal = await MealService.getSingleMeal(id);
    // return status of 400 and message if meal is false
    if (!meal) {
      return res.status(400).json({
        message: 'The meal with the ID is not found',
        error: true,
      });
    }
    // return status of 200 and data if meal is true
    return res.status(200).json({
      data: meal,
      message: 'success',
      error: false,
    });
  },
};

export default mealController;
