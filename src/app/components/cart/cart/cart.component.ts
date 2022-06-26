import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/User';
import { ConfirmationComponent } from '../../confirmation/confirmation/confirmation.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }
@ViewChild(ConfirmationComponent) child:ConfirmationComponent;
userModel= new User('amira','alexandria',1234)

  ngOnInit(): void {
    
  }

  ngAfterInit(){
    console.log(this.child.showMessage())
  }
  logMsg(inputName:any){
  
    console.log(inputName)
  }
}
