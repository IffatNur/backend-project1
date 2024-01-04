import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import notFound from './app/middleware/notFound';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import router from './app/routes';
const app: Application = express();
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

app.use(globalErrorHandler)

app.use(notFound)

export default app;
