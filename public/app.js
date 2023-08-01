const express = require('express')
const app = express()
const port = 3000

app.get("/views/home", (req, res, next) => {
    res.send(__dirname + "/views/home.html")
})

app.get("/views/about", (req, res, next) => {
    res.send(__dirname + "/views/about.html")
})
app.get("/views/works", (req, res, next) => {
    res.send(__dirname + "/views/works.html")
})
app.get("/views/photo-Gallery", (req, res, next) => {
    res.send(__dirname + "/views/photo-Gallery.html")
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
