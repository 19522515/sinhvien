const express=require('express')
const sinhvienModel = require('../models/sinhvien.model')
const router=express.Router()

router.get('/',async(req,res)=>{
    try{
        const sinhviens = await sinhvienModel.find()
        res.render('sinhviens/list',{sinhviens:sinhviens})
    }catch(e){
        console.log(e.message)
        res.redirect('/')
    }
})
router.delete('/delete/:id',async(req,res)=>{
    try{
        console.log(req.params.id)
        await sinhvienModel.findByIdAndDelete(req.params.id)
        res.redirect('/sinhvien')
    }catch(err){
        console.log(e)
        res.redirect('/')
    }
})
router.get('/edit/:id',async(req,res)=>{
    try{
        const sinhvien = await sinhvienModel.findById(req.params.id)
        res.render('sinhviens/edit',{sinhvien})
    }catch(e){
        console.log(e)
        res.redirect('/')
    }
})
router.put('/edit/:id',async(req,res)=>{
    try{
       let cus = await sinhvienModel.findById(req.params.id)
       cus.name =req.body.name
       cus.old =req.body.old
       await cus.save()
       res.redirect('/sinhvien')
    }catch(e){
        console.log(e)
        res.redirect('/')
    }
})
router.get('/add',(req,res)=>{
    res.render('sinhviens/add')
})
router.post('/add',async(req,res)=>{
    try{
        const newsinhvien=new sinhvienModel({
            name:req.body.name,
            old:req.body.old
        })
        await newsinhvien.save()
        res.redirect('/sinhvien')
    }catch(e){
            console.log(e)
            res.redirect('/')
        }
})
router.get('/delete/:id',async(req,res)=>{
    try{
        console.log(req.params.id)
        await sinhvienModel.findByIdAndDelete(req.params.id)
        res.redirect('/sinhvien')
    }catch(err)
    {
        console.log(e)
        res.redirect('/')
    }
})
module.exports = router