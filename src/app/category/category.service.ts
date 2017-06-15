import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Subgenre} from "./subgenre.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class CategoryService {

    selectedSubgenres:Subgenre[] = [];

    constructor(private http:Http) {}

    getSubgenres() {
        return this.http.get('http://localhost:3000/subgenre')
            .map( (response) => {
                const subgenresJson = response.json();
                // console.log(categoriesJson);
                let transformedSubgenres:Subgenre[] = [];
                for(let category of subgenresJson) {
                    let albums = [];
                    for(let album of category.albums) {
                        albums.push(album);
                    }
                    transformedSubgenres.push(new Subgenre(
                        category.name,
                        albums
                    ));
                }
                return transformedSubgenres;
            })
            .catch( (error:Response) => Observable.throw(error.json() ))
    }

}