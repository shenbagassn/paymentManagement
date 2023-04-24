import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { log } from 'console';

@Component({
  selector: 'app-addpayment',
  templateUrl: './addpayment.component.html',
  styleUrls: ['./addpayment.component.css']
})
export class AddpaymentComponent implements OnInit {

  nametxtbox:string='';
  pricebox:any='';
  cardnobox:any='';

  constructor(public pymnt1:PaymentService) { }

  ngOnInit(): void {
  }
  addPayment(name:string,price:number,cardno:number){
    console.log("add payment method called");
    
this.pymnt1.serviceAddPayment(name,price,cardno);
  }

}
