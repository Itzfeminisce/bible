var express = require('express');
var router = express.Router();
const {getData} = require('../utils/helpers')

router.get('/', async  function(req, res, next) {
  const _new = await getData('new')
 const _old = await getData('old')
 const data = [..._old, ..._new].flat(Infinity)
 const response = [], {book, chapter, verse}=req.query
 
 
 const read = data.filter(a=>{
   if(a.book===book){
     return a?.chapters.filter(b=>{
       if(b?.chapter === chapter){
         response.push(b?.verses)
       }
     })
   }
 })
 
 
 
 
//const read = response.at(0)
//?.chapters[chapter].verses[verse]

//console.log(read.chapters[0].verses)
  res.render('reading',{title:'Reading the bible', bookName:book, chapter, verse, read:response.flat(1)})
});

module.exports = router;
