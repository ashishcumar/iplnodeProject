// let socketClient = io();

const fetch = require('node-fetch')

function fetchfunc(){
  fetch("http://localhost:8080/getTeams")
  .then(res => res.json())
  .then(json => {
   return json
})
}

module.exports = {fetchfunc}

