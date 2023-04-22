var express = require('express');
const {getData} = require('../utils/helpers');
var router = express.Router();

router.get('/', async function(req, res) {
  const _new = await getData('new')
 const _old = await getData('old')
 const data = [..._old, ..._new]
 const response = [], {book, chapter} =req.query
 
 
for(let books of data){
   //console.log(books.length)
   const bk = books.filter(obj=>{
       return obj.book == book
     })
     response.push(...bk)
 }
const total = response.at(0)?.chapters.at(chapter)?.verses.length


  res.render('verses',{title:'Verses', book, chapter, total})
});

module.exports = router;
