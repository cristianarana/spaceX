import express from "express";
import dotenv from "dotenv";
import launchesRouter from "./routes/launches";
import rocketsRouter from "./routes/rockets";
import flightsRouter from "./routes/flights";
import { setupSwagger } from './config/swagger';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
setupSwagger(app);

app.get('/', (req, res) => {
    res.send('Bienvenido a la API SpaceX');
  });

app.use("/launches", launchesRouter);
app.use("/rockets", rocketsRouter);
app.use("/flights", flightsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

