const path = require("path")
const express = require("express")
const hbs = require("hbs")

const app = express()

//define paths
const viewsPath = path.join(__dirname, "../templates/views")
const staticPath = path.join(__dirname, "../public")
const partialsPath = path.join(__dirname,"../templates/partials")

//Set the handlebars engine and views location
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(staticPath))

app.get("", (req,res) => {
    res.render("index", {
        title: "BULALAAS",
        name: "Dixon"
    })
})

app.get("/help", (req,res) => {
    res.render("help", {
        title:"Help",
        name:"Dixon",
        message: "What can I help you?"
    })
})

app.get("/about", (req,res) => {
    // res.send("<h1> ABOUT </h1>")
    // res.send({
    //     name: "Dixon",
    //     age: 18
    // })
    res.render("about", {
        title: "About",
        name: "Dixon"
    })
})

app.get("/weather", (req,res) => {
    res.send({
        forecast: "It's Raining",
        location: "Seattle"
    })
})

app.get("/help*", (req,res) => {
    res.render("404", {
        errorMessage: "Help article not found",
        title: "Error",
        name: "Dixon"
    })
})

app.get("*", (req,res) => {
    res.render("404", {
        errorMessage: "Page not found",
        title: "Error",
        name: "Dixon"
    })
})


app.listen(3000, () => {
    console.log("Server started on 3000")
})

