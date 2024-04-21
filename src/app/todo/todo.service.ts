import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { TodoItem } from 'shared/modules/todoItem';
import { catchError, skip, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getStandardOptions(): any{
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }
  }
  getTodos(){
    let options = this.getStandardOptions()
    //Adding params to query
    options.params =  new HttpParams({
      fromObject: {
        //limit: 4,
        fomat: "json"
      }
    })
    //return this.http.get("https://dummyjson.com/todos/user/5", options).pipe(catchError(this.handleError))
    return this.http.get("assets/todos.json", options).pipe(catchError(this.handleError))
  
  }
  private handleError(error: HttpErrorResponse){
    if(error.status === 0) {
      console.error("Client or network issue", error.error)
    } else {
      console.error("Server side error", error.error)
    }
    return throwError(() => "Cannot retrieve todos from the srever, please try again")
  }

  addTask(task: TodoItem){ // private so it cannot be used outside the class
    // this.http.post(url, body, options)
    let options = this.getStandardOptions();
    //update headers
    options.headers = options.headers.set("Authorization", "value")
    return this.http.post("https://dummyjson.com/todos/add", task, options)

  }
}
