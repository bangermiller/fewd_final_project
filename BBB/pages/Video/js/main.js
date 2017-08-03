
var playerInstance = jwplayer("player");
playerInstance.setup({
    playlist: "//cdn.jwplayer.com/v2/playlists/DUN8UEub",
    displaytitle: false,
    width: "550",
    height: "315"
});

var list = document.getElementById("list");
var html = list.innerHTML;

playerInstance.on('ready', function() {
    var playlist = playerInstance.getPlaylist();
    for (var index = 0; index < playlist.length; index++) {
        var playindex = index + 1;
        html += "<li><span class='dropt' title='" + playlist[index].title + "'><a href='javascript:playThis(" + index + ")'><img height='75' width='110' src='" + playlist[index].image + "'</img></br>" + playlist[index].title + "</a></br><span style='width:600;'</span></span></li>"
        list.innerHTML = html;
    }

});

function playThis(index) {
    playerInstance.playlistItem(index);
}
