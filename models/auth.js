
const {Schema, model} = require("../database/db") // import Schema & model

// Dynamic Schema
const authSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
})

// Dynamic model
const auth_user = model("auth_user", authSchema)

module.exports = auth_user