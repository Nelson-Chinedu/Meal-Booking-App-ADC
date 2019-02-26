"use strict";

var _express = _interopRequireDefault(require("express"));

var _meal = _interopRequireDefault(require("./routes/meal.route"));

var _menu = _interopRequireDefault(require("./routes/menu.route"));

var _order = _interopRequireDefault(require("./routes/order.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 3000;
var app = (0, _express.default)();
app.use(_express.default.json({
  extended: false
}));
app.use('/api/v1/meals', _meal.default);
app.use('/api/v1/menu', _menu.default);
app.use('/api/v1/orders', _order.default);
app.get('/', function (req, res) {
  res.send('Welcome to Mealitious foodie');
});
app.listen(PORT);