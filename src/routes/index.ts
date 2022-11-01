import { Router } from 'express';

const routes = Router();

routes.get('/pools/count', (req, res) => {
    return res.json({ ok: true })
});

export { routes }