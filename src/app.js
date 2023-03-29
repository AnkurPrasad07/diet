const express = require('express')
const { registerPartial } = require('hbs')
require("./db/conn")
const app = express()
const path = require("path")
const port = process.env.PORT || 3000
const hbs = require("hbs")



//static
const static_path = path.join(__dirname,"../public")
app.use(express.static(static_path))

// other middlewares for bootstrap 
app.use('/css', express.static(path.join(__dirname , "../node_modules/bootstrap/dist/css")))
app.use('/js', express.static(path.join(__dirname , "../node_modules/bootstrap/dist/js")))

//view engine - set up
app.set("view engine", "hbs")

// for custom views directory name
const template_path = path.join(__dirname, "../templates/views")
app.set("views", template_path)

// for connencting the partials files
const partial_path = path.join(__dirname, "../templates/partials")
hbs.registerPartials(partial_path)

//routing
app.get("/", (req,res)=>{
    res.render("index")
})

app.get("/about", (req,res)=>{
    res.render("about")
})

app.get("/programmes", (req,res)=>{
    res.render("programmes")
})


app.get("/training", (req,res)=>{
    res.render("training")
})


app.get("/documents", (req,res)=>{
    res.render("documents")
})


app.get("/gallery", (req,res)=>{
    res.render("gallery")
})


app.get("/contact", (req,res)=>{
    res.render("contact")
})


app.get("/form", (req,res)=>{
    res.render("form")
})







//server
app.listen(port, ()=>{
    console.log(`server is completely fine at port no. ${port}`)
})