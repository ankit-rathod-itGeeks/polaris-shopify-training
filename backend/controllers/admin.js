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