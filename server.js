const express=require('express')
const sinhvienRouter = require('./routes/sinhvien')
const indexRouter = require('./routes/index')
const methodOverride = require('method-override')
const mongoose =require('mongoose')
const app=express()
require('dotenv').config()
app.use(methodOverride('_method'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended: false}))

const connectFunctions=async()=>{
    try{
        await mongoose.connect('mongodb+srv://duyprovipwe:067548567@vietdaica.rfdt1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        console.log("Ket noi thanh cong")
    }catch(e){
        console.log(e)
        console.log("Ket noi that bai vui long fix code")
    }
}
connectFunctions()
app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false }))
app.use('/sinhvien/',sinhvienRouter)
app.use('/',indexRouter)
app.listen(process.env.PORT||27017)