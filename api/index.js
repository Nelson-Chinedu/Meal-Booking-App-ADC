import express from 'express';
import mealsRoute from './routes/meal.route';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('App working perfectly');
});
app.use('/api/v1/meals', mealsRoute);
app.listen(PORT);
