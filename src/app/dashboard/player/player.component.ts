import {Component, Input, OnInit} from '@angular/core';
import {Song} from "../../shared/song.model";
import {Album} from "../../shared/album.model";

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

    @Input() song:Song;
    @Input() album:Album;

    constructor() {
        this.song = new Song('In The End', 'Linkin Park', '1yw1Tgj9-VU');
        this.album = new Album('Linkin Park', 'Hybrid Theor',
        'https://lastfm-img2.akamaized.net/i/u/174s/287bc1657795451399d8fadf64555e91.png');
    }

    ngOnInit() {
        console.log(this.song);
        console.log(this.album);
    }

    addToPlaylist() {

    }

}
