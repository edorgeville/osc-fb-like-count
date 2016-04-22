require('dotenv').load();

var osc = require('node-osc');
var oscClient = new osc.Client('127.0.0.1', process.env.OSC_PORT || 12345);
var fblc = require('fb-like-count');

fblc.client_id = process.env.FB_APP_ID;
fblc.client_secret = process.env.FB_APP_SECRET;

// fblc.debug = true;

setInterval(function(){
  fblc.get(process.env.FB_ID, function(count){
    console.log(count);
    oscClient.send('/' + 'count', count);
  });
}, process.env.INTERVAL || 5000);
