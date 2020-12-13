const mongoose = require('mongoose')

let conn = null

const URI = 'mongodb+srv://secret:AuIakpkVREfTx32a@cluster0.kmzin.mongodb.net/secret?retryWrites=true&w=majority'

module.exports = async () => {
    if (!conn) {
        conn =  mongoose.connect(URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        await conn
    }
}