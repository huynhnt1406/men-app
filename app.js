const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const app = express()
//DB CONFIGURATION
const db = require('./config/keys').MongoURI;
console.log(db)
//CONNECT MONGO
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err.message))
//BODY PARSE
app.use(express.urlencoded({extended:false}))
//EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')
//routes
app.use('/',require('./routes/index'))
app.use('/',require('./routes/users'))
const PORT = process.env.PORT || 3000

app.listen(PORT,() => console.log(`Server Listening on PORT : ${PORT}`))