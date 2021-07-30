const mongoose = require('mongoose')
const sinhvienSchema=new mongoose.Schema({
    name:{type:String, require:true},
    old:{type:Number}
})
module.exports=mongoose.model('sinhvien', sinhvienSchema)