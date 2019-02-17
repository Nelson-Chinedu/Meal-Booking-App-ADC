import dummyData from '../utils/mealDummyData';
import Meal from '../models/Meal.model';

const MealService = {
  // Get all meals
  fetchAllMeals() {
    return dummyData.meals.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      return newMeal;
    });
  },
  // Post a meal
  addMeal(meal) {
    const getMealLength = dummyData.meals.length;
    const lastId = dummyData.meals[getMealLength - 1].id;
    const newId = lastId + 1;
    meal.id = newId;
    dummyData.meals.push(meal);
    return meal;
  },
  // Get meal by ID
  getSingleMeal(id) {
    const mealId = dummyData.meals.find(meal => meal.id === Number(id));
    return mealId;
  },
  // Update meal by ID
  updateMeal(id, updateMeal) {
    const mealId = dummyData.meals.find(meal => meal.id === Number(id));
    updateMeal.id = mealId.id;
    dummyData.meals.splice(mealId.id - 1, 1, updateMeal);
    return updateMeal;
  },
  // Delete meal by ID
  deleteMeal(id) {
    const mealId = dummyData.meals.find(meal => meal.id === Number(id));
    dummyData.meals.splice(mealId.id - 1, 1);
    return mealId;
  },
};

export default MealService;
