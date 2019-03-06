import express from 'express';
import db from './config/database';
import mealsRoute from './routes/meal.route';
import menuRoute from './routes/menu.route';
import orderRoute from './routes/order.route';
import user from './routes/user.route';


const PORT = process.env.PORT || 3000;
const app = express();
db.authenticate()
  .then(() => console.log('connected'))
  .catch(err => console.log(err));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

app.use('/api/v1/meals', mealsRoute);
app.use('/api/v1/menu', menuRoute);
app.use('/api/v1/orders', orderRoute);
app.use('/auth', user);

app.get('/', (req, res) => {
  res.send('Welcome to Mealitious foodie');
});
app.listen(PORT);

export default app;
