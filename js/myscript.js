/* Coded by Paliy Rostyslav. e-mail: paliy1984@gmail.com. skype: ros.coprandos  !!!SYLB!!! */


window.onload = function () {

    getInfo(streamers, infoToArray);

    showOnline();

    showOffline();

    showAll();

}

/*This is an array of streamers. You can add or remove streamers to manage the request to twitch.*/
var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "streamerhouse"];

/*This is an arrays of objects recived form query to twitch.*/
var infoArray = [];


/*This function makes query to twitch, and return CHANNELS INFO*/
function getInfo(arr, callback) {

    for (i = 0; i < arr.length; i++) {

        $.ajax({
            type: 'GET',
            url: "https://api.twitch.tv/kraken/channels/" + arr[i],
            headers: {
                'Client-ID': "oix1w0jfdbsvzmjjugqyw46n2iz26v1"
            },

            success: callback

        });
    }
}


/*Show all channels */
function showAll() {

    $('#allButton').click(function () {

        $('.online').show();

        $('.offline').show();

    });
}


/*Show online channels */
function showOnline() {

    $('#onlineButton').click(function () {

        $('.online').show();

        $('.offline').hide();

    });
}


/*Show offline channels */
function showOffline() {

    $('#offlineButton').click(function () {

        $('.offline').show();

        $('.online').hide();

    });
}


/*This is callback function that pushing objects from getInfo to infoArray*/
function infoToArray(data) {

    infoArray.push(data);

    if (streamers.length == infoArray.length) {

        console.log(infoArray);

        displayCannels();

    }
}


/*This is callback function that pushing objects from getInfo to infoArray*/
function displayCannels() {

    for (i = 0; i < infoArray.length; i++) {

        var main = document.getElementById('main');

        /*Creating 'a' element end setting attrebuts*/
        var link = document.createElement('a');
        link.setAttribute('href', infoArray[i].url);
        link.setAttribute('target', '_blank');
        main.appendChild(link);

        /*Creating 'div' element end setting attrebuts*/
        var div = document.createElement('div');
        link.appendChild(div);
        div.setAttribute('class', 'online');

        /*Creating 'img' element end setting attrebuts*/
        var img = document.createElement('img');
        img.setAttribute('src', infoArray[i].logo);
        div.appendChild(img);

        /*Creating 'h3' element end setting attrebuts*/
        var h3 = document.createElement('h3');
        h3.innerHTML = infoArray[i].display_name;
        div.appendChild(h3);

        /*Creating 'p' element end setting attrebuts*/
        var text = document.createElement('p');
        text.innerHTML = infoArray[i].game;
        div.appendChild(text);

    }

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
