import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder ,Validators} from '@angular/forms';
import {EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-admin-employee',
  templateUrl: './admin-employee.component.html',
  styleUrls: ['./admin-employee.component.css']
})
export class AdminEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
   employee:any;
   selectedEmployee;

   constructor(private fb: FormBuilder, private employeeService: EmployeeService) { }

   ngOnInit() {
    this.createEmployeeForm();
    this.employeeService.getEmployee().subscribe(res => {
      this.employee =res;
    });
  }
  removeEmployee(id) {
    this.employeeService.removeEmployee(id).toPromise().then((data) => {
      this.employee.forEach((item, i) => {
        if (item._id === id) {
          this.employee.splice(i, 1);
        }
      });
      console.log(data);
    });
  }

  updateEmployee(values) {
    this.employeeService.updateEmployee(values).subscribe((res) => {
      console.log(res);
      this.employeeService.getEmployee().subscribe(res => {
        this.employee =res;
      });

    });
  }

  addEmployee(values) {
    if (this.employeeForm.invalid) {
      return;
    }
    this.employeeService.addEmployee(values).subscribe(res => {
      alert('success');
      this.employee.push(res['employee']);
      this.employeeForm.reset();
    });
  }



  createEmployeeForm() {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  get name() {
    return this.employeeForm.get('name');
  }
  get price() {
    return this.employeeForm.get('price');
  }
  get date() {
    return this.employeeForm.get('date');
  }

}





