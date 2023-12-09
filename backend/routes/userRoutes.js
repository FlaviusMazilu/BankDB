const express = require('express');
const controller = require('../controllers/userController');

const router = express.Router();
// router.param('id', controller.checkID);
// router.post('/', controller.checkBody);

router
    .route('/:id')
    .get(controller.getUserById)
    .delete(controller.deleteUser)
    .patch(controller.updateUser);
router
    .route('/')
    .get(controller.getAllUsers)
    .post(controller.postUser);

module.exports = router;