import { Component, OnInit } from '@angular/core';
import { not } from '@angular/compiler/src/output/output_ast';
import { empty } from 'rxjs';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  username = '';
  paragraph = '';
  display = true;
  array: any =   [];
  i = 0;
  constructor() { }

  ngOnInit(): void {
  }
  onclick() {
    // if (this.username !== '') {
    //   this.paragraph = 'Hey ' + this.username + ', How are you?';
    //   this.username = '';
    // }
    if (this.display === true) {
      this.display = false;
    } else {
      this.display = true;
    }
    this.array.push(this.i);
    this.i = this.i + 1;
    console.log(this.array)

  }
  getStyle(){
    return 'background-color: coral;' ;
  }

}
