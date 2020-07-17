import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'todo-app';
  projects : project[] =[
    {name:"new Project" , description:"bbbb"},
    {name:"sample Project" , description:"bbbb"}
  ];
  //a service that connect to API and get project category to bind in view
  /*
  Category Name , description, Id, channel url , image address 

  */
}


export class project {
  name : string ;
  description : string ;
}

