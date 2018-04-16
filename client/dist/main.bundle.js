webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_menu_new_menu_component__ = __webpack_require__("../../../../../src/app/new-menu/new-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_user_new_user_component__ = __webpack_require__("../../../../../src/app/new-user/new-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__update_user_update_user_component__ = __webpack_require__("../../../../../src/app/update-user/update-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_history_order_history_component__ = __webpack_require__("../../../../../src/app/order-history/order-history.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: "", pathMatch: "full", component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: "login", pathMatch: "full", component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: "new_menu", pathMatch: "full", component: __WEBPACK_IMPORTED_MODULE_4__new_menu_new_menu_component__["a" /* NewMenuComponent */] },
    { path: "new_user", pathMatch: "full", component: __WEBPACK_IMPORTED_MODULE_5__new_user_new_user_component__["a" /* NewUserComponent */] },
    { path: "update", pathMatch: "full", component: __WEBPACK_IMPORTED_MODULE_6__update_user_update_user_component__["a" /* UpdateUserComponent */] },
    { path: "orderhistory/:id", pathMatch: "full", component: __WEBPACK_IMPORTED_MODULE_7__order_history_order_history_component__["a" /* OrderHistoryComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_mainService) {
        this._mainService = _mainService;
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default()();
        this._mainService.socket = this.socket;
        this.socket.on('online', function (data) {
            console.log("aa");
            this._mainService.update_loginusers(data.users);
        }.bind(this));
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_checkout_checkout_component__ = __webpack_require__("../../../../../src/app/home/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__new_menu_new_menu_component__ = __webpack_require__("../../../../../src/app/new-menu/new-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__new_user_new_user_component__ = __webpack_require__("../../../../../src/app/new-user/new-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__update_user_update_user_component__ = __webpack_require__("../../../../../src/app/update-user/update-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__order_history_order_history_component__ = __webpack_require__("../../../../../src/app/order-history/order-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







 // <-- Import FormsModule









var config = new __WEBPACK_IMPORTED_MODULE_12_angular4_social_login__["AuthServiceConfig"]([
    {
        id: __WEBPACK_IMPORTED_MODULE_12_angular4_social_login__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_12_angular4_social_login__["GoogleLoginProvider"]("881642856104-gchuqjdr5lgvinqcvlbi1aovp23f8eq6.apps.googleusercontent.com")
    },
    {
        id: __WEBPACK_IMPORTED_MODULE_12_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_12_angular4_social_login__["FacebookLoginProvider"]("568749596799970")
    }
]);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_checkout_checkout_component__["a" /* CheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_10__new_menu_new_menu_component__["a" /* NewMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_11__new_user_new_user_component__["a" /* NewUserComponent */],
                __WEBPACK_IMPORTED_MODULE_13__update_user_update_user_component__["a" /* UpdateUserComponent */],
                __WEBPACK_IMPORTED_MODULE_14__order_history_order_history_component__["a" /* OrderHistoryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12_angular4_social_login__["SocialLoginModule"].initialize(config),
                __WEBPACK_IMPORTED_MODULE_15__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCtp-QzkIR4QSrXNJMEHRX9Wn_d0vBSmjQ'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__main_service__["a" /* MainService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#checkout {\n    width: 23em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"checkout\">\n  <div class=\"card mb-3\">\n    <h3 class=\"card-header\">Check Out List</h3>\n\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\" *ngFor = \"let t of total_item\">\n        <p>Food name: {{t.food_name}} </p>\n        <p>Quantity: {{t.quantity}} </p>\n        <p>Total Price: {{t.quantity * t.price}} </p>\n      </li>\n    </ul>\n    <div class=\"card-body\">\n      \n        <button type=\"submit\" *ngIf = \"total_item.length !== 0\" style=\"float: right;\" class=\"btn btn-danger\" (click) = \"place_order()\">\n          <i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i>submit</button>\n      </div>\n      <div class=\"card-footer text-muted\">\n        Thank you for your interest!!! :)\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/home/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular4_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckoutComponent = (function () {
    function CheckoutComponent(_service, _router, authService) {
        this._service = _service;
        this._router = _router;
        this.authService = authService;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.data.subscribe(function (data) {
            _this.total_item = data;
            console.log(_this.total_item);
        });
    };
    CheckoutComponent.prototype.place_order = function () {
        var summary = "";
        var totalPrice = 0;
        for (var i = 0; i < this.total_item.length; i++) {
            summary += this.total_item[i].quantity + " " + this.total_item[i].food_name + "; ";
            totalPrice += this.total_item[i].quantity * this.total_item[i].price;
        }
        var sure = confirm("Your order summary: " + summary + " Total price is: " + totalPrice + " dollars.");
        if (sure == true) {
            this._service.place_order(this.total_item, function (res) {
                console.log(res);
            });
            this.total_item = [];
            this._service.data = null;
        }
        else {
            this.total_item = [];
        }
    };
    CheckoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__("../../../../../src/app/home/checkout/checkout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angular4_social_login__["AuthService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#sideCard {\n    width: 22em;\n    font-size: 35px;\n    font-weight: bold;\n    color: bisque;\n    background-color:rgba(255,0,0,0.3);\n    border: 2px solid #e06b6b;\n    border-radius: 15px;\n\n}\n\n.thumbnail:hover {\n    position:relative;\n    top:-25px;\n    left:-35px;\n    width:500px;\n    height:auto;\n    display:block;\n    z-index:999;\n}\n\n.container1 {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin: 0 auto;\n  max-width: 1200px;\n  /*background-color: green;*/\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  \n}\n\n.setfont {\n    font-family: 'Roboto Slab', serif;\n    color: #1b082d;\n}\n.setfont2 {\n    font-family: 'Risque', cursive;\n    color: #efdbdb;\n}\n\n.form-control1 {\n  display: block;\n  width: 20%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.left_box {\n    padding-right: 20px;\n\n}\n\n.navbar-expand-lg {\n    height: 80px;\n}\n\n#service {\n    background-color: #772953;\n    color: bisque;\n}\n\n\n\n.image {\n    width: 15em;\n    display: inline-block;\n    vertical-align: top;\n}\n\n#foodInfo{\n    display: inline-block;\n    /*margin: 10px 0px 0px 50px;*/\n}\n\n.jumbotron {\n    background: url(/assets/images/pexels-photo-101533.jpeg) no-repeat center center;\n    -webkit-background-attachment: fixed;\n    background-attachment: fixed;\n    background-size: cover;\n    padding: 0;\n    position: relative;\n    height: 500px;\n    margin: 0px;\n}\n\n#show {\n    max-width: 2000px;\n    padding-top: 50px;\n    background: url(/assets/images/jumbotron_img.jpeg)\n    no-repeat center center;\n    -webkit-background-attachment: fixed;\n    background-attachment: fixed;\n    background-size: cover;\n    /*padding: 0;*/\n    position: relative; \n    margin: 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n\n    \n}\n\n\n\n.list-group-item.font {\n    color: bisque;\n    background-color:rgba(255,0,0,0.3);\n\n}\n\n\n\n/*.list-group-flush:last-child .list-group-item:last-child{\n    height: 450px;\n}*/\n\n\n.card-block {\n    display: inline-block;\n    color: bisque;\n    text-align: center;\n    text-shadow:0 -1px 0 rgba(0,0,0,.3),0 0px 30px rgba(0,255,255,.7);\n    margin-right: 20px;\n}\n\nagm-map {\n    height: 200px;\n}\n\nh1 {\n    font-weight: bold;\n    /* font-style: palatino; */\n    margin: 0px;\n    font-family: 'Lobster', cursive;\n    color: bisque;\n    text-shadow:0 -1px 0 rgba(0,0,0,.3),0 0px 30px rgba(0,255,255,.7);\n    font-size: 80px;\n}\n\n\n/* Check out side menu */\n.mb-3 {\n    margin-left: 2px; \n}\n\n\n.photo {\n    width: 50px;\n    display: block;\n    margin-top: 10px;\n    border: 1px solid;\n    border-radius: 8px;\n}\n\n\n\n/* Footer section  */\n#myFooter {\n    background-color: #772953;\n    color: white;\n    padding-top: 20px;\n}\n\n#myFooter .row {\n    margin: 0 85px;\n}\n\n#myFooter .footer-copyright {\n    background-color: #10222e;\n    padding-top: 3px;\n    padding-bottom: 3px;\n    text-align: center;\n}\n\n#myFooter .footer-copyright p {\n    margin: 10px;\n    color: #ccc;\n}\n\n#myFooter .container {\n    width: auto;\n}\n\n#myFooter ul {\n    list-style-type: none;\n    padding-left: 0;\n    line-height: 1.7;\n}\n\n#myFooter h5 {\n    font-size: 18px;\n    color: white;\n    font-weight: bold;\n    margin-top: 30px;\n}\n\n#myFooter a {\n    color: #d2d1d1;\n    text-decoration: none;\n}\n\n#myFooter a:hover,\n#myFooter a:focus {\n    text-decoration: none;\n    color: white;\n}\n\n#myFooter .social-networks {\n    text-align: center;\n    padding-top: 30px;\n    padding-bottom: 38px;\n}\n\n#myFooter .fa {\n    font-size: 30px;\n    margin-right: 15px;\n    margin-left: 20px;\n    background-color: white;\n    color: #182c39;\n    border-radius: 51%;\n    padding: 10px;\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 31px;\n    text-decoration: none;\n    transition: color 0.2s;\n}\n\n#myFooter .fa-facebook:hover {\n    color: #2b55ff;\n}\n\n#myFooter .fa-facebook:focus {\n    color: #2b55ff;\n}\n\n#myFooter .fa-github:hover {\n    color: red;\n}\n\n#myFooter .fa-github:focus {\n    color: red;\n}\n\n#myFooter .fa-twitter:hover {\n    color: #00aced;\n}\n\n#myFooter .fa-twitter:focus {\n    color: #00aced;\n}\n\n@media screen and (max-width: 767px) {\n    #myFooter {\n        text-align: center;\n    }\n    #myFooter .row {\n        margin: 0;\n    }\n}\n\n\n.icon {\n    margin-right: 4px;\n}\n\n.font {\n  color: white;\n  font-size: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n\n<body>\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Gourmet</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" *ngIf=\"current_user\">\n          <a class=\"nav-link\" [routerLink]=\"['/orderhistory', current_user._id]\">Order History</a>\n        </li>\n        \n        <li *ngIf=\"loggedIn || current_user != null\" class=\"nav-item\">\n          <div class=\"w3-dropdown-hover\">\n            <button class=\"w3-button\">Online Users: {{total_login_user.length}}</button>\n            <div class=\"w3-dropdown-content w3-bar-block w3-border\">\n              <span class=\"w3-bar-item w3-button w3-blue w3-row\" *ngFor=\"let user of total_login_user\" >{{user.info.first_name}} {{user.info.last_name}}</span>\n            </div>\n          </div>\n        </li>\n      </ul>\n      <a [routerLink]=\"['/new_menu']\">\n        <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\" *ngIf=\"current_user != undefined && current_user.user_level == 9\">\n          <i class=\"fa fa-cutlery fa-1x icon\" aria-hidden=\"true\"></i>Add New Munu </button>\n        </a>\n        <a [routerLink]=\"['/new_user']\">\n          <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\" *ngIf=\"current_user != undefined && current_user.user_level == 9\">\n            <i class=\"fa fa-user-o fa-lg icon\" aria-hidden=\"true\"></i>Add New User </button>\n          </a>\n\n          <div *ngIf=\"!(loggedIn || current_user != null)\">\n            <a [routerLink]=\"['/login']\">\n              <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\" *ngIf=\"current_user == null\">\n                <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Log in </button>\n              </a>\n\n              <a>\n                <button class=\"btn btn-social-icon btn-google\" (click)=\"signInWithGoogle()\">\n                  <span class=\"fa fa-google\"></span>\n                </button>\n              </a>\n          <!-- <a>\n            <button class=\"btn btn-social-icon btn-facebook\" (click)=\"signInWithFB()\">\n              <span class=\"fa fa-facebook\"></span>\n            </button>\n          </a> -->\n        </div>\n        <div *ngIf=\"loggedIn || current_user != null\">\n          <div class=\"card-block\">\n            <img class=\"card-img-top img-responsive photo\" src=\"{{ imageurl }}\">\n          </div>\n          <div class=\"card-block\">\n            <h4 class=\"card-title\">{{ current_user?.first_name }}</h4>\n            <p class=\"card-text\">{{ current_user?.email }}</p>\n          </div>\n        </div>\n\n      </div>\n      <button *ngIf=\"loggedIn || current_user != null\" class=\"btn btn-danger\" (click)=\"signOut()\">\n        <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Log out</button>\n      </div>\n    </nav>\n    <div class=\"jumbotron\">\n      <div class=\"container\">\n        <h1 class=\"animated infinite bounce\">Ready to Order?</h1>\n      </div>\n    </div>\n\n    <section id=\"service\">\n      <div class=\"container\">\n        <div class=\"row justify-content-md-center\">\n          <div class=\"col-lg-8\">\n            <h2 class=\"text-center mt-4\">\n              <i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i> Our Food\n              <strong>Service</strong>\n            </h2>\n            <hr>\n            <p class=\"large text-center\">\n              Atque ducimus velit, earum quidem, iusto dolorem. Ex ipsam totam quas blanditiis, pariatur maxime ipsa iste, doloremque neque\n              doloribus, error. Corrupti, tenetur.\n            </p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <div id=\"show\">\n      <div class=\"container1\">\n        <div class=\"card mb-3\" id=\"sideCard\">\n          <h3 class=\"card-header\">Food Truck Info:</h3>\n          <img style=\"width:100%;\" src=\"/assets/images/foodtruck.jpg\"\n          alt=\"Card image\">\n          <ul class=\"list-group\">\n            <li *ngFor=\"let a of all_foods\" class=\"list-group-item font\">\n\n              <img src=\"{{a.image}}\" class=\"image thumbnail\">\n\n              <div id=\"foodInfo\" class=\"col-sm-5 col-xs-5\">\n                <p><span class=\"setfont\">Food Name:</span> <span class=\"setfont2\">{{a.food_name}}</span></p>\n                <p><span class=\"setfont\">Description:</span> <span class=\"setfont2\">{{a.description}}</span></p>\n                <p><span class=\"setfont\">Price:</span> <span class=\"setfont2\">{{a.price}}</span></p>\n                <form (submit)=\"create_order(a)\" *ngIf=\"current_user != null\" #addfood=\"ngForm\">\n                  <label class=\"setfont\" style=\"display: inline-block;\">Quantity:</label>\n                \n                  <input class=\"form-control1\" style=\"display: inline-block;\" type=\"number\" [(ngModel)]=\"a.quantity\" required min=\"1\" name=\"quantity\" #quantity=\"ngModel\">\n                  <button class=\"btn btn-warning\" [disabled]=\"!addfood.valid\">Add</button>\n                  <p><span class=\"setfont\">Total price:</span> <span class=\"setfont2\">{{a.quantity * a.price}}</span></p>\n                  \n\n                </form>\n                <span *ngIf = \"current_user !== null\">\n                <button class=\"btn btn-danger btn-sm\" *ngIf=\"current_user.user_level == 9\" (click)=\"delete_food(a._id)\">Delete</button>\n                </span>\n                <button (click)=\"like(a._id)\">\n                  <span>\n                    <i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i>\n                  </span>\n                </button>\n                {{a.likeBy.length}}\n              </div>\n            </li>\n          </ul>\n          \n        </div>\n        <app-checkout></app-checkout>\n        \n      </div>\n    </div>\n\n\n\n    <footer id=\"myFooter\">\n      <div class=\"container\">\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n          <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n        </agm-map>\n      </div>\n      <div class=\"social-networks\">\n        <a href=\"#\" class=\"twitter\">\n          <i class=\"fa fa-twitter\"></i>\n        </a>\n        <a href=\"#\" class=\"facebook\">\n          <i class=\"fa fa-facebook\"></i>\n        </a>\n        <a href=\"#\" class=\"google\">\n          <i class=\"fa fa-instagram\"></i>\n        </a>\n      </div>\n      <div class=\"footer-copyright\">\n        <p>© 2018 Three Line Technology </p>\n      </div>\n    </footer>\n\n\n\n\n\n  </body>\n\n  </html>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular4_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(_service, _router, authService) {
        this._service = _service;
        this._router = _router;
        this.authService = authService;
        this.current_user = null;
        this.item = null;
        this.imageurl = "https://botw-pd.s3.amazonaws.com/styles/logo-original-577x577/s3/0010/8217/brand.gif";
        this.total_login_user = [];
        this.lat = 37.335480;
        this.lng = -121.893028;
        this.zoom = 12;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = this._service.socket;
        this.authService.authState.subscribe(function (user) {
            _this.loggedIn = (user != null);
            if (user != null) {
                _this.imageurl = user.photoUrl;
                _this._service.social_user = user;
                _this._service.check_user(user, function (res) {
                    if (res.message == "yes") {
                        console.log("success social login");
                        _this._service.social_user = res.user;
                        localStorage.social_user = JSON.stringify(res.user);
                        _this.current_user = res.user;
                        _this._service.connect(res.user);
                    }
                    else if (res.message == "none") {
                        console.log(res);
                        _this._router.navigate(["/update"]);
                    }
                });
            }
        });
        if (this._service.user) {
            this.current_user = this._service.user;
            this._service.connect(this.current_user);
            this.loggedIn = false;
        }
        this._service.retrieveAllFood(function (res) {
            res.map(function (ele) {
                return ele.quantity = null;
            });
            _this.all_foods = res;
            console.log(res);
        });
        this._service.login_users.subscribe(function (data) {
            _this.total_login_user = data;
        });
        this.socket.on('updatelike', function (data) {
            var _this = this;
            this._service.retrieveAllFood(function (res) {
                res.map(function (ele) { return ele.quantity = null; });
                _this.all_foods = res;
                // console.log(res);
            });
        }.bind(this));
    };
    HomeComponent.prototype.signInWithGoogle = function () {
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_3_angular4_social_login__["GoogleLoginProvider"].PROVIDER_ID);
    };
    HomeComponent.prototype.signInWithFB = function () {
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_3_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID);
    };
    HomeComponent.prototype.signOut = function () {
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
    };
    HomeComponent.prototype.create_order = function (food) {
        var new_food = Object.assign({}, food);
        // console.log(new_food);
        this._service.updateData(new_food);
        food.quantity = null;
    };
    HomeComponent.prototype.delete_food = function (id) {
        var _this = this;
        this._service.delete_food(id, function (res) {
            console.log(res);
            _this._service.retrieveAllFood(function (res) {
                res.map(function (ele) {
                    return ele.quantity = null;
                });
                _this.all_foods = res;
            });
        });
    };
    HomeComponent.prototype.like = function (id) {
        var _this = this;
        this._service.like(id, function (res) {
            _this.socket.emit('updatelike', {});
            _this._service.retrieveAllFood(function (res) {
                res.map(function (ele) {
                    return ele.quantity = null;
                });
                _this.all_foods = res;
                console.log(res);
            });
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angular4_social_login__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".aler {\n  width: 71%;\n}\n\n.al {\n  padding-left: 15px;\n  padding-top: 14px;\n}\n\n\n\nbody {\n  background: url(/assets/images/pexels-photo-262918.jpeg) no-repeat center center;\n  -webkit-background-attachment: fixed;\n  background-attachment: fixed;\n  background-size: cover;\n  padding: 0;\n  position: relative;\n  height: 1150px;\n}\n#form {\n  background-color: #5555;\n  color: #fff;\n  font-size: 20px;\n  \n}\n\n#loginform {\n  width: 440px;\n}\n\n\n\n\n.aler_log {\n  width: 100%;\n}\n\n#login {\n  float: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n\n<body>\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n\n\n    <div class=\"container\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Order Website</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n        <a [routerLink]=\"['/login']\">\n          <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">\n            <i class=\"fa fa-user-o fa-lg\" aria-hidden=\"true\"></i> Log in </button>\n        </a>\n      </div>\n\n    </div>\n  </nav>\n\n  <div class=\"container\" id=\"form\">\n    <div id=\"loginbox\" style=\"margin-top:50px;\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n      <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n          <div class=\"panel-title\">\n            <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i> Sign In</div>\n\n        </div>\n\n        <!-- log in -->\n        <div style=\"padding-top:30px\" class=\"panel-body\">\n          <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\n          <form id=\"loginform\" class=\"form-horizontal\" role=\"form\" (submit)=\"login()\" #formLogin=\"ngForm\">\n            <div style=\"margin-bottom: 25px\" class=\"input-group\">\n              <span class=\"input-group-addon\">\n                <i class=\"fa fa-envelope-o fa-2x\" aria-hidden=\"true\"></i>\n              </span>\n              <input id=\"login-username\" type=\"text\" class=\"form-control\" placeholder=\"Enter email\" name=\"email\" [(ngModel)]=\"user_log.email\"\n                #log_email=\"ngModel\" required>\n            </div>\n            <div *ngIf=\"log_email.invalid && (log_email.dirty || log_email.touched)\">\n              <div class=\"alert alert-dismissible alert-danger aler_log\" role=\"alert\">\n                <div *ngIf=\"log_email.errors.required\">\n                  <span> Email is required.</span>\n                </div>\n              </div>\n            </div>\n\n\n            <div style=\"margin-bottom: 25px\" class=\"input-group\">\n              <span class=\"input-group-addon\">\n                <i class=\"fa fa-unlock fa-2x\" aria-hidden=\"true\"></i>\n              </span>\n              <input id=\"login-password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"user_log.password\"\n                #log_password=\"ngModel\" required>\n            </div>\n            <div *ngIf=\"log_password.invalid && (log_password.dirty || log_password.touched)\">\n              <div class=\"alert alert-dismissible alert-danger aler_log\" role=\"alert\">\n                <div *ngIf=\"log_password.errors.required\">\n                  <span> Password is required.</span>\n                </div>\n              </div>\n            </div>\n\n\n            <div style=\"margin-top:10px\" class=\"form-group\">\n              <div class=\"col-sm-12 controls\">\n                <button id=\"btn-login\" [disabled]=\"formLogin.invalid\" class=\"btn btn-success\">Login </button>\n              </div>\n            </div>\n            <div class=\"alert alert-dismissible alert-danger aler_log\" role=\"alert\" *ngIf=\"error_message.login != ''\">\n              {{error_message.login}}\n            </div>\n\n\n\n          </form>\n          <div class=\"form-group\">\n            <div class=\"col-md-12 control\">\n              <div style=\"border-top: 1px solid#888; padding-top:15px; font-size:85%\">\n                Don't have an account!\n                <button onClick=\"$('#loginbox').hide(); $('#signupbox').show()\" class=\"btn btn-warning btn-sm\">Sign Up Here</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"signupbox\" style=\"display:none; margin-top:50px\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n      <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n          <div class=\"panel-title\">Sign Up</div>\n          <div style=\"float:right; font-size: 85%; position: relative; top:-10px\">\n            <button id=\"signinlink\" onclick=\"$('#signupbox').hide(); $('#loginbox').show()\" class=\"btn-sm btn btn-warning\">Sign In</button>\n          </div>\n        </div>\n\n        <!-- register -->\n        <div class=\"panel-body\">\n          <form id=\"signupform\" class=\"form-horizontal\" role=\"form\" (submit)=\"register()\" #registerForm=\"ngForm\">\n            <div class=\"form-group\">\n              <label for=\"email\" class=\"col-md-3 control-label\">Email</label>\n\n              <div class=\"col-md-9 input-group\">\n                <span class=\"input-group-addon\">\n                  <i class=\"fa fa-envelope-o fa-2x\" aria-hidden=\"true\"></i>\n                </span>\n\n                <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email Address\" [(ngModel)]=\"user_reg.email\" required email\n                  #reg_email=\"ngModel\">\n              </div>\n              <div *ngIf=\"reg_email.invalid && (reg_email.dirty || reg_email.touched)\" class=\"al\">\n                <div class=\"alert alert-dismissible alert-danger aler\" role=\"alert\">\n                  <div *ngIf=\"reg_email.errors.required\">\n                    <span> Email is required.</span>\n                  </div>\n                  <div *ngIf=\"reg_email.errors.email\">\n                    <span>Please input an valid email.</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"firstname\" class=\"col-md-3 control-label\">First Name</label>\n              <div class=\"col-md-9 input-group\">\n                <span class=\"input-group-addon\">\n                  <i class=\"fa fa-user fa-2x\" aria-hidden=\"true\"></i>\n                </span>\n                <input type=\"text\" class=\"form-control\" name=\"firstname\" placeholder=\"First Name\" [(ngModel)]=\"user_reg.first_name\" #reg_firstname=\"ngModel\"\n                  required>\n              </div>\n              <div *ngIf=\"reg_firstname.invalid && (reg_firstname.dirty || reg_firstname.touched)\" class=\"al\">\n                <div class=\"alert alert-dismissible alert-danger aler\" role=\"alert\" *ngIf=\"reg_firstname.errors.required\">\n                  First name is required.\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"lastname\" class=\"col-md-3 control-label\">Last Name</label>\n              <div class=\"col-md-9 input-group\">\n                <span class=\"input-group-addon\">\n                  <i class=\"fa fa-user fa-2x\" aria-hidden=\"true\"></i>\n                </span>\n                <input type=\"text\" class=\"form-control\" name=\"lastname\" placeholder=\"Last Name\" [(ngModel)]=\"user_reg.last_name\" #reg_lastname=\"ngModel\"\n                  required>\n              </div>\n              <div *ngIf=\"reg_lastname.invalid && (reg_lastname.dirty || reg_lastname.touched)\" class=\"al\">\n                <div class=\"alert alert-dismissible alert-danger aler\" role=\"alert\" *ngIf=\"reg_lastname.errors.required\">\n                  Last name is required.\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"password\" class=\"col-md-3 control-label\">Password</label>\n              <div class=\"col-md-9 input-group\">\n                <span class=\"input-group-addon\">\n                  <i class=\"fa fa-lock fa-2x\" aria-hidden=\"true\"></i>\n                </span>\n                <input type=\"password\" class=\"form-control\" name=\"passwd\" placeholder=\"Password\" [(ngModel)]=\"user_reg.password\" #reg_password=\"ngModel\"\n                  required minlength=\"4\">\n              </div>\n              <div *ngIf=\"reg_password.invalid && (reg_password.dirty || reg_password.touched)\" class=\"al\">\n                <div class=\"alert alert-dismissible alert-danger aler\" role=\"alert\">\n                  <div *ngIf=\"reg_password.errors.required\">\n                    <span> Password is required.</span>\n                  </div>\n                  <div *ngIf=\"reg_password.errors.minlength\">\n                    <span>Password need at least four characters.</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"password\" class=\"col-md-3 control-label\">Password Confirmation</label>\n              <div class=\"col-md-9 input-group\">\n                <span class=\"input-group-addon\">\n                  <i class=\"fa fa-unlock fa-2x\" aria-hidden=\"true\"></i>\n                </span>\n                <input type=\"password\" class=\"form-control\" name=\"pass_con\" placeholder=\"Password confirmation\" [(ngModel)]=\"password_confirm.con\"\n                  #reg_confirm=\"ngModel\" pattern=\"{{user_reg.password}}\" required>\n              </div>\n              <div *ngIf=\"reg_confirm.invalid && (reg_confirm.dirty || reg_confirm.touched)\" class=\"al\">\n                <div class=\"alert alert-dismissible alert-danger aler\" role=\"alert\">\n                  <div *ngIf=\"reg_confirm.errors.required\">\n                    <span> Password confirmation is required.</span>\n                  </div>\n                  <div *ngIf=\"reg_confirm.errors.pattern\">\n                    <span>Not mattch the password.</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <!-- Button -->\n              <div class=\"col-md-offset-3 col-md-9\">\n                <button id=\"btn-signup\" type=\"submit\" class=\"btn btn-info\" [disabled]=\"registerForm.invalid\">\n                  <i class=\"icon-hand-right\"></i>Sign Up</button>\n                <div class=\"alert alert-dismissible alert-danger aler\" role=\"alert\" *ngIf=\"error_message.email != ''\">\n                  {{error_message.email}}\n                </div>\n\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.user_reg = {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        };
        this.password_confirm = {
            con: ""
        };
        this.error_message = {
            email: "",
            login: ""
        };
        this.user_log = {
            email: "",
            password: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._service.login(this.user_log, function (res) {
            // console.log("from login com: ", res);
            if (res.error == undefined) {
                _this._router.navigate(['/']);
            }
            else {
                _this.error_message.login = res.error;
            }
        });
        this.user_log = {
            email: "",
            password: ""
        };
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        console.log("from com login: ", this.user_reg);
        this._service.register(this.user_reg, function (res) {
            if (res.success === "success") {
                _this._router.navigate(['/']);
            }
            else {
                _this.error_message.email = "This email has been registered.";
            }
            _this.user_reg = {
                first_name: "",
                last_name: "",
                email: "",
                password: ""
            };
            _this.password_confirm = {
                con: ""
            };
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainService = (function () {
    function MainService(_http) {
        this._http = _http;
        this.data = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        this.socket = null;
        this.if_socket_disconnect = false;
        this.login_users = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        if (localStorage.user != undefined) {
            this.user = JSON.parse(localStorage.user);
        }
        if (localStorage.social_user != undefined) {
            this.social_user = JSON.parse(localStorage.social_user);
        }
    }
    MainService.prototype.updateData = function (newData) {
        var tempData = this.data.getValue();
        var exist = false;
        var index = null;
        for (var i = 0; i < tempData.length; i++) {
            if (tempData[i]._id == newData._id) {
                if (newData.quantity == 0) {
                    index = i;
                }
                else {
                    tempData[i].quantity = newData.quantity;
                }
                exist = true;
            }
        }
        if (index !== null) {
            tempData.splice(index, 1);
            console.log("true");
        }
        if (!exist) {
            tempData.push(newData);
        }
        this.data.next(tempData);
        // console.log(tempData);
    };
    MainService.prototype.register = function (userdata, callback) {
        var _this = this;
        this._http.post("/register", userdata).subscribe(function (res) {
            console.log("from service register: ", res.json());
            callback(res.json());
            if (res.json().success == "success") {
                _this.user = res.json().user;
                localStorage.user = JSON.stringify(res.json().user);
            }
        }, function (err) {
            console.error("from service register error: ", err);
        });
    };
    MainService.prototype.login = function (userdata, callback) {
        var _this = this;
        // console.log(userdata);
        this._http.post("/login", userdata).subscribe(function (res) {
            callback(res.json());
            if (res.json().error == undefined) {
                _this.user = res.json();
                localStorage.user = JSON.stringify(res.json());
            }
        }, function (err) {
            console.log("error from login service: ", err);
        });
    };
    //add a new user by admin
    MainService.prototype.add_new = function (userdata, callback) {
        this._http.post("/register", userdata).subscribe(function (res) {
            console.log("from service register: ", res.json());
            callback(res.json());
        }, function (err) {
            console.log("from service add_new error: ", err);
        });
    };
    MainService.prototype.create_item = function (food, callback) {
        this._http.post('/foods', food).subscribe(function (res) {
            console.log("from service create_item: ", res.json());
            callback(res.json());
        }, function (err) {
            console.log("from service add_new error: ", err);
        });
    };
    ;
    MainService.prototype.retrieveAllFood = function (callback) {
        this._http.get("/foods").subscribe(function (res) {
            callback(res.json());
        });
    };
    MainService.prototype.place_order = function (order, callback) {
        if (this.user) {
            this._http.post("/orders/" + this.user._id, order).subscribe(function (res) {
                callback(res.json());
            });
        }
        else if (this.social_user) {
            this._http.post("/orders/" + this.social_user._id, order).subscribe(function (res) {
                callback(res.json());
            });
        }
    };
    MainService.prototype.check_user = function (social_user, callback) {
        // console.log(social_user);
        this._http.post("/checkuser", social_user).subscribe(function (res) {
            callback(res.json());
        });
    };
    MainService.prototype.update_socialUser = function (data, callback) {
        this._http.post("/social_update", data).subscribe(function (res) {
            callback(res.json());
        });
    };
    MainService.prototype.retrieveOrder = function (callback) {
        if (this.user) {
            this._http.get("/orders/" + this.user._id).subscribe(function (res) {
                callback(res.json());
            });
        }
        else if (this.social_user) {
            this._http.get("/orders/" + this.social_user._id).subscribe(function (res) {
                callback(res.json());
            });
        }
    };
    MainService.prototype.delete_food = function (id, callback) {
        this._http.delete("/deletefood/" + id, {}).subscribe(function (res) {
            callback(res.json());
        });
    };
    MainService.prototype.logout = function () {
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
    };
    MainService.prototype.retrieveAllOrder = function (callback) {
        this._http.get("/all_order").subscribe(function (res) {
            callback(res.json());
        });
    };
    MainService.prototype.update_loginusers = function (data) {
        this.login_users.next(data);
    };
    MainService.prototype.connect = function (user) {
        var new_user = {
            id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
        };
        this.socket.emit('login', { user: new_user });
    };
    MainService.prototype.like = function (food_id, callback) {
        if (this.user) {
            this._http.post("/like/" + this.user._id + "/" + food_id, {}).subscribe(function (res) {
                callback(res.json());
            });
        }
        else if (this.social_user) {
            this._http.post("/like/" + this.social_user._id + "/" + food_id, {}).subscribe(function (res) {
                callback(res.json());
            });
        }
    };
    MainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "../../../../../src/app/new-menu/new-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img{\n    background-color: silver ;\n    width: 200px;\n    height: 200px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-menu/new-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">Order Website</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Features</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Pricing</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">About</a>\n        </li>\n      </ul>\n      <a [routerLink]=\"['/new_user']\">\n        <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\" *ngIf=\"current_user != undefined && current_user.user_level == 9\">\n          <i class=\"fa fa-user-o fa-lg icon\" aria-hidden=\"true\"></i>Add New User </button>\n      </a>\n      <a [routerLink]=\"['/login']\">\n        <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\" *ngIf=\"current_user == undefined\">\n          <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Log in </button>\n      </a>\n      <button *ngIf=\"current_user != undefined\" class=\"btn btn-danger\" (click)=\"logout()\">\n        <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Log out</button>\n\n    </div>\n\n  </div>\n</nav>\n<br>\n<div class=\"container\">\n    <div class=\"\">\n        <img src=\"{{new_food.image}}\">\n      </div>\n  <div class=\"row\">   \n    <form (submit)=\"create()\" #formData3=\"ngForm\" class=\"col-md-9\" style=\"padding-top: 55px;\">\n      <fieldset style=\"width: 50rem; margin: auto auto;\">\n        <legend>Create new food menu</legend>\n        <br>\n        <div class=\"form-group\">\n          <label>Food name</label>\n          <div class=\"col-sm-10\">\n            <input class=\"form-control\" type=\"text\" required minlength=\"5\" [(ngModel)]=\"new_food.food_name\" #title=\"ngModel\" name=\"title\">{{title.errors | json}}\n          </div>\n        </div>\n        <br>\n        <div class=\"form-group\">\n          <label>Price</label>\n          <div class=\"col-sm-10\">\n            <input class=\"form-control\" type=\"number\" required min=\"5\" [(ngModel)]=\"new_food.price\" #price=\"ngModel\" name=\"price\">{{price.errors | json}}\n          </div>\n        </div>\n        <br>\n        <div class=\"form-group\">\n            <label>Description</label>\n            <div class=\"col-sm-10\">\n        <textarea rows=\"3\" cols=\"65\" required [(ngModel)]=\"new_food.description\" #desc=\"ngModel\" name=\"description\" ></textarea>{{desc.errors | json}}\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"exampleInputFile\">File input</label>\n          <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\" (change)=\"onFileChange($event)\" ngModel #imgfile=\"ngModel\"  name=\"imgfile\" accept=\".png, .jpg, .jpeg\">{{imgfile.errors | json}}\n        </div>\n        <button type=\"submit\" [disabled]=\"!formData3.valid\" class=\"btn btn-info\">Create</button>\n      </fieldset>\n    </form>\n  </div>\n</div>\n\n<div class=\"\">\n  <img src=\"{{image}}\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/new-menu/new-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewMenuComponent = (function () {
    function NewMenuComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.input = new FormData();
        this.new_food = {
            food_name: "",
            price: "",
            description: "",
            image: null,
        };
    }
    NewMenuComponent.prototype.logout = function () {
    };
    NewMenuComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            console.log(event.target.files);
            var file = event.target.files[0];
            this.new_food.image = file;
            reader.onload = function () {
                _this.new_food.image = reader.result;
            };
            reader.readAsDataURL(file);
        }
    };
    NewMenuComponent.prototype.create = function () {
        var _this = this;
        this._service.create_item(this.new_food, function (res) {
            _this.image = res[0].image;
            _this._router.navigate(["/"]);
        });
    };
    NewMenuComponent.prototype.ngOnInit = function () {
        this.current_user = this._service.user;
    };
    NewMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-menu',
            template: __webpack_require__("../../../../../src/app/new-menu/new-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new-menu/new-menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], NewMenuComponent);
    return NewMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/new-user/new-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-user/new-user.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">Order Website</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Features</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Pricing</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">About</a>\n      </li>\n    </ul>\n\n    <a [routerLink]=\"['/new_menu']\" >\n      <button class=\"btn btn-secondary my-2 my-sm-0\"><i class=\"fa fa-cutlery fa-1x icon\" aria-hidden=\"true\"></i>Add New Munu </button>\n    </a>\n    <button *ngIf=\"current_user != undefined\" class=\"btn btn-danger\" (click) = \"logout()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Log out</button>\n\n  </div>\n\n</div>\n</nav>\n\n<div class=\"container\">\n  <form class=\"top\" (submit) = \"add_new()\" #registerForm = \"ngForm\">\n    <fieldset>\n      <legend>Add a new user</legend>\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Email address:</label>\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" [(ngModel)] = \"new_user.email\" required email #reg_email = \"ngModel\" name=\"email\">\n      </div>\n\n      <div *ngIf=\"reg_email.invalid && (reg_email.dirty || reg_email.touched)\">\n        <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" >\n          <div *ngIf=\"reg_email.errors.required\">\n            <span> Email is required.</span>\n          </div>\n          <div *ngIf=\"reg_email.errors.email\">\n            <span>Please input an valid email.</span>\n          </div>\n        </div>\n      </div>\n\n      <!-- first name -->\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">First Name:</label>\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter first name\" name=\"firstname\" [(ngModel)] = \"new_user.first_name\" #reg_firstname = \"ngModel\" required >\n      </div>\n      <div *ngIf=\"reg_firstname.invalid && (reg_firstname.dirty || reg_firstname.touched)\">\n        <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"reg_firstname.errors.required\">\n          First name is required.\n        </div>\n      </div>\n\n      <!-- last name -->\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Last Name: </label>\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter last name\" name=\"lastname\" [(ngModel)] = \"new_user.last_name\" #reg_lastname = \"ngModel\" required>\n      </div>\n      <div *ngIf=\"reg_lastname.invalid && (reg_lastname.dirty || reg_lastname.touched)\">\n        <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"reg_lastname.errors.required\">\n          Last name is required.\n        </div>\n      </div>    \n\n      <!-- password -->\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter password\" name=\"password\" [(ngModel)] = \"new_user.password\" #reg_password = \"ngModel\" required minlength=\"4\" >\n      </div>\n      <div *ngIf=\"reg_password.invalid && (reg_password.dirty || reg_password.touched)\">\n        <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"reg_password.errors.required\">\n          Password is required.\n        </div>\n        <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"reg_password.errors.minlength\">\n          Password need at least four characters.\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Password Confirmation</label>\n        <input type=\"password\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Confirm your password\" name=\"passwordconfirm\" [(ngModel)] = \"password_confirm.con\" #reg_confirm = \"ngModel\" pattern=\"{{new_user.password}}\">\n      </div>\n      <div *ngIf=\"reg_confirm.invalid && (reg_confirm.dirty || reg_confirm.touched)\">\n        <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"reg_confirm.errors.pattern\">\n          Not mattch the password.\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled] = \"registerForm.invalid\">Create</button>\n      <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"error_message.email != ''\">\n        {{error_message.email}}\n      </div>\n    </fieldset>\n  </form>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/new-user/new-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewUserComponent = (function () {
    function NewUserComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.new_user = {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        };
        this.error_message = {
            email: "",
            login: ""
        };
        this.password_confirm = {
            con: ""
        };
    }
    NewUserComponent.prototype.ngOnInit = function () {
        this.current_user = this._service.user;
        if (localStorage.user == undefined || this.current_user.user_level !== 9) {
            this._router.navigate(['/']);
        }
    };
    NewUserComponent.prototype.add_new = function () {
        var _this = this;
        console.log("from com add new user: ", this.new_user);
        this._service.add_new(this.new_user, function (res) {
            if (res.success === "success") {
                _this._router.navigate(['/']);
            }
            else {
                _this.error_message.email = "This email has been registered.";
            }
            _this.new_user = {
                first_name: "",
                last_name: "",
                email: "",
                password: ""
            };
            _this.password_confirm = {
                con: ""
            };
        });
    };
    NewUserComponent.prototype.logout = function () {
        this._service.logout();
        this._router.navigate(['/']);
    };
    NewUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-user',
            template: __webpack_require__("../../../../../src/app/new-user/new-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new-user/new-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], NewUserComponent);
    return NewUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/order-history/order-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lis {\n  width: 30rem;\n}\n\n\n\nbody {\n  background: url(/assets/images/pexels-photo-326278.jpeg)\n  no-repeat center center;\n  -webkit-background-attachment: fixed;\n  background-attachment: fixed;\n  background-size: cover;\n  padding: 0;\n  position: relative;\n  height: 1120px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order-history/order-history.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n\n<body>\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Order Website</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <button class=\"btn btn-danger\" (click)=\"signOut()\">\n        <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Log out</button>\n    </div>\n  </nav>\n\n  <!-- <div *ngIf = \"current_user !== \"></div> -->\n  <section class=\"section dark-translucent-bg fp-section fp-table active fp-completely\" *ngIf = \"current_user.user_level == 0\">\n \n      <div class=\"container\">\n        <h1 class=\"display-3\" style=\"color:#fff;\">Hello, {{current_user.first_name}} {{current_user.last_name}},\n          <span *ngIf='orders.length === 0'>your order history is empty.</span>\n          <span *ngIf=\"orders.length !== 0\">here is your order history.</span>\n        </h1>\n        <div class=\"list-group lis\" *ngFor=\"let o of orders\">\n          <p class=\"list-group-item list-group-item-action active\">\n            Order Created At:\n            <strong>{{o.createdAt | date: \"medium\"}}</strong>\n          </p>\n          <p class=\"list-group-item list-group-item-action\">Order Details: {{o.quantity}}\n          </p>\n          <p class=\"list-group-item list-group-item-action\">Unit Price:\n            <span *ngFor=\"let p of o.foods\">{{p.food_name}}: {{p.price}} dollars; </span>\n          </p>\n          <p class=\"list-group-item list-group-item-action\">Total Price: {{o.total_price}} dollars\n          </p>\n          <hr>\n        </div>\n      </div>\n\n  </section>\n\n  <section class=\"section dark-translucent-bg fp-section fp-table active fp-completely\" *ngIf=\"current_user.user_level == 9\">\n  \n    <div class=\"container\">\n      <h1 class=\"display-3\" style=\"color:#fff;\">Hello, {{current_user.first_name}} {{current_user.last_name}},\n        <span *ngIf='orders.length === 0'>your order history is empty.</span>\n        <span *ngIf=\"orders.length !== 0\">here is your order history.</span>\n      </h1>\n      <div class=\"list-group lis\" *ngFor=\"let o of orders\">\n        <p class=\"list-group-item list-group-item-action active\">\n          Order Created by:\n          <strong>{{o.order_user.first_name}} {{o.order_user.last_name}}</strong>\n        </p>\n        <p class=\"list-group-item list-group-item-action active\">\n          Order Created At:\n          <strong>{{o.createdAt | date: \"medium\"}}</strong>\n        </p>\n        <p class=\"list-group-item list-group-item-action\">Order Details: {{o.quantity}}\n        </p>\n        <p class=\"list-group-item list-group-item-action\">Unit Price:\n          <span *ngFor=\"let p of o.foods\">{{p.food_name}}: {{p.price}} dollars; </span>\n        </p>\n        <p class=\"list-group-item list-group-item-action\">Total Price: {{o.total_price}} dollars\n        </p>\n        <hr>\n      </div>\n    </div>\n  \n  </section>\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/order-history/order-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular4_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderHistoryComponent = (function () {
    function OrderHistoryComponent(_service, _router, authService) {
        this._service = _service;
        this._router = _router;
        this.authService = authService;
        this.orders = [];
    }
    OrderHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._service.social_user !== undefined) {
            this.current_user = this._service.social_user;
            console.log("1", this.current_user);
        }
        else {
            this.current_user = this._service.user;
            console.log("2", this.current_user);
        }
        if (this.current_user.user_level == 0) {
            this._service.retrieveOrder(function (res) {
                _this.orders = res;
            });
        }
        else {
            this._service.retrieveAllOrder(function (res) {
                _this.orders = res;
                console.log(res);
            });
        }
    };
    OrderHistoryComponent.prototype.signOut = function () {
        if (this._service.social_user !== undefined) {
            console.log(1);
            this._service.logout();
            this.authService.signOut();
            this._router.navigate(["/login"]);
        }
        if (this._service.user !== undefined) {
            console.log(2);
            this._service.logout();
            this._router.navigate(["/login"]);
        }
    };
    OrderHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-history',
            template: __webpack_require__("../../../../../src/app/order-history/order-history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/order-history/order-history.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angular4_social_login__["AuthService"]])
    ], OrderHistoryComponent);
    return OrderHistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/update-user/update-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".aler {\n  width: 71%;\n}\n\n.al {\n  padding-left: 15px;\n  padding-top: 14px;\n}\n\n/*.al_log {\n  padding-left: 15px;\n  padding-top: 14px;\n}*/\n\n.aler_log {\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/update-user/update-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h4 class=\"display-3\">Hello, {{user.name}}, please update your profile</h4>\n  <div class=\"container\">\n    <form id=\"signupform\" class=\"form-horizontal\" role=\"form\" (submit) = \"update()\" #registerForm = \"ngForm\">\n      <div class=\"form-group\" *ngIf = \"user.email == ''\">\n        <label for=\"email\" class=\"col-md-3 control-label\">Email</label>\n\n        <div class=\"col-md-9 input-group\">\n          <span class=\"input-group-addon\"><i class=\"fa fa-envelope-o fa-2x\" aria-hidden=\"true\"></i></span>\n\n          <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email Address\" [(ngModel)] = \"user_reg.email\" required email #reg_email = \"ngModel\">\n        </div>\n        <div *ngIf=\"reg_email.invalid && (reg_email.dirty || reg_email.touched)\" class=\"al\">\n          <div class=\"alert alert-dismissible alert-danger aler\" role=\"alert\">\n            <div *ngIf=\"reg_email.errors.required\">\n              <span> Email is required.</span>\n            </div>\n            <div *ngIf=\"reg_email.errors.email\">\n              <span>Please input an valid email.</span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      \n      <div class=\"form-group\">\n        <label for=\"password\" class=\"col-md-3 control-label\">Password</label>\n        <div class=\"col-md-9 input-group\">\n          <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-2x\" aria-hidden=\"true\"></i></span>\n          <input type=\"password\" class=\"form-control\" name=\"passwd\" placeholder=\"Password\" [(ngModel)] = \"user_reg.password\" #reg_password = \"ngModel\" required minlength=\"4\">\n        </div>\n        <div *ngIf=\"reg_password.invalid && (reg_password.dirty || reg_password.touched)\" class=\"al\">\n          <div class=\"alert alert-dismissible alert-danger aler\" role=\"alert\">\n            <div *ngIf=\"reg_password.errors.required\">\n              <span> Password is required.</span>\n            </div>\n            <div *ngIf=\"reg_password.errors.minlength\">\n              <span>Password need at least four characters.</span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"password\" class=\"col-md-3 control-label\">Password Confirmation</label>\n        <div class=\"col-md-9 input-group\">\n          <span class=\"input-group-addon\"><i class=\"fa fa-unlock fa-2x\" aria-hidden=\"true\"></i></span>\n          <input type=\"password\" class=\"form-control\" name=\"pass_con\" placeholder=\"Password confirmation\" [(ngModel)] = \"password_confirm.con\" #reg_confirm = \"ngModel\" pattern=\"{{user_reg.password}}\" required >\n        </div>\n        <div *ngIf=\"reg_confirm.invalid && (reg_confirm.dirty || reg_confirm.touched)\" class=\"al\">\n          <div class=\"alert alert-dismissible alert-danger aler\" role=\"alert\">\n            <div *ngIf=\"reg_confirm.errors.required\">\n              <span> Password confirmation is required.</span>\n            </div>\n            <div *ngIf=\"reg_confirm.errors.pattern\">\n              <span>Not mattch the password.</span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"col-md-offset-3 col-md-9\">\n          <button id=\"btn-signup\" type=\"submit\" class=\"btn btn-info\" [disabled] = \"registerForm.invalid\"><i class=\"icon-hand-right\"></i>Update</button>\n          <div class=\"alert alert-dismissible alert-danger aler\" role=\"alert\" *ngIf=\"error_message.email != ''\">\n            {{error_message.email}}\n          </div>\n\n        </div>\n      </div>\n\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/update-user/update-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateUserComponent = (function () {
    function UpdateUserComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.user_reg = {
            email: "",
            password: ""
        };
        this.password_confirm = {
            con: ""
        };
        this.error_message = {
            email: "",
        };
    }
    UpdateUserComponent.prototype.ngOnInit = function () {
        this.user = this._service.social_user;
        console.log(this.user);
    };
    UpdateUserComponent.prototype.update = function () {
        var _this = this;
        var data = {
            user: this.user,
            reg: this.user_reg
        };
        this._service.update_socialUser(data, function (res) {
            console.log(res);
            _this._router.navigate(["/"]);
        });
    };
    UpdateUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update-user',
            template: __webpack_require__("../../../../../src/app/update-user/update-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/update-user/update-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], UpdateUserComponent);
    return UpdateUserComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map