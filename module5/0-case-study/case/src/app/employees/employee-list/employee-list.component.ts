import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employees;
  public searchValue!:string;
  public fullName!:string;
  public id!:number;

  constructor(public _employeeService:EmployeeService,
              private _router:Router,
              private _activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this._employeeService.getAllEmployees().subscribe(data=>{
      this.employees=data;
    })
  }

  doSearch(){
    this._employeeService.search(this.searchValue.trim()).subscribe(
      (data) => this.employees = data
    );
  }
  deleteEmp(id:number){
    this._employeeService.delete(id).subscribe(data=>{
      // this.router.navigateByUrl('listCus');
      this.ngOnInit();
    })
  }
  getEmployeeName(id:number){
    this._employeeService.findById(id).subscribe(data=>{
      this.fullName=data.fullName;
      this.id=data.id;
    });
  }
}
