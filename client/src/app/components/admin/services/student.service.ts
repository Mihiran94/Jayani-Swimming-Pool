import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/components/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  // unassignSubject(student, subject) {
  //   return this.http.put(`http://localhost:8080/admin/student/subject`, { student, subject },
  //     { headers: { Authorization: `Bearer ` } });
  // }

  // assignSubject(student, subject) {
  //   return this.http.post(`http://localhost:8080/admin/student/subject`, { student, subject },
  //     { headers: { Authorization: `Bearer ` } });
  // }

  // elegibleSubjects(course: string) {
  //   return this.http.get(`http://localhost:8080/admin/student/subject/${course}`,
  //     { headers: { Authorization: `Bearer ` } });
  // }

  removeItem(id: string) {
    return this.http.delete(`http://localhost:5000/api/item/${id}`,
      { headers: { Authorization: `Bearer ` } });
  }

  updateItem(values) {
    return this.http.put(`http://localhost:5000/api/item/${values._id}`, values,
      { headers: { Authorization: `Bearer ` } });
  }

  addItem(values) {
    return this.http.post(`http://localhost:5000/api/item/seed`, values,
      { headers: { Authorization: `Bearer ` } });
  }

  getItems() {
    return this.http.get('http://localhost:5000/api/items',
      { headers: { Authorization: `Bearer ` } });
  }
}
