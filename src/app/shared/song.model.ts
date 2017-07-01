import {Album} from "./album.model";

export class Song {

    constructor(public name:string,
                public artist:string,
                public youtubeId?:string,
                public album?:Album) {}
}