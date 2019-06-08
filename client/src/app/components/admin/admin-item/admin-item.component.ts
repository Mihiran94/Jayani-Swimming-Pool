import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.css']
})
export class AdminItemComponent implements OnInit {

  studentForm: FormGroup;
  items: any;
  subjects: any;
  selectedStudent;
  selectedSub;

  constructor(private fb: FormBuilder, private studentService: StudentService) { }

  ngOnInit() {
    this.createStudentForm();
    this.studentService.getItems().subscribe(res => {
      this.items = res;
    });
  }



removeItem(id) {
  this.studentService.removeItem(id).toPromise().then((data) => {
    this.items.forEach((item, i) => {
      if (item._id === id) {
        this.items.splice(i, 1);
      }
    });
    console.log(data);
  });
}

saveItem(values) {
  this.studentService.updateItem(values).subscribe((res) => {
    console.log(res);
  });
}

addItem(values) {
  if (this.studentForm.invalid) {
    return;
  }
  this.studentService.addItem(values).subscribe(res => {
    this.items.push(res['item']);
    this.studentForm.reset();
  });
}



createStudentForm() {
  this.studentForm = this.fb.group({
    name: ['', Validators.required],
    code: ['', Validators.required],
    price: ['', Validators.required],
    date: ['', Validators.required],
  });
}

get name() {
  return this.studentForm.get('name');
}
get code() {
  return this.studentForm.get('code');
}
get price() {
  return this.studentForm.get('price');
}
get date() {
  return this.studentForm.get('date');
}


}
