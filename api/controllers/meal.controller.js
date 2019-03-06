import MealService from '../services/meal.service';

const mealController = {
  // fetch all meals
  async fetchAllMeal(req, res) {
    const meal = await MealService.fetchAllMeals();
    // return status of 400 and message if meal are empty
    if (meal.length === 0) {
      return res.status(400).json({
        message: 'No meals found',
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
  // Delete a meal
  async deleteMeal(req, res) {
    const { id } = req.params;
    const meal = await MealService.deleteMeal(id);
    // return status of 400 and message if meal
    // equal zero
    if (meal === 0) {
      return res.status(400).json({
        message: 'the meal with the id is not found',
        error: true,
      });
    }
    return res.status(200).json({
      data: meal,
      message: 'successfully deleted',
      error: false,
    });
  },
};

export default mealController;
