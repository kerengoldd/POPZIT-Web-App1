import {Album} from "./album.model";

export class Subgenre {

    constructor(public name:string,
                public albums:Album[]) {}
}