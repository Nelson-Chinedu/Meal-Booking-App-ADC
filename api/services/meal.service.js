import dummyData from '../utils/dummyData';
import Meal from '../models/Meal.model';

const MealService = {
  fetchAllMeals() {
    return dummyData.meals.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      return newMeal;
    });
  },
  addMeal(meal) {
    const getMealLength = dummyData.meals.length;
    const lastId = dummyData.meals[getMealLength - 1].id;
    const newId = lastId + 1;
    meal.id = newId;
    dummyData.meals.push(meal);
    return meal;
  },
  getSingleMeal(id) {
    const mealId = dummyData.meals.find(meal => meal.id === Number(id));
    if (!mealId) {
      return {
        message: 'The meal with the id is not found',
        error: true,
      };
    }
    return {
      mealId,
      message: 'Succes',
      error: true,
    };
  },
  updateMeal(id, updateMeal) {
    const mealId = dummyData.meals.find(meal => meal.id === Number(id));
    if (!mealId) {
      return {
        message: 'The meal with the id is not found',
        error: true,
      };
    }
    updateMeal.id = mealId.id;
    dummyData.meals.splice(mealId.id - 1, 1, updateMeal);
    return {
      updateMeal,
      message: 'Meal updated successfully',
      error: false,
    };
  },
  deleteMeal(id) {
    const mealId = dummyData.meals.find(meal => meal.id === Number(id));
    if (!mealId) {
      return {
        message: 'The meal with the id is not found',
        error: true,
      };
    }
    dummyData.meals.splice(mealId.id - 1, 1);
    return {
      mealId,
      message: 'Meal deleted successfully',
      error: false,
    };
  },
};

export default MealService;
