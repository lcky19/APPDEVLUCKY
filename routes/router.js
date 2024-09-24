const express = require('express');
const router = express.Router();
const hp = require('../controller/HpController');
router.get('/', hp.nom);
router.get('/about', hp.about);
router.get('/cart', hp.cart);
router.get('/check', hp.check);
router.get('/contact', hp.contact
    
);

module.exports = router;