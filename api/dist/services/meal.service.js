"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mealDummyData = _interopRequireDefault(require("../utils/mealDummyData"));

var _Meal = _interopRequireDefault(require("../models/Meal.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealService = {
  // Get all meals
  fetchAllMeals: function fetchAllMeals() {
    return _mealDummyData.default.meals.map(function (meal) {
      var newMeal = new _Meal.default();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      return newMeal;
    });
  },
  // Post a meal
  addMeal: function addMeal(meal) {
    var getMealLength = _mealDummyData.default.meals.length;
    var lastId = _mealDummyData.default.meals[getMealLength - 1].id;
    var newId = lastId + 1;
    meal.id = newId;

    _mealDummyData.default.meals.push(meal);

    return meal;
  },
  // Get meal by ID
  getSingleMeal: function getSingleMeal(id) {
    var mealId = _mealDummyData.default.meals.find(function (meal) {
      return meal.id === Number(id);
    });

    return mealId;
  },
  // Update meal by ID
  updateMeal: function updateMeal(id, _updateMeal) {
    var mealId = _mealDummyData.default.meals.find(function (meal) {
      return meal.id === Number(id);
    });

    _updateMeal.id = mealId.id;

    _mealDummyData.default.meals.splice(mealId.id - 1, 1, _updateMeal);

    return _updateMeal;
  },
  // Delete meal by ID
  deleteMeal: function deleteMeal(id) {
    var mealId = _mealDummyData.default.meals.find(function (meal) {
      return meal.id === Number(id);
    });

    _mealDummyData.default.meals.splice(mealId.id - 1, 1);

    return mealId;
  }
};
var _default = MealService;
exports.default = _default;