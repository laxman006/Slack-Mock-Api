const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const licenses = require('../data/licenses.json');
let currentUsers = require('../data/users.json');

// GET all users
router.get('/users.list', (req, res) => {
  res.json(currentUsers);
});


// POST: Add user
router.post('/users.add', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Name and email are required' });

  const newUser = {
    id: require('crypto').randomUUID(),
    name,
    email,
  };
  currentUsers.push(newUser);
  res.status(201).json(newUser);
});

// PUT: Update user
router.put('/users.update', (req, res) => {
  const { id, name, email } = req.body;
  const user = currentUsers.find((u) => u.id === id);
  if (!user) return res.status(404).json({ error: 'User not found' });

  if (name) user.name = name;
  if (email) user.email = email;

  res.status(200).json(user);
});

// DELETE: Remove user
router.delete('/users.remove', (req, res) => {
  const userId = req.query.user;
  const index = currentUsers.findIndex((u) => u.id === userId);
  if (index === -1) return res.status(404).json({ error: 'User not found' });

  const removed = currentUsers.splice(index, 1);
  res.status(200).json(removed[0]);
});

// GET: License info
router.get('/license.info', (req, res) => {
  res.status(200).json(licenses);
});

module.exports = router;
