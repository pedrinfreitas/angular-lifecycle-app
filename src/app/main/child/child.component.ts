import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  OnChanges,
  OnDestroy,
  AfterContentInit,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements OnInit, OnChanges, AfterContentInit, AfterViewInit, OnDestroy {
  @Input() name: string;
  @Input() age: number;
  @Input() food: string;

  constructor() {
    console.log(`${this.name} - constructor`);
  }

  ngOnInit(): void {
    console.log(`${this.name} - ngOnInit`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`${this.name} - ngOnChanges`);
  }

  ngAfterContentInit() {
    console.log(`${this.name} - ngAfterContentInit`);
  }

  ngAfterViewInit() {
    console.log(`${this.name} - ngAfterViewInit`);
  }

  ngOnDestroy() {
    console.log(`${this.name} - ngOnDestroy`);
  }
}
