import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CustomerService} from "../../services/customer.service";
import { ICustomerType } from 'src/app/model/customerType';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {

  public formCreateNewCustomer:FormGroup
  public customerTypes!: ICustomerType[];

  constructor(public _formBuilder:FormBuilder,
              public _customerService:CustomerService,
              public _router:Router) { }

  ngOnInit(): void {
    this._customerService.getAllCustomerType().subscribe(data => {
      this.customerTypes = data;
    }, error => {
      console.log('Failed to get list customer type!');
    });

    this.formCreateNewCustomer=this._formBuilder.group({
      cus_id: ['',[Validators.required,Validators.pattern("^KH-[\\d]{4}$")]],
      cus_type: ['',[Validators.required]],
      name: ['',[Validators.required]],
      birthday: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      id_card: ['',[Validators.required,Validators.pattern('^[0-9]{9}$|^[0-9]{12}$')]],
      phone: ['',[Validators.required, Validators.pattern('^(090|091|([\(]84[\)][\+]90)|([\(]84[\)][\+]91))[0-9]{7}$')]],
      email: ['',[Validators.required,Validators.email]],
      address: ['',[Validators.required]]
    })
  }

  createCustomer() {
    this._customerService.create(this.formCreateNewCustomer.value).subscribe(data=>{
      this._router.navigateByUrl('customer-list');
    })
    console.log(this.formCreateNewCustomer);
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
