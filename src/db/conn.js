const mongoose = require('mongoose')

const DB = "mongodb+srv://tej:dietkamki@form.ccvfmdg.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('connection successful')
}).catch((err)=>{
    console.log(err)
})