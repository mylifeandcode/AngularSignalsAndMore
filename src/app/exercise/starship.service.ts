import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor() { }

  public power = signal<boolean>(false);

  public powerOn(): void {
    this.power.set(true);
  }

  public powerOff(): void {
    this.power.set(false);
  }
}
