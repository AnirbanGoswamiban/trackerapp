const express = require("express")
const app = express();
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.json())
const port = 3000
let coords = {}
app.listen(port, () => {
    console.log(`app is running at ${port}`);
})

app.get("/dog", (req, res) => {
    res.sendFile(__dirname + "/dog.html")
})
app.get("/watch", (req, res) => {
    res.sendFile(__dirname + "/watch.html")
})
app.get("/get-coords", (req, res) => {
    res.send(coords)
})

app.post("/post-coords", (req, res) => {
    coords = req.body
    console.log(req.body);
     
})