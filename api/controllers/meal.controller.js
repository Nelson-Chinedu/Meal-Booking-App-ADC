import MealService from '../services/meal.service';
import dummyData from '../utils/dummyData';

const mealController = {
  // fetch all meals
  fetchAllMeal(req, res) {
    const meal = MealService.fetchAllMeals();
    // return status of 400 and message if meal are empty
    if (meal.length === 0) {
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
  addMeal(req, res) {
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
    const meal = MealService.addMeal(newMeal);
    return res.status(200).json({
      data: meal,
      message: 'success',
      error: false,
    });
  },
  // Get a meal by ID
  getMeal(req, res) {
    const { id } = req.params;
    const meal = MealService.getSingleMeal(id);
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
  // Update a meal by ID
  updateMeal(req, res) {
    const { id } = req.params;
    const mealId = dummyData.meals.find(meal => meal.id === Number(id));
    // return status of 400 with message if ID is not found
    if (!mealId) {
      return res.status(400).json({
        message: 'The meal with the ID is not found',
        error: true,
      });
    }
    // return status of 200 and message if newMeal and meal are true
    const newMeal = req.body;
    const meal = MealService.updateMeal(id, newMeal);
    return res.status(200).json({
      data: meal,
      message: 'success',
      error: false,
    });
  },
  // Delete a meal by ID
  deleteMeal(req, res) {
    const { id } = req.params;
    const mealId = dummyData.meals.find(meal => meal.id === Number(id));
    // return status of 400 with message if ID is not found
    if (!mealId) {
      return res.status(400).json({
        message: 'The meal with the ID is not found',
        error: true,
      });
    }
    // return status of 200 and message if meal is true
    const meal = MealService.deleteMeal(id);
    return res.status(200).json({
      data: meal,
      message: 'success',
      error: false,
    });
  },
};

export default mealController;
