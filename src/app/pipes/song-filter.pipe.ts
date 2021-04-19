import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'songFilter'
})
export class SongFilterPipe implements PipeTransform {

  
  transform(value: any, arg: any): any {
    if (arg === '') 
    return value;
    const songResult = [];
    for (const song of value) {
      if (song.title.toLowerCase().startsWith(arg.toLowerCase()) || song.performer.toString().toLowerCase().startsWith(arg.toLowerCase()) ) {
        songResult.push(song);
        
      }
    }
    return songResult;
  }
}