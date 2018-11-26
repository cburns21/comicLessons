document.addEventListener('DOMContentLoaded', function(){
  console.log('dobby is a free elf!')
  fetch(`https://galvanize-cors.herokuapp.com/https://xkcd.com/1162/info.0.json`)
    .then(function(response) {
      return response.json()
  })
    .then(function(JSONresponse) {
      var body = document.querySelector('h1')
      console.log(JSONresponse)
     body.innerText = JSONresponse.title
      var bodyAlt = document.querySelector('p')
      bodyAlt.innerText = JSONresponse.alt
      var bodyimg = document.querySelector('img')
      bodyimg.innerText = JSONresponse.img
  })
})

function button(){
    alert('hey, are you listening?')
}

function button2(){
    
}