import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('working'));
const port = 3000;
app.listen(port);
