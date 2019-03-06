import models from '../models';

const MealService = {
  // Get all meals
  fetchAllMeals() {
    return models.Meals.findAll()
      .then(meal => meal);
  },
  // Post a meal
  addMeal(meal) {
    return models.Meals.create(meal).then(newMeal => newMeal);
  },
  //  Delete a meal
  deleteMeal(id) {
    return models.Meals.destroy({
      where: {
        id,
      },
    })
      .then(rowDeleted => rowDeleted);
  },
};

export default MealService;
