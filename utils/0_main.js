import express from 'express';
import controllerRouting from '../routes/index';
import redisClient from './redis';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Middleware to attach Redis client to the request object
app.use((req, res, next) => {
  req.redisClient = redisClient;
  next();
});

controllerRouting(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
