var express = require('express');
const {getData} = require('../utils/helpers.js')
var router = express.Router();


router.get('/', async function(req, res) {
  
const _new = await getData('new')
 const _old = await getData('old')
 const data = [..._old, ..._new]
 const response = [], id=req.query.book
 
 
for(let books of data){
   //console.log(books.length)
   const bk = books.filter(obj=>{
    // console.log(Object.keys(obj))
     return obj.book == id
     })
     response.push(...bk)
 }
const totalChapters = response.at(0)?.chapters.length

  res.render('chapters',{title:'Chapters', book:id,
  totalChapters})
});

module.exports = router;
