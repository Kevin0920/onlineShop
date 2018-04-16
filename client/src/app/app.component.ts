import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import io from "socket.io-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  socket;
  constructor(private _mainService:MainService) {
    this.socket = io();
      this._mainService.socket = this.socket;      
      this.socket.on('online', function(data){
        console.log("aa")
        this._mainService.update_loginusers(data.users);
      }.bind(this));
  }

  ngOnInit() {    
  }
}
