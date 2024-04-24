const express = require('express');
const router = express.Router();
const Watch = require('../models/watchSchema');

// READ all watches
router.get('/watches', async (req, res) => {
  const watches = await Watch.find();
  res.render('watches/index', { watches });
});

// SHOW a watch
router.get('/watches/:id', async (req, res) => {
  const watch = await Watch.findById(req.params.id);
  res.render('watches/show', { watch });
});

// EDIT a watch
router.get('/watches/:id/edit', async (req, res) => {
  const watch = await Watch.findById(req.params.id);
  res.render('watches/edit', { watch });
});

// UPDATE a watch
router.put('/watches/:id', async (req, res) => {
  const { brand, type, strapMaterial, price } = req.body;
  const watch = await Watch.findByIdAndUpdate(req.params.id, { brand, type, strapMaterial, price }, { new: true });
  res.redirect(`/watches/${watch._id}`);
});

module.exports = router;