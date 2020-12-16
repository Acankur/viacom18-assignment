import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })

export class ItemService {

  public loadingSubject = new Subject<any>();
  public loadingSubject$ = this.loadingSubject.asObservable();
  private posts: any;
  constructor(private http: HttpClient) { }

  getCity() {
    return this.http.get('http://localhost:3000/').pipe(
      map(data => {
        return data['result'];
        }));
  }
}