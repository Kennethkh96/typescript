"use strict";
$('#search_word').keydown(function (e) {
    if (e.keyCode == 13)
        CallApi();
});
$('#search').click(function () {
    CallApi();
});
function CallApi() {
    var params = GetSearchParams();
    if (params === null)
        return;
    $.ajax({
        "url": "https://api.imgur.com/3/gallery/search?q=" + params.searchWord,
        "headers": {
            "authorization": "Client-ID " + params.clientID
        },
        success: function (response) {
            console.log(response);
            FindImages(response['data']);
        }
    });
}
function GetSearchParams() {
    var clientID = $('#api_key').val();
    var searchWord = $('#search_word').val();
    if (clientID === undefined || clientID.toString().length === 0)
        return null;
    else if (searchWord === undefined || searchWord.toString().length === 0)
        return null;
    return { clientID: clientID, searchWord: searchWord };
}
function FindImages(data) {
    var imgs = [];
    for (var index = 0; index < data.length; index++) {
        var elem = data[index];
        if (elem['images'] === undefined)
            continue;
        for (var j = 0; j < elem['images'].length; j++) {
            var element = elem['images'][j];
            imgs.push(element.link);
        }
    }
    PrintImages(imgs);
}
function PrintImages(arr) {
    $('#images').children().remove();
    for (var index = 0; index < arr.length; index++) {
        var element = arr[index];
        var img = GenerateImage(element);
        $('#images').append(img);
    }
}
function GenerateImage(element) {
    return $('<img />', {
        src: element,
        alt: 'MyAlt',
        class: 'imgclass'
    });
}
