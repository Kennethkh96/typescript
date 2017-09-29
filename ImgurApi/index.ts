$('#search_word').keydown(function (e) {
    if (e.keyCode == 13)
        CallApi();
});
$('#search').click(function() {
    CallApi();
});

function CallApi()
{
    let params = GetSearchParams();
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
function GetSearchParams()
{
    let clientID = $('#api_key').val();
    let searchWord = $('#search_word').val();

    if (clientID === undefined || clientID.toString().length === 0)
        return null;
    else if (searchWord === undefined || searchWord.toString().length === 0)
        return null;

    return {clientID, searchWord};

}

function FindImages(data: any)
{
    let imgs = [];
    for (let index = 0; index < data.length; index++) {
        let elem = data[index];
        if (elem['images'] === undefined)
            continue;
        for (let j = 0; j < elem['images'].length; j++) {
            let element = elem['images'][j];
            imgs.push(element.link);
        }
    }
    PrintImages(imgs);
}

function PrintImages(arr: any)
{
    $('#images').children().remove();
    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        let img = GenerateImage(element);
        $('#images').append(img);
    }

}
function GenerateImage(element: any) {
    return $('<img />', {
        src: element,
        alt: 'MyAlt',
        class: 'imgclass'
    });
}