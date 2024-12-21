const express = require('express');

const {createUser, createClient, modifyUser, modifyClient} = require('../controllers/UsersController');

const router = express.Router();


router.post('/create_user', createUser);
router.post('/create_client', createClient);

router.put('/modify_user', modifyUser);
router.put('/modify_client', modifyClient);


module.exports = router;