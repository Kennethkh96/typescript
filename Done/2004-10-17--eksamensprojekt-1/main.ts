class Track
{
    private artist: string;
    private songName: string;
    private min: number;
    private sec: number;

    constructor(artist: string, songName: string, min: number, sec: number)
    {
        this.artist = artist;
        this.songName = songName;
        this.min = min;
        this.sec = sec;
    }

    toString(): string
    {
        return this.songName + " (" + this.min + ":" + this.sec + ")";  
    }

    getDuration(): number
    {
        return this.min + (this.sec / 60);
    }

    getArtist(): string
    {
        return this.artist;
    }

    getSongname(): string
    {
        return this.songName;
    }
}


class PlayList
{
    private playListName: string;
    private tracks: Track[];
    
    constructor(playListName: string)
    {
        this.playListName = playListName;
        this.tracks = [];
    }
    
    addTrack(t: Track): void
    {
        this.tracks.push(t);
    }
    
    removeTrack(t: Track): void
    {
        this.tracks.slice(this.tracks.indexOf(t), 1);
    }
    
    findShortestTrack(): Track
    {
        let res = this.tracks[0];
        for (let i = 1; i < this.tracks.length; i++)
        {
            if (this.tracks[i].getDuration() < res.getDuration())
            res = this.tracks[i];
        }
        
        return res;
    }

    sortPlayList()
    {
        this.tracks.sort(this.mySort);
    }

    mySort(a: Track, b: Track)
    {
        let name = a.getArtist().localeCompare(b.getArtist());
        let songName = a.getSongname().localeCompare(b.getSongname());

        return name || songName;
    }

    printPlayList(): void
    {
        for (let i = 0; i < this.tracks.length; i++)
        {
            console.log(this.tracks[i].toString());
        }
    }
}

class Driver
{
    static exam(): void
    {
        let t1 = new Track("james", "Love", 2, 30);
        let t2 = new Track("lisa", "baby", 1, 5);
        let t3 = new Track("a", "aaby", 1, 5);
        let t4 = new Track("a", "baby", 1, 5);
        console.log(t1.toString());
        console.log(t2.toString());
        let pl = new PlayList("plailst");
        pl.addTrack(t1);
        pl.addTrack(t2);
        pl.addTrack(t3);
        pl.addTrack(t4);
        console.log(pl.findShortestTrack().toString());
        pl.sortPlayList();
        pl.printPlayList();
    }
}

Driver.exam();