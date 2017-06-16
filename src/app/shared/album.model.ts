import {Song} from "./song.model";

export class Album {

    constructor(public artist:string,
                public name:string,
                public imagePath?:string,
                public songs?:Song[]) {}
}