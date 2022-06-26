import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  userName: any = 'Amira salah'
  userPayment: any = '200$'
  constructor() { }

  ngOnInit(): void {
  }
  // goToList(){
  //   this.router.navigate("/list")
  // }
  showMessage(){
    console.log("iam child")
  }

}
