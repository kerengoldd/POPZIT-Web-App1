import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if(value.toString().length > 17) {
            return <string>value.substr(0,15) + "...";
        }
        return value;
    }

}
