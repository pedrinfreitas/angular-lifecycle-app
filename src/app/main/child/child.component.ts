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

export interface LifeCycleEvent {
  id: number;
  name: string;
  color: string;
}

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

  public events: LifeCycleEvent[] = [];
  nextEventId: number = 0;

  colors: string[] = ['accent', 'warn', 'primary'];

  constructor() {
    console.log(`${this.name} - constructor`);
    this.newEvent("constructor");
  }

  ngOnInit(): void {  
    console.log(`${this.name} - ngOnInit`);
    this.newEvent("ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges) {

    console.log(`${this.name} - ngOnChanges`);
    console.log(changes);
    this.newEvent("ngOnChanges");

    for( let propName in changes){
      console.log(propName);
      console.log(changes[propName]);
      
    }
    // if (changes['name']) {
    //   console.log('novo nome: ' + changes['name'].currentValue);
      
    // }
  }

  ngAfterContentInit() {
    console.log(`${this.name} - ngAfterContentInit`);
    this.newEvent("ngAfterContentInit");
  }

  ngAfterViewInit() {
    console.log(`${this.name} - ngAfterViewInit`);
    this.newEvent("ngAfterViewInit");
  }

  ngOnDestroy() {
    console.log(`${this.name} - ngOnDestroy`);
    this.newEvent("ngOnDestroy");
  }

  newEvent(name: string) {
    let id = this.nextEventId++;
    this.events.push({ 
      id: id, 
      name: name, 
      color: this.colors[id%this.colors.length] 
    });
    console.log(`Cor-> ${id%this.colors.length}`);
    
    setTimeout(()=>{
      let idx = this.events.findIndex(e => e.id==id);
      if(idx >= 0){
        this.events.splice(idx, 1);
      }
    }, 2000 + this.events.length*1000)
  }
}
