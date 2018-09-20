import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl : string = "api/Register";

constructor(private http : HttpClient) { }

createUser(register : Register){
  return this.http.post(`${this.baseUrl}`,register);
}

}
