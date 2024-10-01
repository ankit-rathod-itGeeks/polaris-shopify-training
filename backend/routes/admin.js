const express = require('express');
const router = express.Router();
const controllers = require('../controllers/admin')


router.post('/register', controllers.register)
router.post('/login',controllers.login)
router.post('/addBook',controllers.addBook)
router.post('/issueBook',controllers.issueBook)
router.post('/assignedBooks/:id',controllers.assignedBooks)
router.get('/allBooks',controllers.allBooks)


module.exports = router 