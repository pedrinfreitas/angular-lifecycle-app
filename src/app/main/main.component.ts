import { Client } from './../client.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  foods: string[] = ['laranja', 'banana', 'pizza'];
  clients: Client[] = [];

  name: string;
  age: number;
  food: string;

  editClient: Client = null;

  constructor() {}

  ngOnInit(): void {}

  save() {
    if (this.editClient == null) {
      this.clients.push({
        name: this.name,
        age: this.age,
        food: this.food
      });
    }
    this.name = "";
    this.age = null;
    this.food = "";
  }
}
