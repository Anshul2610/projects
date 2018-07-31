(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-home/admin-home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin-home/admin-home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-home/admin-home.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin-home/admin-home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"col-sm-4\"></div>\n<div class=\"col-sm-4\"><br><br><h1 align=\"center\">WELCOME ADMIN</h1><br><h2 align=\"center\">Select one:</h2><hr>\n  <div class=\"form-group\">\n    <input type=\"submit\" value=\"Register Employee\" class=\"btn btn-primary form-control\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"submit\" value=\"Register Project\" class=\"btn btn-primary form-control\">\n  </div>\n  <br><hr>\n</div>\n  <div class=\"col-sm-4\"></div>\n</div>"

/***/ }),

/***/ "./src/app/admin-home/admin-home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-home/admin-home.component.ts ***!
  \****************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminHomeComponent = /** @class */ (function () {
    function AdminHomeComponent() {
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
    };
    AdminHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-home',
            template: __webpack_require__(/*! ./admin-home.component.html */ "./src/app/admin-home/admin-home.component.html"),
            styles: [__webpack_require__(/*! ./admin-home.component.css */ "./src/app/admin-home/admin-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminHomeComponent);
    return AdminHomeComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!--<app-login></app-login>-->\n  <!--<app-home></app-home>-->\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _myservices_dataservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myservices/dataservice.service */ "./src/app/myservices/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-home/admin-home.component */ "./src/app/admin-home/admin-home.component.ts");
/* harmony import */ var _manager_home_manager_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manager-home/manager-home.component */ "./src/app/manager-home/manager-home.component.ts");
/* harmony import */ var _developer_home_developer_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./developer-home/developer-home.component */ "./src/app/developer-home/developer-home.component.ts");
/* harmony import */ var _tester_home_tester_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tester-home/tester-home.component */ "./src/app/tester-home/tester-home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _projectmembers_projectmembers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projectmembers/projectmembers.component */ "./src/app/projectmembers/projectmembers.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'admin-home',
        component: _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_8__["AdminHomeComponent"]
    },
    {
        path: 'manager-home',
        component: _manager_home_manager_home_component__WEBPACK_IMPORTED_MODULE_9__["ManagerHomeComponent"]
    },
    {
        path: 'developer-home',
        component: _developer_home_developer_home_component__WEBPACK_IMPORTED_MODULE_10__["DeveloperHomeComponent"]
    },
    {
        path: 'tester-home',
        component: _tester_home_tester_home_component__WEBPACK_IMPORTED_MODULE_11__["TesterHomeComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_8__["AdminHomeComponent"],
                _manager_home_manager_home_component__WEBPACK_IMPORTED_MODULE_9__["ManagerHomeComponent"],
                _developer_home_developer_home_component__WEBPACK_IMPORTED_MODULE_10__["DeveloperHomeComponent"],
                _tester_home_tester_home_component__WEBPACK_IMPORTED_MODULE_11__["TesterHomeComponent"],
                _projectmembers_projectmembers_component__WEBPACK_IMPORTED_MODULE_13__["ProjectmembersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_myservices_dataservice_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/developer-home/developer-home.component.css":
/*!*************************************************************!*\
  !*** ./src/app/developer-home/developer-home.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/developer-home/developer-home.component.html":
/*!**************************************************************!*\
  !*** ./src/app/developer-home/developer-home.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\"><br><br><h2 align=\"center\">WELCOME DEVELOPER</h2><br><hr>\n    <div class=\"form-group\">\n      <input type=\"submit\" value=\"Register Bug Solution Details\" class=\"btn btn-primary form-control\">\n    </div>\n    <hr>\n  </div>\n    <div class=\"col-sm-4\"></div>\n  </div>"

/***/ }),

/***/ "./src/app/developer-home/developer-home.component.ts":
/*!************************************************************!*\
  !*** ./src/app/developer-home/developer-home.component.ts ***!
  \************************************************************/
/*! exports provided: DeveloperHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperHomeComponent", function() { return DeveloperHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeveloperHomeComponent = /** @class */ (function () {
    function DeveloperHomeComponent() {
    }
    DeveloperHomeComponent.prototype.ngOnInit = function () {
    };
    DeveloperHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-developer-home',
            template: __webpack_require__(/*! ./developer-home.component.html */ "./src/app/developer-home/developer-home.component.html"),
            styles: [__webpack_require__(/*! ./developer-home.component.css */ "./src/app/developer-home/developer-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DeveloperHomeComponent);
    return DeveloperHomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>WELCOME TO HOME</h1>\n  <p ng-if=\"user==101\">Welcome ADMIN</p>\n  <p ng-if=\"user==102\">Welcome MANAGER</p>\n  <p ng-if=\"user==103\">Welcome DEVELOPER</p>\n  <p ng-if=\"user==104\">Welcome TESTER</p>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 align=\"center\">WELCOME TO BUG TRACKING SYSTEM</h1><br><br>\n    <div class=\"col-sm-6\">\n      <img src=\"./assets/bug2.jpg\"/>\n    </div>\n    <div class=\"col-sm-6\">\n      <h2>Login</h2><hr>\n      <form #loginForm=\"ngForm\" (ngSubmit)=\"onLogin(loginForm)\">\n        <div class=\"form-group\">\n          <label for=\"inlineRadio\" >User Type:&emsp;</label>\n            <label class=\"radio-inline\">\n                <input type=\"radio\" name=\"TypeId\" value=\"101\" ngModel #TypeId=\"ngModel\"> Admin\n              </label>\n              <label class=\"radio-inline\">\n                <input type=\"radio\" name=\"TypeId\" value=\"102\" ngModel #TypeId=\"ngModel\"> Manager\n              </label>\n              <label class=\"radio-inline\">\n                <input type=\"radio\" name=\"TypeId\"  value=\"103\" ngModel #TypeId=\"ngModel\"> Developer\n              </label>\n              <label class=\"radio-inline\">\n                  <input type=\"radio\" name=\"TypeId\"  value=\"104\" ngModel #TypeId=\"ngModel\"> Tester\n                </label>\n              <br><br>    \n          <label for=\"id\">Login ID:</label>\n          <input type=\"email\" id=\"id\" class=\"form-control\" name=\"mailId\" ngModel #mailId=\"ngModel\" required>\n          <br>\n          <label for=\"pass\">Password:</label>\n          <input type=\"password\" id=\"pass\" class=\"form-control\" name=\"password\" ngModel #password=\"ngModel\" required>\n          <br>\n          <input type=\"submit\" class=\"form-control btn btn-primary\" value=\"Login\">\n        </div>\n      </form>\n      \n    </div>\n  \n\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _myservices_dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myservices/dataservice.service */ "./src/app/myservices/dataservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, ds) {
        this.route = route;
        this.ds = ds;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (myform) {
        var _this = this;
        console.log(myform);
        this.ds.login(myform.value).subscribe(function (response) {
            console.log(response);
            _this.currentEmp = response;
            if (_this.currentEmp.TypeId == 101) {
                _this.route.navigate(['admin-home']);
            }
            else if (_this.currentEmp.TypeId == 102) {
                _this.route.navigate(['manager-home']);
            }
            else if (_this.currentEmp.TypeId == 103) {
                _this.route.navigate(['developer-home']);
            }
            else if (_this.currentEmp.TypeId == 104) {
                _this.route.navigate(['tester-home']);
            }
            else {
                _this.route.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _myservices_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/manager-home/manager-home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/manager-home/manager-home.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/manager-home/manager-home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/manager-home/manager-home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\"><br><br><h2 align=\"center\">WELCOME MANAGER</h2><br><hr>\n    <div class=\"form-group\">\n      <input type=\"submit\" value=\"Register Project Members\" class=\"btn btn-primary form-control\">\n    </div>\n    <hr>\n  </div>\n    <div class=\"col-sm-4\"></div>\n  </div>"

/***/ }),

/***/ "./src/app/manager-home/manager-home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/manager-home/manager-home.component.ts ***!
  \********************************************************/
/*! exports provided: ManagerHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerHomeComponent", function() { return ManagerHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManagerHomeComponent = /** @class */ (function () {
    function ManagerHomeComponent() {
    }
    ManagerHomeComponent.prototype.ngOnInit = function () {
    };
    ManagerHomeComponent.prototype.onClickProjectMembers = function () { };
    ManagerHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manager-home',
            template: __webpack_require__(/*! ./manager-home.component.html */ "./src/app/manager-home/manager-home.component.html"),
            styles: [__webpack_require__(/*! ./manager-home.component.css */ "./src/app/manager-home/manager-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManagerHomeComponent);
    return ManagerHomeComponent;
}());



/***/ }),

/***/ "./src/app/myservices/dataservice.service.ts":
/*!***************************************************!*\
  !*** ./src/app/myservices/dataservice.service.ts ***!
  \***************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.empUrl = "LoginServlet";
        this.empUrl1 = "EmployeeServlet";
        this.projUrl = "ProjectServlet";
    }
    DataService.prototype.addEmployee = function (emp) {
        return this.http.post(this.empUrl1, JSON.stringify(emp));
    };
    DataService.prototype.addProject = function (proj) {
        return this.http.post(this.projUrl, JSON.stringify(proj));
    };
    DataService.prototype.login = function (logind) {
        return this.http.post(this.empUrl, JSON.stringify(logind));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/projectmembers/projectmembers.component.css":
/*!*************************************************************!*\
  !*** ./src/app/projectmembers/projectmembers.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projectmembers/projectmembers.component.html":
/*!**************************************************************!*\
  !*** ./src/app/projectmembers/projectmembers.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <label for=\"id\">Project Id:</label>\n  <input type=\"text\" id=\"id\" name=\"project_id\" class=\"form-control\" ngModel #project_id=\"ngModel\">\n  <label for=\"mname\">Manager Name:</label>\n  <input type=\"text\" id=\"mname\" name=\"manager_name\" class=\"form-control\" ngModel #manager_name=\"ngModel\">\n  <label for=\"memname\">Member Name:</label>\n  <input type=\"text\" id=\"memname\" name=\"member_name\" class=\"form-control\" ngModel #member_name=\"ngModel\">\n  <label for=\"emp\">Employee Status:</label>\n  <input type=\"text\" id=\"emp\" name=\"emp_status\" class=\"form-control\" ngModel #emp_status=\"ngModel\">\n  <input type=\"submit\" value=\"Register\" class=\"form-control\">\n  <input type=\"cancel\" value=\"Reset\" class=\"form-control\">\n</div>"

/***/ }),

/***/ "./src/app/projectmembers/projectmembers.component.ts":
/*!************************************************************!*\
  !*** ./src/app/projectmembers/projectmembers.component.ts ***!
  \************************************************************/
/*! exports provided: ProjectmembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectmembersComponent", function() { return ProjectmembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectmembersComponent = /** @class */ (function () {
    function ProjectmembersComponent() {
    }
    ProjectmembersComponent.prototype.ngOnInit = function () {
    };
    ProjectmembersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projectmembers',
            template: __webpack_require__(/*! ./projectmembers.component.html */ "./src/app/projectmembers/projectmembers.component.html"),
            styles: [__webpack_require__(/*! ./projectmembers.component.css */ "./src/app/projectmembers/projectmembers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectmembersComponent);
    return ProjectmembersComponent;
}());



/***/ }),

/***/ "./src/app/tester-home/tester-home.component.css":
/*!*******************************************************!*\
  !*** ./src/app/tester-home/tester-home.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tester-home/tester-home.component.html":
/*!********************************************************!*\
  !*** ./src/app/tester-home/tester-home.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\"><br><br><h2 align=\"center\">WELCOME TESTER</h2><br><hr>\n    <div class=\"form-group\">\n      <input type=\"submit\" value=\"Register Bug\" class=\"btn btn-primary form-control\">\n    </div>\n    <hr>\n  </div>\n    <div class=\"col-sm-4\"></div>\n  </div>"

/***/ }),

/***/ "./src/app/tester-home/tester-home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/tester-home/tester-home.component.ts ***!
  \******************************************************/
/*! exports provided: TesterHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TesterHomeComponent", function() { return TesterHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TesterHomeComponent = /** @class */ (function () {
    function TesterHomeComponent() {
    }
    TesterHomeComponent.prototype.ngOnInit = function () {
    };
    TesterHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tester-home',
            template: __webpack_require__(/*! ./tester-home.component.html */ "./src/app/tester-home/tester-home.component.html"),
            styles: [__webpack_require__(/*! ./tester-home.component.css */ "./src/app/tester-home/tester-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TesterHomeComponent);
    return TesterHomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vishal gupta\Desktop\as\BugTrackingSystemProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map