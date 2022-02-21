import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public API: string = 'http://localhost:3000/customers';
  public API_TYPE = 'http://localhost:3000/customerTypes';

  constructor(private _http: HttpClient) {
  }

  getAllCustomerType(): Observable<any[]> {
    return this._http.get<any[]>(this.API_TYPE);
  }

  getAllCustomers(): Observable<any> {
    return this._http.get(this.API);
  }

  findById(id: number): Observable<any> {
    return this._http.get<any>(this.API + "/" + id);
  }

  search(search: string): Observable<any[]> {
    return this._http.get<any[]>(this.API + '?name_like=' + search);
  }

  create(customer): Observable<any> {
    return this._http.post(this.API, customer);
  }

  delete(id: number): Observable<any> {
    return this._http.delete<any>(this.API + "/" + id)
  }

  edit(customer, customerId): Observable<any> {
    return this._http.put(this.API + "/" + customerId, customer);
  }
}