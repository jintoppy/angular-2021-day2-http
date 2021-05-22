import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  userTypes: string[] = [];
  constructor(private appService: AppService) {
    this.appService.userTypes$
      .pipe(
        debounceTime(1000),
        filter((data) => data.startsWith('a'))
      )
      .subscribe((newItem) => {
        this.userTypes = [...this.userTypes, newItem];
      });
  }

  ngOnInit(): void {}
}
