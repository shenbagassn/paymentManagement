import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
servicePaymentArray:any[]=[{username:"shenba",price:500,cardNo:345667544},
{username:"arun",price:900,cardNo:345667544},
{username:"geetha",price:800,cardNo:34564447544},
{username:"hema",price:400,cardNo:34569667544}];



  constructor() { }

  serviceAddPayment(name:string,price:number,card:number){
    console.log(name);
    this.servicePaymentArray.push({username:name,price:price,cardNo:card})

  }

}
