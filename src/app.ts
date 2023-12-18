import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './app/modules/students/student.routes';
const app: Application = express();
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoute);

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

console.log(process.cwd());
export default app;
