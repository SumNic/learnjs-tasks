import {Clock} from '../9.1/1.js';

class ExtendedClock extends Clock {

    constructor({template, precision}) {
        super({template});
        this.precision = precision || 1000;
    }

    start() {
        this.render();
        this.timer = setInterval(()=> this.render(), this.precision);
      }
  }
  
  let lowResolutionClock = new ExtendedClock({
    template: 'h:m:s',
    precision: 10000
  });

  lowResolutionClock.start();