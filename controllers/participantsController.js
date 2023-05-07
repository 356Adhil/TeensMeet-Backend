const Participant = require('../models/participant');

exports.getAllParticipants = async (req, res) => {
  try {
    const participants = await Participant.find();
    res.json(participants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getParticipantById = async (req, res) => {
  try {
    const participant = await Participant.findById(req.params.id);
    if (!participant) {
      return res.status(404).json({ message: 'Participant not found' });
    }
    res.json(participant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.addParticipant = async (req, res) => {
  const participant = new Participant({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    contact: req.body.contact
  });

  try {
    const savedParticipant = await participant.save();
    res.status(201).json(savedParticipant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateParticipant = async (req, res) => {
  try {
    const participant = await Participant.findById(req.params.id);
    if (!participant) {
      return res.status(404).json({ message: 'Participant not found' });
    }

    participant.name = req.body.name;
    participant.age = req.body.age;
    participant.gender = req.body.gender;
    participant.contact = req.body.contact;
    participant.points = req.body.points;

    const updatedParticipant = await participant.save();
    res.json(updatedParticipant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteParticipant = async (req, res) => {
  try {
    const deletedParticipant = await Participant.findByIdAndDelete(req.params.id);
    if (!deletedParticipant) {
      return res.status(404).json({ message: 'Participant not found' });
    }
    res.json(deletedParticipant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
