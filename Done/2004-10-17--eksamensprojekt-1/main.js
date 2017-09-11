"use strict";
var Track = /** @class */ (function () {
    function Track(artist, songName, min, sec) {
        this.artist = artist;
        this.songName = songName;
        this.min = min;
        this.sec = sec;
    }
    Track.prototype.toString = function () {
        return this.songName + " (" + this.min + ":" + this.sec + ")";
    };
    Track.prototype.getDuration = function () {
        return this.min + (this.sec / 60);
    };
    Track.prototype.getArtist = function () {
        return this.artist;
    };
    Track.prototype.getSongname = function () {
        return this.songName;
    };
    return Track;
}());
var PlayList = /** @class */ (function () {
    function PlayList(playListName) {
        this.playListName = playListName;
        this.tracks = [];
    }
    PlayList.prototype.addTrack = function (t) {
        this.tracks.push(t);
    };
    PlayList.prototype.removeTrack = function (t) {
        this.tracks.slice(this.tracks.indexOf(t), 1);
    };
    PlayList.prototype.findShortestTrack = function () {
        var res = this.tracks[0];
        for (var i = 1; i < this.tracks.length; i++) {
            if (this.tracks[i].getDuration() < res.getDuration())
                res = this.tracks[i];
        }
        return res;
    };
    PlayList.prototype.sortPlayList = function () {
        this.tracks.sort(this.mySort);
    };
    PlayList.prototype.mySort = function (a, b) {
        var name = a.getArtist().localeCompare(b.getArtist());
        var songName = a.getSongname().localeCompare(b.getSongname());
        return name || songName;
    };
    PlayList.prototype.printPlayList = function () {
        for (var i = 0; i < this.tracks.length; i++) {
            console.log(this.tracks[i].toString());
        }
    };
    return PlayList;
}());
var Driver = /** @class */ (function () {
    function Driver() {
    }
    Driver.exam = function () {
        var t1 = new Track("james", "Love", 2, 30);
        var t2 = new Track("lisa", "baby", 1, 5);
        var t3 = new Track("a", "aaby", 1, 5);
        var t4 = new Track("a", "baby", 1, 5);
        console.log(t1.toString());
        console.log(t2.toString());
        var pl = new PlayList("plailst");
        pl.addTrack(t1);
        pl.addTrack(t2);
        pl.addTrack(t3);
        pl.addTrack(t4);
        console.log(pl.findShortestTrack().toString());
        pl.sortPlayList();
        pl.printPlayList();
    };
    return Driver;
}());
Driver.exam();
