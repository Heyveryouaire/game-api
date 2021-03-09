const express = require("express")
const app = express()

app.get("/", (req, res) => {
    console.log("Hello home")
    res.send("Hello home")
})

app.listen(5555, () => console.log('Server is running on http://localhost:5555'))