import express from 'express';
import indexRoute from './routes/index';

const app = express();
app.use('/', indexRoute);

app.listen(8080, () => console.log('Running on port 8080'));
