/* Coded by Paliy Rostyslav. e-mail: paliy1984@gmail.com. skype: ros.coprandos  !!!SYLB!!! */


window.onload = function () {

    getData();

}


var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "streamerhouse"];


function getData() {

    for (i = 0; i < streamers.length; i++) {

        $.ajax({
            type: 'GET',
            url: "https://api.twitch.tv/kraken/streams/" + streamers[i],
            headers: {
                'Client-ID': "oix1w0jfdbsvzmjjugqyw46n2iz26v1"
            },

            success: takeData

        });
    }
}

var streamersArray = [];

console.log(streamersArray);
console.log(streamersArray.length);

function takeData(data) {

    streamersArray.push(data);

}




/*

$.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/kraken/streams/streamerhouse',
    headers: {
        'Client-ID': 'oix1w0jfdbsvzmjjugqyw46n2iz26v1'
    },
    success: function (data) {
        console.log(data);
    }
});

$.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/kraken/streams/freecodecamp',
    headers: {
        'Client-ID': 'oix1w0jfdbsvzmjjugqyw46n2iz26v1'
    },
    success: function (data) {
        console.log(data);
    }
});
*/
