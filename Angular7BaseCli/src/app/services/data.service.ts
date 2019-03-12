import { Injectable } from '@angular/core';
import { Subject, throwError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private http: HttpClient) { }

  public urlApi = 'http://10.11.3.168/BackNetCore/api/';
  private generalNotificationMessage = new Subject<string>();
  private isLoading = new Subject<boolean>();
  public isLogged: boolean;
  public isLoggedEvent = new Subject<boolean>();

  getGeneralNotificationMessage() {
      return this.generalNotificationMessage.asObservable();
  }

  setGeneralNotificationMessage(msg: string){
      this.generalNotificationMessage.next(msg);
  }

  getIsLoadingEvent(){
      return this.isLoading.asObservable();
  }

  setIsLoadingEvent(isLoading: boolean){
      this.isLoading.next(isLoading);
  }

  getIsLogged() {
    return this.isLoggedEvent.asObservable();
  }

  setIsLogged(isLogged: boolean) {
      this.isLogged = isLogged;
      this.isLoggedEvent.next(isLogged);
  }
  
  createHeader(): HttpHeaders {
    // let authToken = localStorage.getItem('auth_token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${authToken}`,
    });
  }
 
  handleError(error: any) {
    console.log(error);
    var message = throwError('');
    if (typeof error.error === 'string') {
      message = throwError(error.error);
    } else {
      message = throwError('Ha ocurrido un error, favor de intentar nuevamente.');
    }
    return message;
  }
 
  post = <T>(url: string, data:T): Observable<T> => {
    // let headers = this.createHeader();
    return this.http
      .post<T>(this.urlApi + url, data, { responseType: 'json'})
      .pipe(catchError(this.handleError));
  }
}
