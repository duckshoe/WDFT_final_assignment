const request = require("request");
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const nba = require('nba.js').default;
const app = express();
let array = [];
var chunks = [];
var torArray = [];
var torData = [];
var rpmURL = "http://www.espn.com/nba/statistics/rpm/_/page/";
var bbRefURL = "https://www.basketball-reference.com/teams/TOR/2018.html";
var nbaURL = 'https://stats.nba.com/stats/teamplayeronoffdetails';

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

function getRPM(url) {
    let counter = 0;
    let results = [];
for (let i=1; i<12; i++){   
        //return 
    axios.get(rpmURL + i)
    .then(response => {
        let $ = cheerio.load(response.data)
        let data = $('td')
        .map((index, element)=> $(element).text()).get();
        chunk(data, 9);
        counter ++;
        for (let j = 0; j<chunks.length; j++) {
            if (chunks[j][2] === "TOR"){
                    torArray.push(chunks[j]);
            }
        }
            if (counter === 11) {
                torData = torArray.filter(function(item, pos) {
                    return torArray.indexOf(item) == pos;
            })
                console.log('//////////////////////////////////////////////////////////////////////////')
                console.log(torData);
                return torData;
            }
            //return chunks;
        })
    }
}

function getBBref(url) {
    axios.get(url)
    .then(response=> {
        let $ = cheerio.load(response.data.split('all_advanced')[1].split('-->')[0].split('<!--')[1]);
        //console.log(response.data.split('all_advanced')[1].split('-->')[0].split('<!--')[1]);
        let data = $('tr')
        .map((index, element)=> $(element).text()).get();
        //data.splice(0,1);
        //data.splice(14,1);
        console.log(data);
        return data
    })
    //.then(data=>{
    //    console.log(data);
    //})
}

function getNBA(){
    nba.stats.teamOnOffCourtStats({TeamID: 1610612761, PerMode: 'Per100Possessions', Season: '2017-18', MeasureType: 'Advanced'}).then(res => {
        console.log(res)
      });
    /*return axios.get(url, {
        params: {
            DateFrom: null,
            DateTo: null,
            GameSegment: null,
            LastNGames: null,
            LeagueID: null,
            Location: null,
            MeasureType: null,
            Month: null,
            OpponentTeamID: null,
            Outcome: null,
            PaceAdjust: null,
            Period: null,
            PerMode: null,
            PlusMinus: null,
            Rank: null,
            Season: null,
            SeasonSegment: null,
            SeasonType: null,
            ShotClockRange: null,
            TeamID: 1610612761,
            VsConference: null,
            VsDivision: null
        }
      })
      .then(response=>{
          console.log(response.data)
      })*/
}

//getRPM(rpmURL);
//getBBref(bbRefURL);
getNBA();
