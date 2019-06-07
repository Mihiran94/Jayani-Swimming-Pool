import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  removeEmployee(id: string) {
    return this.http.delete(`http://localhost:5000/employee/employee/${id}`,
      { headers: { Authorization: `Bearer ` } });
  }

  updateEmployee(values) {
    return this.http.put(`http://localhost:5000/employee/employee/${values._id}`, values,
      { headers: { Authorization: `Bearer ` } });
  }

  addEmployee(values) {
    return this.http.post(`http://localhost:5000/employee/employee/seed`, values,
      { headers: { Authorization: `Bearer ` } });
  }

  getEmployee() {
    return this.http.get('http://localhost:5000/employee/employee',
      { headers: { Authorization: `Bearer ` } });
  }
}




