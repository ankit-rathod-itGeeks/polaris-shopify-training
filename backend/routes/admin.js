const express = require("express");
const router = express.Router();
const controllers = require("../controllers/admin");

router.post("/register", controllers.register);
router.post("/login", controllers.login);
router.post("/addBook", controllers.addBook);
router.post("/issueBook", controllers.issueBook);
router.post("/assignedBooks/:id", controllers.assignedBooks);
router.get("/allBooks", controllers.allBooks);
router.get("/allUsers", controllers.allUsers);
router.get("/allIssuedBooks", controllers.allIssuedBooks);
router.get("/getRequestedBooks", controllers.getRequestedBooks);
router.put("/approveBookRequest/:id", controllers.approveBookRequest);

router.delete("/submitBook", controllers.submitBook);
router.put("/updateStatus", controllers.updateStatus);
router.delete("/deleteBook/:id", controllers.deleteBook);
router.get("/penaltyCollected", controllers.penaltyCollected);

router.get("/studentIssuedBooks/:id", controllers.studentIssuedBooks);
router.get("/studentBooksHistory/:id", controllers.studentBooksHistory);
router.post("/requestBook/:id", controllers.requestBook);

module.exports = router;
