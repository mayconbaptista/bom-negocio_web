import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  
  private baseUrl: string = 'http://localhost:3000/';

  constructor(
    private httpClient: HttpClient
  ) 
  { }

  public GetbyId<T>(url: string, id: number):Observable<T> {
    return this.httpClient.get<T>(`${this.baseUrl}${url}/${id}`);
  }

  protected ParseParams(params: any, httpParams:HttpParams = new HttpParams()): HttpParams {
    
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.set(key, params[key]);
      }
    }
    
    return httpParams;
  }
}
