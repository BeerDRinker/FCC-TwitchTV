/* Coded by Paliy Rostyslav. e-mail: paliy1984@gmail.com. skype: ros.coprandos  !!!SYLB!!! */

/*This is an array of streamers. You can add or remove streamers to manage the request to twitch.*/
var streamers = ["nhtht", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "streamerhouse"];


window.onload = function () {


    for (i = 0; i < streamers.length; i++) {

        requestFoInfoAndStreamming(streamers[i]);

    }

    /*Buttons listeners*/
    showAll();
    showOnline();
    showOffline();
}


/*This function tames getInfo and getStream functions and waits for until bouth requests are done */
function requestFoInfoAndStreamming(name) {

    $.when(getInfo(name), getStream(name)).done(function (channel, streamer) {

        displayCannels(channel, streamer);

    });

}


/*This function makes query to twitch, and return CHANNELS INFO*/
function getInfo(streamers) {

    return $.ajax({
        type: 'GET',
        url: "https://api.twitch.tv/kraken/channels/" + streamers,
        headers: {
            'Client-ID': "oix1w0jfdbsvzmjjugqyw46n2iz26v1"
        }
    });
}


/*This function makes query to twitch, and return CHANNELS THAT IS STREAMING*/
function getStream(streamers) {

    return $.ajax({
        type: 'GET',
        url: "https://api.twitch.tv/kraken/streams/" + streamers,
        headers: {
            'Client-ID': "oix1w0jfdbsvzmjjugqyw46n2iz26v1"
        }
    });
}


/*This function takes data from queries and display online/offline channels and all channels info*/
function displayCannels(channel, streamer) {

    var main = document.getElementById('main');

    /*Creating 'a' element end setting attributes*/
    var link = document.createElement('a');
    link.setAttribute('href', channel[0].url);
    link.setAttribute('target', '_blank');
    main.appendChild(link);

    /*Creating 'div' element, setting attributes and putting it in to 'a' element*/
    var div = document.createElement('div');
    link.appendChild(div);

    if (streamer[0].stream != null) {

        div.setAttribute('class', 'online');

    } else {

        div.setAttribute('class', 'offline');
    }

    /*Creating 'img' element, setting attributes and putting it in to 'div' element*/
    var img = document.createElement('img');
    img.setAttribute('src', channel[0].logo);
    div.appendChild(img);

    /*Creating 'h3' element, setting attributes and putting it in to 'div' element*/
    var h3 = document.createElement('h3');
    h3.innerHTML = channel[0].display_name;
    div.appendChild(h3);

    /*Creating 'p' element, setting attributes and putting it in to 'div' element*/
    var text = document.createElement('p');
    text.innerHTML = channel[0].game;
    div.appendChild(text);

}

/*Show all channels BUTTON*/
function showAll() {

    $('#allButton').click(function () {

        $('.online').show();

        $('.offline').show();

    });
}


/*Show online channels BUTTON*/
function showOnline() {

    $('#onlineButton').click(function () {

        $('.online').show();

        $('.offline').hide();

    });
}


/*Show offline channels BUTTON*/
function showOffline() {

    $('#offlineButton').click(function () {

        $('.offline').show();

        $('.online').hide();

    });
}
