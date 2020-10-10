import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() name: string;
  @Input() age: number;
  @Input() food: string;

  constructor() {}

  ngOnInit(): void {}
}
