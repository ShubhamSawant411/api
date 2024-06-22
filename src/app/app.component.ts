import { Component, inject } from '@angular/core';
import { ApicallService } from './apicall.service';

type obj={
  name: string,
  age: string,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private apicall = inject(ApicallService);
  data:any;
  constructor(apicall: ApicallService) {
    this.apicall.getUsers().subscribe(data => {
      this.data=data;
      console.log(this.data);
    });
  }
  
  
  obj!:obj;
  addUser(name:string, age:string){
    this.obj={
      name: name,
      age: age,
    }
    console.log(this.obj);
    this.apicall.addUsers(this.obj).subscribe();
    this.apicall.getUsers().subscribe(data => {
      this.data=data;
      console.log(this.data);
    });    
  }
  
  
  onDlt(id: string) {
  this.apicall.dlt(id).subscribe();
  this.apicall.getUsers().subscribe(data => {
    this.data=data;
    console.log(this.data);
  });      }

  
  title = 'api-consumption';
}
