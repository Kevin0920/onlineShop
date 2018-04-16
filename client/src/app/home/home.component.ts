import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
import io from "socket.io-client";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  current_user = null;
  all_foods;
  item = null;
  user: SocialUser;
  loggedIn: boolean;
  imageurl = "https://botw-pd.s3.amazonaws.com/styles/logo-original-577x577/s3/0010/8217/brand.gif";
  socket;
  total_login_user = [];
  lat: number = 37.335480;
  lng: number = -121.893028;
  zoom: number = 12;

  constructor(private _service: MainService, private _router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.socket = this._service.socket;
    this.authService.authState.subscribe((user) => {
      this.loggedIn = (user != null);
      if (user != null) {

        this.imageurl = user.photoUrl
        this._service.social_user = user;
        this._service.check_user(user, (res) => {
          if (res.message == "yes") {
            console.log("success social login");
            this._service.social_user = res.user;
            localStorage.social_user = JSON.stringify(res.user);
            this.current_user = res.user;
            this._service.connect(res.user);
          }
          else if (res.message == "none") {
            console.log(res);
            this._router.navigate(["/update"]);
          }
        })
      }
    });
    if (this._service.user) {
      this.current_user = this._service.user;
      this._service.connect(this.current_user);
      this.loggedIn = false
    }

    this._service.retrieveAllFood((res) => {
      res.map((ele) => {
        return ele.quantity = null;
      })
      this.all_foods = res;
      console.log(res);
    })

    this._service.login_users.subscribe(
      (data) => {
        this.total_login_user = data;
      });

    this.socket.on('updatelike', function (data) {
      this._service.retrieveAllFood((res) => {
        res.map((ele) => { return ele.quantity = null; })
        this.all_foods = res;
        // console.log(res);
      })
    }.bind(this));

  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.socket.emit('logout', { user: this.current_user });
    if (this.loggedIn === true) {
      this.authService.signOut();
      localStorage.removeItem("social_user");
      this.current_user = null;
      this._service.logout();
    }
    else {
      this._service.logout();
      this.current_user = null;
    }

  }

  create_order(food) {
    const new_food = Object.assign({}, food);
    // console.log(new_food);
    this._service.updateData(new_food);
    food.quantity = null;

  }

  delete_food(id) {
    this._service.delete_food(id, (res) => {
      console.log(res);
      this._service.retrieveAllFood((res) => {
        res.map((ele) => {
          return ele.quantity = null;
        })
        this.all_foods = res;
      })
    })

  }

  like(id) {
    this._service.like(id, (res) => {
      this.socket.emit('updatelike', {});

      this._service.retrieveAllFood((res) => {
        res.map((ele) => {
          return ele.quantity = null;
        })
        this.all_foods = res;
        console.log(res);
      })
    })
  }


}
