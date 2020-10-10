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

  editClient: number = -1;

  constructor() {}

  ngOnInit(): void {}

  save() {
    if (this.editClient == -1) {
      this.clients.push({
        name: this.name,
        age: this.age,
        food: this.food,
      });
    } else {
      this.clients[this.editClient].name = this.name;
      this.clients[this.editClient].age = this.age;
      this.clients[this.editClient].food = this.food;
      this.editClient = -1;
    }

    this.name = '';
    this.age = null;
    this.food = '';
  }

  edit(i: number) {
    this.name = this.clients[i].name;
    this.age = this.clients[i].age;
    this.food = this.clients[i].food;
    this.editClient = i;
  }

  delete(i: number) {
    this.clients.splice(i, 1);
  }
}
