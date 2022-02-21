import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  public formEditCustomer: FormGroup
  public customerTypes;
  public cusType;
  public id;
  public name;

  public customerOfId;

  constructor(public _formBuilder: FormBuilder,
              public _customerService: CustomerService,
              public _router: Router,
              public _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._customerService.getAllCustomerType().subscribe(data => {
      this.customerTypes = data;
    }, error => {
      console.log('Failed to get list customer type!');
    });

    this.formEditCustomer = this._formBuilder.group({
      cus_id: ['',[Validators.required,Validators.pattern("^KH-[\\d]{4}$")]],
      cus_type: this._formBuilder.group({
        id: [''],
        name: ['', [Validators.required]]
      }),
      name: ['',[Validators.required]],
      birthday: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      id_card: ['',[Validators.required,Validators.pattern('^[0-9]{9}$|^[0-9]{12}$')]],
      phone: ['',[Validators.required, Validators.pattern('^(090|091|([\(]84[\)][\+]90)|([\(]84[\)][\+]91))[0-9]{7}$')]],
      email: ['',[Validators.required,Validators.email]],
      address: ['',[Validators.required]]
    })

    this._activatedRoute.params.subscribe(data => {
      this.customerOfId = data.id;
      this._customerService.findById(this.customerOfId).subscribe(data => {
        this.formEditCustomer.patchValue(data);
      })
    })
  }

  editCustomer() {
    this._customerService.edit(this.formEditCustomer.value, this.customerOfId).subscribe(data => {
      this._router.navigateByUrl('customer-list');
    })
  }

  changeCustomerType(type: any) {
    this.cusType = JSON.parse(type);
    this.id = this.cusType.id;
    this.name = this.cusType.name;
    console.log(this.cusType);
  }
}
