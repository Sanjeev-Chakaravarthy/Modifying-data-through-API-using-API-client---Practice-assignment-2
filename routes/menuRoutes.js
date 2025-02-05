const express = require('express');
const { createMenuItem, getMenuItems, updateMenuItem, deleteMenuItem } = require('../controllers/menuController');

const router = express.Router();


router.post('/create', createMenuItem);


router.get('/get', getMenuItems);


router.put('/put/:id', updateMenuItem);


router.delete('/delete/:id', deleteMenuItem);

module.exports = router;
