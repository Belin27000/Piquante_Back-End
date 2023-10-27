const express = require('express');
const sauceCtrl = require('../controllers/sauces.controller');
const router = express.Router();

router.get('/', sauceCtrl.getAllSauces);
router.get('/:id', sauceCtrl.getOneSauce);

router.post('/', sauceCtrl.createSauce);
router.post('/:id/like', sauceCtrl.likeSauce);


router.put('/:id', sauceCtrl.modifySauce);

router.delete('/:id', sauceCtrl.deleteSauce);

module.exports = router;