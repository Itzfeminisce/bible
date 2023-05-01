
const NEW_SCRIPTURE_TIMEOUT = 10 // 5 seconds


const getOne =el=>document.querySelector(el)
const getMany =el=>document.querySelectorAll(el)
const el =el=>document.createElement(el)

setInterval(()=>{
  fetch('/?ajax=1').then(res=>res.json()).then(data=>{
    const [book, chapter, verse, text] = data
    getOne('[data-placeholder]').setAttribute('placeholder',`${book} ${chapter}:${verse}`)
    getOne('[data-book]').textContent = book
    getOne('[data-text]').textContent = text
    getOne('[data-read-url]').href = `/reading?book=${book}&chapter=${chapter}&verse=${verse}#page-${verse}`
    getOne('[data-verse]').textContent = verse
    getOne('[data-chapter]').textContent = chapter 
    }).catch()
},NEW_SCRIPTURE_TIMEOUT * 1000)

getMany('[data-verse-action]').forEach(e=>{
  e.addEventListener('click', function(){
  switch(this.dataset.verseAction){
    case 'highlight':
      alert(this.parent('[data-scripture]').innerHTML)
      break;
  }
})})

