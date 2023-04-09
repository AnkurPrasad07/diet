const express = require('express')
const { registerPartial } = require('hbs')
require("./db/conn")
const User = require("./models/userForm")
// const Userfile = require("./models/userFile")
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

//for form -middleware
app.use(express.urlencoded({extended: false}))


// payment gateway integration
const Razorpay = require("razorpay")
var instance = new Razorpay({
    key_id: 'rzp_test_bhlqPRR6KxX0LH',
    key_secret: 'l06Lv6WkDv98UgvuYhdRtEyM',
  });


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


app.post("/form_input", async(req, res)=>{
    try {
        const userData = new User(req.body)
        await userData.save();
        res.status(201).render("success")
    } catch (error) {
        res.status(500).send(error)
    }
})

app.post("/form_fee", (req,res) =>{
    console.log("Create order ID request")
    var options = {
        amount: 20000,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "rcp1"
      };
      instance.orders.create(options, function(err, order) {
        console.log(order);
        res.send({orderId : order.id})
      });
})


app.post("/api/payment/verify",(req,res)=>{

    let body=req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;
   
     var crypto = require("crypto");
     var expectedSignature = crypto.createHmac('sha256', 'l06Lv6WkDv98UgvuYhdRtEyM')
                                     .update(body.toString())
                                     .digest('hex');
                                     console.log("sig received " ,req.body.response.razorpay_signature);
                                     console.log("sig generated " ,expectedSignature);
     var response = {"signatureIsValid":"false"}
     if(expectedSignature === req.body.response.razorpay_signature)
      response={"signatureIsValid":"true"}
         res.send(response);
     });




//server
app.listen(port, ()=>{
    console.log(`server is completely fine at port no. ${port}`)
})