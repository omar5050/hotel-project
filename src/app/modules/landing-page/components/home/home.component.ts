import { Component } from '@angular/core';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 
})
export class HomeComponent {
  count: number = 0;
  
  // counter(type: string) {
    
  //   type === 'plus' ? this.count++ : this.count--;
  // }
  increment() {
    this.count++;
  }
  decrement() {
    if(this.count>0)
    this.count--;
  }

  campaignOne = new FormGroup({
    start: new FormControl(new Date(year,13 , month)),
    end: new FormControl(new Date(year,16 , month)),
  });

}
