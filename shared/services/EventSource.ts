import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AppModule } from 'src/app/app.module';

/* 
    providedIn: AppModule => avaible on AppModule level
    providedIn: "root"  => application level injector
    providedIn: "platform" =>  injectable throught out all the applications 
    providedIn: "any" => "injectable anywhere"  
*/
@Injectable({
  providedIn: 'root', 
})
export class EventSource {
  private subject = new Subject();

  emit(eventName: string, payload: any) {
    this.subject.next({ eventName, payload });
  }

  listen(eventName: string, callback: (event: any) => void) {
    this.subject.asObservable().subscribe((nextObj: any) => {
      if (eventName === nextObj.eventName) {
        callback(nextObj.payload);
      }
    });
  }
}

// export default new EventSource();
