const express = require("express")
require("dotenv").config({ path: __dirname+'/config/.env'})

const mongoose = require("mongoose")
const app = express()

const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_AUTHSOURCE
} = process.env

const url = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?authsource=${DB_AUTHSOURCE}`

mongoose.connect(`${url}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if(err) {
        console.log(`Impossible de se connecter : `, err)
    }
})
// import the agribalyse model
const Agribalyses = require("./models/agribalyses")(mongoose)

app.get("/", async (req, res) => {
    console.log("Hello home")

    const lol = await Agribalyses.findOne({}, (err, data) => {
        if(err) throw err
    })

   return res.json({lol})

})

// should be transform to post ..
app.get("/create", async (req, res) => {
    console.log("create new .. ")

    let agribalyse = new Agribalyses()
    agribalyse.nom_francais = 'Hello world ! '

    const newAgribalyse = await agribalyse.save()
    return res.json({newAgribalyse})
})

app.listen(5555, () => console.log('Server is running on http://localhost:5555'))