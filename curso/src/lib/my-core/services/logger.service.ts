import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  private readonly nivel: number;
  constructor() {
    this.nivel = 99;
  }

  public error(message: string): void {
    if (this.nivel > 0) {
      console.error(message);
    }
  }

  public warn(message: string): void {
    if (this.nivel > 1) {
      console.warn(message);
    }
  }

  public info(message: string): void {
    if (this.nivel > 2) {
      if (console.info) {
        console.info(message);
      } else {
        console.log(message);
      }
    }
  }

  public log(message: string): void {
    if (this.nivel > 3) {
      console.log(message);
    }
  }
}
