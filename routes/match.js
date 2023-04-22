const express = require('express');
const router = express.Router();
const {getData} = require('../utils/helpers.js')



/* GET users listing. */
router.get('/', async function(req, res) {
 const _new = await getData('new')
 const _old = await getData('old')
 const data = [..._old, ..._new]
 const response = [], id=req.query.tag
 //console.log(data.length)
 for(let books of data){
   //console.log(books.length)
   const bk = books.filter(obj=>{
    // console.log(Object.keys(obj))
     return obj.book.startsWith(id.toUpperCase())
     })
     response.push(...bk)
 }
 res.render('match',{title:'Books',books:response})
});

module.exports = router;
