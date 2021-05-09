import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDaterangepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  bsDatepickerConfig: Partial<BsDaterangepickerConfig>;
  preferencesPhone = 'prefPhone';
  gender = 'male';
  isActive = true;
  department = '2';
  departments = [
    {id: 1, name: "HR"},
    {id: 2, name: "Admin"},
    {id: 3, name: "Technology"},
    {id: 4, name: "Engineering"},
    {id: 5, name: "eLearning"},
  ];
  dob: Date = new Date(1992, 3, 2);
  showPreview = false;

  constructor() {
    this.bsDatepickerConfig = Object.assign({}, {containerClass: 'theme-dark-blue', minDate: new Date(2021, 0, 1), maxDate: new Date(2021, 2, 31), dateInputFormat: 'DD/MM/YYYY'})
   }

  ngOnInit(): void {
  }
  saveFormData(empData: NgForm): void {
    console.log(empData)
  }

  imgPreview(){
    this.showPreview = !this.showPreview;
  }

}
