const express = require('express');
const router = express.Router();

//Item model
const Item = require('../../models/Item');
//@route GET api/iteams
//@desc Get All Iteams
//@access Public
router.get('/',(req,res)=>{
    Item.find()
    .sort({date: -1})
    .then(items =>res.json(items))
});
router.get('/resume',(req,res)=>{
    Item.find()
    .sort({date: -1})
    .then(items =>res.json(items))
});

router.post('/',(req,res)=>{
    const newItem = new Item({
        name: req.body.name,
        information:req.body.information
    });
    newItem.save().then(item=>res.json(item));
});

router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id)
    .then(item=>item.remove().then(()=> res.json({success:true})))
    .catch(err => res.status(404).res.json({success:false}))
});
//test



module.exports = router;
