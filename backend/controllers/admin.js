const getService = require('../services/admin')



exports.register = async (req, res) => {
    try {

        const result = await getService.register(req)
        res.json({ result })
    } catch (error) {
        res.json({ error })
    }

}
exports.login = async (req, res) => {
    try {

        const result = await getService.login(req)
       
        res.json({ result })
    } catch (error) {
        res.json({ error })
    }

}
exports.addBook = async (req, res) => {
    try {

        const result = await getService.addBook(req)
       
        res.json({ result })
    } catch (error) {
        res.json({ error })
    }

}
exports.issueBook = async (req, res) => {
    try {

        const result = await getService.issueBook(req)
       
        res.json({ result })
    } catch (error) {
        res.json({ error })
    }

}
exports.assignedBooks = async (req, res) => {
    try {

        const result = await getService.assignedBooks(req)
     
        res.json({ result :result})
    } catch (error) {
        console.log(error);
        res.json({ error })
    }

}
exports.allBooks = async (req, res) => {
    try {

        const result = await getService.allBooks(req)
     
        res.json({ result :result})
    } catch (error) {
        console.log(error);
        res.json({ error })
    }

}
exports.allUsers = async (req, res) => {
    try {

        const result = await getService.allUsers()
     
        res.json({ result :result})
    } catch (error) {
        console.log(error);
        res.json({ error })
    }

}
exports.allIssuedBooks = async (req, res) => {
    try {

        const result = await getService.allIssuedBooks()
     
        res.json({ result :result})
    } catch (error) {
        console.log(error);
        res.json({ error })
    }

}
exports.getRequestedBooks = async (req, res) => {
    try {

        const result = await getService.getRequestedBooks()
     
        res.json({ result :result})
    } catch (error) {
        console.log(error);
        res.json({ error })
    }

}
exports.submitBook = async (req, res) => {
    try {

        const result = await getService.submitBook(req)
     
        res.json({ result :result})
    } catch (error) {
        console.log(error);
        res.json({ error })
    }

}
exports.updateStatus = async (req, res) => {
    try {

        const result = await getService.updateStatus(req)
     
        res.json({ result :result})
    } catch (error) {
        console.log(error);
        res.json({ error })
    }

}


exports.deleteBook = async (req, res) => {
    try {
console.log(req.params.id);

        const result = await getService.deleteBook(req)
     
        res.json({ result :result})
    } catch (error) {
        console.log(error);
        res.json({ error })
    }

}
exports.penaltyCollected = async (req, res) => {
    try {
 

        const result = await getService.penaltyCollected(req)
     
        res.json({ result :result})
    } catch (error) {
        console.log(error);
        res.json({ error })
    }

}

exports.studentIssuedBooks = async (req, res) => {
    try {
console.log(req.params.id);

        const result = await getService.studentIssuedBooks(req)
     
        res.json({ result :result})
    } catch (error) {
        console.log(error);
        res.json({ error })
    }

}
exports.studentBooksHistory = async (req, res) => {
    try {
console.log(req.params.id);

        const result = await getService.studentBooksHistory(req)
     
        res.json({ result :result})
    } catch (error) {
        console.log(error);
        res.json({ error })
    }

}


exports.requestBook = async (req, res) => {
    try {
console.log(req.params.id);

        const result = await getService.requestBook(req)
     
        res.json({ result :result})
    } catch (error) {
        console.log(error);
        res.json({ error })
    }

}