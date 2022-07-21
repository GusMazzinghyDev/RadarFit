import { Router } from 'express';
import { CompetitionController } from '..controllers/competition.controller';

const CompetitionController = new competitionController();
const CompetitionMiddleware = new competitionMiddleware();

const router = Router();

router.get('/', competitionController.createCompetition)
router.post('/', competitionController.createCompetition, competitionMiddleware.finishedCompetiton);

export default router;