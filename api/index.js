import express from 'express';
import mealsRoute from './routes/meal.route';
import menuRoute from './routes/menu.route';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json({ extended: false }));

app.use('/api/v1/meals', mealsRoute);
app.use('/api/v1/menus', menuRoute);

app.get('/', (req, res) => {
  res.send('Welcome to Mealitious foodie');
});
app.listen(PORT);
