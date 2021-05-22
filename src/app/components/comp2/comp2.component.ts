import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component implements OnInit {
  constructor(private appService: AppService) {}

  ngOnInit(): void {}

  onInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.appService.userTypes$.next(value);
  }
}
