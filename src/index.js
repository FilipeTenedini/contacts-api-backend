import express from 'express';
import router from './app/routers/index-router.js';

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
