//import {default as nodeFetch} from 'node-fetch'

//const nodeFetch = require('node-fetch')


function chunk(n, data) {
    const ceil = Math.ceil;
    return Array(ceil(data.length/n)).fill().map((_,i) => data.slice(i*n,i*n+n));
}


async function getData(name, chunkCount=10){
const {default:nodefetch} = await import('node-fetch')
//const meta = new Headers({'Content-Type':'application/json'})
//const host = new URL()
//console.log(process.env.HOST)
let data = await nodefetch(`${process.env.HOST}/bible/${name}.json`)
return chunk(chunkCount, await data.json())
}

 /*
   const generator = async function* (){
     const data =await getData()
     for(let i=0;i<data.length;i++){
       yield await Promise.resolve(data[i])
     }
   }
   
   
  
async function generate(clb){
  let next, bc=[], books=[];
   for await (let book of generator()){
clb(book)

   }
} 
*/
module.exports = {getData}