var express = require('express');
const {getData} = require('../utils/helpers');
var router = express.Router();

function random(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandom(data){
   const r = []
   //return ['John', '3', '16', 'For God so loved the wor....']
   const a = data.at(random(0, data.length))
   if(!a) return getRandom(data)
   let b = random(1, a.length)
   let c = a[b]
   if(c == undefined) return getRandom(data)
   r.push(c.book)
   let d = random(1, a.length)
   let e = c.chapters[d]
   if(e == undefined) return getRandom(data)
   r.push(e?.chapter)
   let f = random(1, e.verses.length)
   let g = e.verses[f]
   if(g == undefined) return getRandom(data)
   r.push(g?.verse)
   r.push(g?.text)
   return r
}

/* GET home page. */
router.get('/', async function(req, res, next) {
 
 const data = await getData('new')
 const response = getRandom(data)
 if(req.query.ajax){
   return res.json(response)
 }
  res.render('index', { title: '23rd Generation Bible', data: response});
});

module.exports = router;
