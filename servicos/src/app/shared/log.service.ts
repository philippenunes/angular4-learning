import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  consoleLogmsg(msg: string) {
    console.log(msg);
  }

}
