import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { error } from 'selenium-webdriver';
import {BehaviorSubject} from "rxjs";
import io from "socket.io-client";

@Injectable()
export class MainService {
  user;
  social_user;
  data: BehaviorSubject<any[]> = new BehaviorSubject([]);
  socket = null;
  if_socket_disconnect = false;
  login_users: BehaviorSubject<any []> = new  BehaviorSubject([])

  constructor(private _http: Http) {
    if (localStorage.user != undefined) {
      this.user = JSON.parse(localStorage.user);
    }
    if (localStorage.social_user != undefined) {
      this.social_user = JSON.parse(localStorage.social_user);
    }  
  }

  updateData(newData: any): void {
    const tempData = this.data.getValue();
    var exist = false;
    var index = null;
    for(var i = 0; i < tempData.length; i++) {
      if(tempData[i]._id == newData._id) {
        if(newData.quantity == 0) {
          index = i;
        }
        else {
          tempData[i].quantity = newData.quantity;
          
        }
        exist = true;
      }
    }
    if(index !== null) {
      tempData.splice(index, 1);
      console.log("true");
    }

    if(!exist) {
      tempData.push(newData);
    }
    
    this.data.next(tempData);
    // console.log(tempData);
  }

  register(userdata, callback) {
    this._http.post("/register", userdata).subscribe(
      (res) => {
        console.log("from service register: ", res.json());
        callback(res.json());
        if (res.json().success == "success") {
          this.user = res.json().user;
          localStorage.user = JSON.stringify(res.json().user);
          
        }
      },
      (err) => {
        console.error("from service register error: ", err);
      }
      )
  }

  login(userdata, callback) {
    // console.log(userdata);
    this._http.post("/login", userdata).subscribe(
      (res) => {
        callback(res.json());
        if (res.json().error == undefined) {
          this.user = res.json();
          localStorage.user = JSON.stringify(res.json());
          
        }
      },
      (err) => {
        console.log("error from login service: ", err);
      })
  }

  //add a new user by admin
  add_new(userdata, callback) {
    this._http.post("/register", userdata).subscribe(
      (res) => {
        console.log("from service register: ", res.json());
        callback(res.json());
      },
      (err) => {
        console.log("from service add_new error: ", err);
      }
      )
  }

  create_item(food,callback){

    this._http.post('/foods', food).subscribe(
      (res) => {
        console.log("from service create_item: ", res.json());
        callback(res.json());
      },
      (err) => {
        console.log("from service add_new error: ", err);
      }
      )
  };

  retrieveAllFood(callback) {
    this._http.get("/foods").subscribe((res) => {
      callback(res.json());
    })
  }

  place_order(order, callback) {
    if(this.user) {
      this._http.post("/orders/" + this.user._id, order).subscribe((res) => {
        callback(res.json())
      })
    }
    else if(this.social_user) {
      this._http.post("/orders/" + this.social_user._id, order).subscribe((res) => {
        callback(res.json())
      })
    }
    
  }

  check_user(social_user, callback) {
    // console.log(social_user);
    this._http.post("/checkuser", social_user).subscribe((res) => {
      callback(res.json());
    })
  }

  update_socialUser(data, callback) {
    this._http.post("/social_update", data).subscribe((res) => {
      callback(res.json());
    })
  }

  retrieveOrder(callback) {
    if(this.user) {
      this._http.get("/orders/" + this.user._id).subscribe((res) => {
        callback(res.json());
      })
    }
    else if(this.social_user) {
      this._http.get("/orders/" + this.social_user._id).subscribe((res) => {
        callback(res.json());
      })
    }
    
  }

  delete_food(id, callback) {
    this._http.delete("/deletefood/" + id, {}).subscribe((res) => {
      callback(res.json());
    })
  }

  logout() {
    this.user = null;
    localStorage.removeItem("user"); 
    if (this.user !== undefined) {
      this.user = null;
      localStorage.removeItem("user");
    }
    if (this.social_user !== undefined) {
      this.social_user = null;
      console.log("hello");
      localStorage.removeItem("social_user");
    }
  }

  retrieveAllOrder(callback) {
    this._http.get("/all_order").subscribe((res) => {
      callback(res.json());
    })
  }

  update_loginusers(data){
    this.login_users.next(data);
  }

  connect(user){
    var  new_user = {
      id:user._id,
      first_name: user.first_name,
      last_name: user.last_name,
    }
    this.socket.emit('login',{user: new_user});
  }

  like(food_id, callback) {
    if (this.user) {
      this._http.post("/like/" + this.user._id + "/" + food_id, {}).subscribe(
        (res) => {
          callback(res.json());
        }
      )
    }
    else if (this.social_user) {
      this._http.post("/like/" + this.social_user._id + "/" + food_id, {}).subscribe(
        (res) => {
          callback(res.json());
        }
      )
    }

  }

}
