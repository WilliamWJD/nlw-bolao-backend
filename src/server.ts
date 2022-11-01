import express from 'express';
import { routes } from './routes';
import cors from 'cors';
import { CelebrateErr } from './errors/CelebrateError';

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.use(routes);
app.use(CelebrateErr)

app.listen(3333, () => {
    console.log('Servidor online')
})