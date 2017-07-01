import {Component, OnDestroy, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {AuthService} from "../auth/auth.service";
import {MusicService} from "../shared/music.service";
import {Router} from "@angular/router";
import {Album} from "../shared/album.model";
import {Song} from "../shared/song.model";
import {forEach} from "@angular/router/src/utils/collection";

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
    selectedSong:Song;

    constructor(public authService:AuthService,
                private musicService:MusicService,
                private route:Router) {innerHeight = window.outerHeight }

    ngOnInit() {
        $('body').addClass(this.bodyClass);
        if(this.musicService.selectedAlbums.length === 0) {
            this.route.navigate(['/category']);
        }
        this.albums = this.musicService.selectedAlbums;
    }

    ngOnDestroy() {
        $('body').removeClass(this.bodyClass);
        this.musicService.selectedAlbums = [];
    }

    loadAlbum(album:Album) {
        this.songs = album.songs;
        for(let song of this.songs) song.album = album;
        this.selectedAlbum = album;
    }

    playSong(song:Song) {
        this.musicService.initSong(song)
            .subscribe( (parsedSong:Song) => {
                this.selectedSong = song = parsedSong;
            });
    }

    addToPlaylist(song:Song) {
        this.musicService.addSongToPlaylist(song);
    }
}
