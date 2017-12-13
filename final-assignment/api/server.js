const request = require("request");
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const mongoose = require('mongoose');
const BBR = require('../models/bballref');
const RPM = require('../models/rpm');
const OnOff = require('../models/onoff');
const nba = require('nba.js').default;
const app = express();
let array = [];
var chunks = [];
var torArray = [];
var torData = [];
var rpmURL = "http://www.espn.com/nba/statistics/rpm/_/page/";
var bbRefURL = "https://www.basketball-reference.com/teams/TOR/2018.html";
var nbaURL = 'https://stats.nba.com/stats/teamplayeronoffdetails';

mongoose.connect('mongodb://localhost/data/db/');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db/")
});

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

app.get('/BBRef', (req, res) => {
    BBR.find({})
    .then(object => {
        res.json(object);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({err});
    })
})

app.get('/onoff', (req, res) => {
    OnOff.find({})
    .then(object => {
        res.json(object);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({err});
    })
})

app.get('/rpm', (req, res) => {
    RPM.find({})
    .then(object => {
        res.json(object);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({err});
    })
})

function getRPM(url) {
    let counter = 0;
    let results = [];
    for (let i=1; i<12; i++){   
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
                    //console.log(torData);
                    storeRPM(torData);
                }
        })
    }
}

function getBBref(url) {
    let testArray = []
    axios.get(url)
    .then(response=> {
        let $ = cheerio.load(response.data.split('all_advanced')[1].split('-->')[0].split('<!--')[1]);
        let data = $('table')
            .find('tr')
            .map((i, row) => {
                db.dropCollection("bbrs", function(err, result) {
                    assert.equal(null, err);})
                let newBBR = new BBR (
                    {
                        name: $(row.children[1]).text(),
                        OWS: $(row.children[18]).text(),
                        DWS: $(row.children[19]).text(),
                        WS: $(row.children[20]).text(),
                        WS48: $(row.children[21]).text(),
                        OBPM: $(row.children[23]).text(),
                        DBPM: $(row.children[24]).text(),
                        BPM: $(row.children[25]).text(),
                        VORP: $(row.children[26]).text(),
                    }
                );
                newBBR.save()
                .then(bbr=> {
                    console.log('BBR object saved')
                })
            })
    })

}

function getNBA(){
    nba.stats.teamOnOffCourtStats({TeamID: 1610612761, PerMode: 'Per100Possessions', Season: '2017-18', MeasureType: 'Advanced'})
    .then(res => {
        //console.log(res);
        db.dropCollection("onoffs", function(err, result) {assert.equal(null, err);})
            for (let i=0; i<res.PlayersOnCourtTeamPlayerOnOffDetails.length; i++){
            let totalNet = (res.PlayersOnCourtTeamPlayerOnOffDetails[i].net_rating - res.PlayersOffCourtTeamPlayerOnOffDetails[i].net_rating).toFixed(3);
                let newOnOff = new OnOff({
            name: res.PlayersOnCourtTeamPlayerOnOffDetails[i].vs_player_name,
            onOffense: res.PlayersOnCourtTeamPlayerOnOffDetails[i].off_rating,
            onDefense: res.PlayersOnCourtTeamPlayerOnOffDetails[i].def_rating,
            onNet: res.PlayersOnCourtTeamPlayerOnOffDetails[i].net_rating,
            offOffense: res.PlayersOffCourtTeamPlayerOnOffDetails[i].off_rating,
            offDefense: res.PlayersOffCourtTeamPlayerOnOffDetails[i].def_rating,
            offNet: res.PlayersOffCourtTeamPlayerOnOffDetails[i].net_rating,
            totalNet: totalNet
        });
        newOnOff.save()
        .then(onoff => {
            console.log('On/Off object created.')
        })
    }
})
}


getRPM(rpmURL);
//sortRPM(rpmURL);
getBBref(bbRefURL);
getNBA();


function storeRPM(torData) {
    db.dropCollection("rpms", function(err, result) {assert.equal(null, err);})
    for (let i = 0; i<torData.length; i++) {
            let newRPM = RPM(
                {
                    name: torData[i][1],
                    oRPM: torData[i][5],
                    dRPM: torData[i][6],
                    RPM: torData[i][7],
                    wins: torData[i][8]
                }
            );
            newRPM.save()
            .then(rpm => {
                console.log('RPM object created.')
            })
    }
}