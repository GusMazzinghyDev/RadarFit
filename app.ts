import express from 'express';
import AthleteRouter from './routers/athlete.router';
import CompetitionRouter from './routers/competition.router';
import GameRouter from './routers/game.router';

const app = express();

app.use(express.json());

app.use('/athlete', AthleteRouter);
app.use('/competition', CompetitionRouter);
app.use('/game', GameRouter);

export default app;
