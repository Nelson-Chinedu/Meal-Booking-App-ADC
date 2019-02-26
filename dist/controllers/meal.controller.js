"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meal = _interopRequireDefault(require("../services/meal.service"));

var _mealDummyData = _interopRequireDefault(require("../utils/mealDummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mealController = {
  // fetch all meals
  fetchAllMeal: function fetchAllMeal(req, res) {
    var meal = _meal.default.fetchAllMeals(); // return status of 400 and message if meal are empty


    if (meal.length === 0) {
      return res.status(400).json({
        message: 'Meal not found',
        error: true
      });
    } // return status of 200 and message if meal is true


    return res.status(200).json({
      data: meal,
      message: 'success',
      error: false
    });
  },
  // Post a meal
  addMeal: function addMeal(req, res) {
    var newMeal = req.body; // return status of 400 and message if one or more
    // of newMeal object values are empty

    if (!newMeal.name) {
      return res.status(400).json({
        message: 'input values are required',
        error: true
      });
    } // return status of 200 and message if meal is true


    var meal = _meal.default.addMeal(newMeal);

    return res.status(200).json({
      data: meal,
      message: 'success',
      error: false
    });
  },
  // Get a meal by ID
  getMeal: function getMeal(req, res) {
    var id = req.params.id;

    var meal = _meal.default.getSingleMeal(id); // return status of 400 and message if meal is false


    if (!meal) {
      return res.status(400).json({
        message: 'The meal with the ID is not found',
        error: true
      });
    } // return status of 200 and data if meal is true


    return res.status(200).json({
      data: meal,
      message: 'success',
      error: false
    });
  },
  // Update a meal by ID
  updateMeal: function updateMeal(req, res) {
    var id = req.params.id;

    var mealId = _mealDummyData.default.meals.find(function (meal) {
      return meal.id === Number(id);
    }); // return status of 400 with message if ID is not found


    if (!mealId) {
      return res.status(400).json({
        message: 'The meal with the ID is not found',
        error: true
      });
    } // return status of 200 and message if newMeal and meal are true


    var newMeal = req.body;

    var meal = _meal.default.updateMeal(id, newMeal);

    return res.status(200).json({
      data: meal,
      message: 'success',
      error: false
    });
  },
  // Delete a meal by ID
  deleteMeal: function deleteMeal(req, res) {
    var id = req.params.id;

    var mealId = _mealDummyData.default.meals.find(function (meal) {
      return meal.id === Number(id);
    }); // return status of 400 with message if ID is not found


    if (!mealId) {
      return res.status(400).json({
        message: 'The meal with the ID is not found',
        error: true
      });
    } // return status of 200 and message if meal is true


    var meal = _meal.default.deleteMeal(id);

    return res.status(200).json({
      data: meal,
      message: 'success',
      error: false
    });
  }
};
var _default = mealController;
exports.default = _default;