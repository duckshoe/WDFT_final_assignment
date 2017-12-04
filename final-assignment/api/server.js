const request = require("request");
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const app = express();
let array = [];
var chunks = [];
var torData = [];

function chunk (arr, len) {
          i = 0,
          n = arr.length;
        while (i < n) {
          chunks.push(arr.slice(i, i += len));
      }
        return chunks;
    }

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  
app.listen(8080, ()=>{
    console.log('listening on port 8080')
});

getData().then(chunks => {
    for (let i = 0; i<chunks.length; i++) {
        if (chunks[i][2] === "TOR"){
            torData.push(chunks[i]);
            console.log(torData);
        }
    }
})
function getData() {
    return axios.get("http://www.espn.com/nba/statistics/rpm")
    //.then(response => Promise.resolve(response.data))
    .then(response => {
        let $ = cheerio.load(response.data)
        let data = $('td')
        .map((index, element)=> $(element).text()).get();
        chunk(data, 9);
        //console.log(chunks);
        return chunks;
    })
}
    
