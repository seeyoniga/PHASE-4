import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products=[{"name":"Seeyoniga Prince","email":"seeyo@gmail.com"},
  {"name":"Alex","email":"alex@gmail.com"},
  {"name":"John","email":"john@gmail.com"},
  {"name":"Leah","email":"leah@gmail.com"},
  {"name":"Mohan","email":"mohan@gmail.com"},
]
//used for if
flag=false;

show(){
  this.flag=!this.flag;
}

//used for switch case
public day= new Date().getDay();
}