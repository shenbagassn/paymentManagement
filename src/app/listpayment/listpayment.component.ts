import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-listpayment',
  templateUrl: './listpayment.component.html',
  styleUrls: ['./listpayment.component.css']
})
export class ListpaymentComponent implements OnInit {
  paymentArray:any[]=[];
  searchValue:any='';
  selectOption:string='';

  constructor(pymnt2:PaymentService) {
    this.paymentArray=pymnt2.servicePaymentArray;
   }

  ngOnInit(): void {
  }

}
