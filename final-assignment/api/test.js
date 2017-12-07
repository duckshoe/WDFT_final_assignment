const nba = require('nba.js').default;
const OnOff = require('../models/onoff');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/data/db/');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db/")
});

function getNBA(){
    nba.stats.teamOnOffCourtStats({TeamID: 1610612761, PerMode: 'Per100Possessions', Season: '2017-18', MeasureType: 'Advanced'})
    .then(res => {
        let testData = res.PlayersOnCourtTeamPlayerOnOffDetails;
        console.log(testData);
        /*let newOnOff = new OnOff({
            name: res.PlayersOnCourtTeamPlayerOnOffDetails[1].name,
            onOffense: res.PlayersOnCourtTeamPlayerOnOffDetails[1].off_rating,
            onDefense: res.PlayersOnCourtTeamPlayerOnOffDetails[1].def_rating,
            onNet: res.PlayersOnCourtTeamPlayerOnOffDetails[1].net_rating,
            offOffense: res.PlayersOffCourtTeamPlayerOnOffDetails[1].off_rating,
            offDefense: res.PlayersOffCourtTeamPlayerOnOffDetails[1].off_rating,
            offNet: res.PlayersOffCourtTeamPlayerOnOffDetails[1].off_rating
        });
        newOnOff.save()
        .then(onoff => {
            console.log('On/Off object created.')
        })*/
    })
}

getNBA();