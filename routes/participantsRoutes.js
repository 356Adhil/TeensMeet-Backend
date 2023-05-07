const express = require('express');
const router = express.Router();
const participantsController = require('../controllers/participantsController');

router.get('/', participantsController.getAllParticipants);
router.get('/:id', participantsController.getParticipantById);
router.post('/', participantsController.addParticipant);
router.put('/:id', participantsController.updateParticipant);
router.delete('/:id', participantsController.deleteParticipant);

module.exports = router;
