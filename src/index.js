import express from 'express';

import indexRoute from './routes/index';
import uploadRoute from './routes/upload';

const app = express();
app.use('/', indexRoute);
app.use('/upload', uploadRoute);

app.listen(8080, () => console.log('Running on port 8080'));
