const competitionService = require('../services/competition.service');

async function createCompetition(req, res) {
  try {
    const { name } = req.body;
    const competition = await competitionService.createCompetition(name);
    return res.status(200).json(competition);
  } catch (error) {
    return res.status(500).end();
  }
}