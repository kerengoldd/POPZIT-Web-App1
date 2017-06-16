import {Component, OnDestroy, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {AuthService} from "../auth/auth.service";
import {MusicService} from "../shared/music.service";
import {Router} from "@angular/router";
import {Album} from "../shared/album.model";
import {Song} from "../shared/song.model";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

    bodyClass = 'dashboardBackground';
    albums:Album[] = [];
    songs:Song[] = [];
    selectedAlbum:Album;

    constructor(public authService:AuthService,
                private musicService:MusicService,
                private route:Router) { }

    ngOnInit() {
        $('body').addClass(this.bodyClass);
        if(this.musicService.selectedAlbums.length === 0) {
            this.route.navigate(['/category']);
        }
        this.albums = this.musicService.selectedAlbums;
    }

    ngOnDestroy() {
        $('body').removeClass(this.bodyClass);
    }

    loadAlbum(album:Album) {
        this.songs = album.songs;
        this.selectedAlbum = album;
        console.log(this.selectedAlbum);
        console.log(this.songs);
    }

    loadSong(song:Song) {
        console.log(song);
    }
}
