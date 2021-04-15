import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) 
    return value;
    const songResult = [];
    for (const song of value) {
      if (song.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        songResult.push(song);
        
      }
    }
    return songResult;
  }
}