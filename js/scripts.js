const wikiSearch = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";

$(document).ready(function () {

    $('#wikipediaSearch').keypress(function (e) {
        var key = e.which;
        if(key == 13 )  // the enter key code
         {
            $('#wikipediaSearchButton').click();
           return false;  
         }
       });   

    $('#wikipediaSearchButton').click(function () {
        $.ajax({
            dataType: "jsonp",
            type: 'GET',
            url: wikiSearch + $('#wikipediaSearch').val(),
            data: null,
            success: function (data) {
                console.log(data);
                var par = '';
                for (var i = 0; i < data[1].length; i++) {
                    if (data[1][i] && data[2][i]) {
                    par += `<p class="search-row">${i}. <b>${data[1][i]}</b> - ${data[2][i]}<p><br>`
                    }
                }
                $('.search-data').html(par);
            }
        });
    });

    $('#wikipediaRandomButton').click(function () {
        var win = window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank');
        win.focus();
    });
});