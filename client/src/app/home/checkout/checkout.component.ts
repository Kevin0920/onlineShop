import { Component, OnInit, Input } from '@angular/core';
import { MainService } from './../../main.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  total_item;
  constructor(private _service: MainService, private _router: Router, private authService: AuthService) { }


  ngOnInit() {

    this._service.data.subscribe(
      (data) => {
        this.total_item = data;
        console.log(this.total_item);
      });

  }

  place_order() {
    var summary = "";
    var totalPrice = 0;
    for (var i = 0; i < this.total_item.length; i++) {
      summary += this.total_item[i].quantity + " " + this.total_item[i].food_name + "; "
      totalPrice += this.total_item[i].quantity * this.total_item[i].price;
    }

    var sure = confirm("Your order summary: " + summary + " Total price is: " + totalPrice + " dollars.");
    if (sure == true) {
      this._service.place_order(this.total_item, (res) => {
        console.log(res);
      })
      this.total_item = [];
      this._service.data = null;
    }
    else {
      this.total_item = [];
            
    }

  }

}
