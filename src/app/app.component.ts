import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  hideCompleted = false;

  getName() {
    return this.model.user;
  }

  getItems(){
    if(this.hideCompleted) return this.model.items.filter(item=>!item.check_state);
    return this.model.items;
  }

  addItem(value: any){
    if(!value) return;
    this.model.items.push(new TodoItem(value,false));
  }
}
