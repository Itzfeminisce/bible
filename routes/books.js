var express = require('express');
var router = express.Router();
const {getData} = require('../utils/helpers.js')

/* GET users listing. */
router.get('/', async function(req, res) {
 const data = await getData('old')
 const response = []
 for(let books of data){
   response.push(...books.map(obj=>obj.book))
 }

 res.render('books',{title:'Chapters',books:response})
});

module.exports = router;
