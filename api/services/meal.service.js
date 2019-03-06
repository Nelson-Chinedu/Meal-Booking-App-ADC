import models from '../models';

const MealService = {
  // Get all meals
  fetchAllMeals() {
    return models.Meal.findAll()
      .then(meal => meal);
  },
  // Post a meal
  addMeal(meal) {
    return models.Meal.create(meal).then(newMeal => newMeal);
  },
  // Get meal by ID
  getSingleMeal(id) {
    return models.Meal.findOne({
      where: {
        id,
      },
    })
      .then(meal => meal);
  },

};

export default MealService;
