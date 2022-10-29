import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  todos: any[] = [];
  constructor(
    private _http: HttpClient
  ){}

  get(){
    let api = "https://jsonplaceholder.typicode.com/todos";
    this._http.get<any>(api).subscribe({
      next: (res)=> {
        this.todos = res;
      }
    })
  }

  clear(){
    this.todos = []
  }

}
