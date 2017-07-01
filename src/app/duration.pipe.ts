import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {

    transform(value: any, args?: any): any {

        let mins = Math.floor(value/60),
            secs = Math.round(Math.floor(value - mins*60));
        return `${mins < 10 ? "0"+mins : mins}:${secs < 10 ? "0"+secs : secs}`;
    }

}
