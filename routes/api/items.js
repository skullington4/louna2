const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items')



// All paths start with '/api/notes'
router.post('/', itemsCtrl.create);

// POST /api/notes (create a user - sign up)
// router.get('/users/:userId', notesCtrl.index);

// router.get('/:id', notesCtrl.getNote);

// router.delete('/:id', notesCtrl.deleteNote);

// router.put('/update', notesCtrl.updateNote)

module.exports = router;