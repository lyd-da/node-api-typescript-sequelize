import express from 'express';
import cors from 'cors';
import router from './src/routes';
import { db } from './src/models';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", router);
app.get('/api/v2', (req, res) => {
  res.send('You have reached us');
});
const port = process.env.PORT || 9000;
app.listen(port, async () => {
  console.log(`Server started at port: ${port}`);
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
