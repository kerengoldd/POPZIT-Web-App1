import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import {Subgenre} from "./subgenre.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {Album} from "./album.model";
import {Song} from "app/shared/song.model";

@Injectable()
export class MusicService {

    selectedAlbums:Album[] = [];

    constructor(private http:Http) {}

    getSubgenres() {
        return this.http.get('http://localhost:3000/subgenre')
            .map( (response) => {
                const subgenresJson = response.json();
                let transformedSubgenres:Subgenre[] = [];
                for(let subgenre of subgenresJson) {
                    let albums = [];
                    for(let album of subgenre.albums) {
                        albums.push(album);
                    }
                    transformedSubgenres.push(new Subgenre(subgenre.name, albums));
                }
                return transformedSubgenres;
            })
            .catch( (error:Response) => Observable.throw(error.json() ))
    }


    //noinspection JSMethodCanBeStatic
    initPlaylist(selectedSubgenres:Subgenre[]) {
        for(let subgenre of selectedSubgenres) {
            this.selectedAlbums.push(...subgenre.albums);
        }
        console.log(this.selectedAlbums.length);
    }


    initSong(song:Song) {

    }

    //noinspection JSMethodCanBeStatic
    loadSongsFromAlbum(album:Album) {
        // console.log(album.songs);
        //
        // const body = JSON.stringify(album);
        // const headers = new Headers({'Content-Type': 'application/json'});
        //
        // return this.http.post('http://localhost:3000/subgenre/album_songs', body, {headers: headers})
        //     .map( (response) => {
        //         const jsonResponse = response.json();
        //         console.log(jsonResponse);
        //     })
        //     .catch( (error:Response) => Observable.throw(error.json() ))

    }

}