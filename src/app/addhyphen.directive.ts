import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAddhyphen]'
})
export class AddhyphenDirective {
  @Input() cardnum:any;
  constructor(public elmtRef:ElementRef) { 
    console.log("custom directive rendered");
   // console.log(this.cardnum);
  console.log(elmtRef.nativeElement.value);
   
    
  }

@HostListener('keyup') myKeyUp(){
  var str= this.elmtRef.nativeElement.value;//getter
  if(str.length>19){
    this.elmtRef.nativeElement.value= str.substr(0,19);
  }
  if(str.length==4||str.length==9||str.length==14){
   
    str= str + "-";
    this.elmtRef.nativeElement.value=str;
  }
}

}
