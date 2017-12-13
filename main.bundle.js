webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/addteammember/addteammember.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button{\r\n  background-color: #4CAF50; /* Green */\r\n  border-radius: 10px;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/addteammember/addteammember.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" >\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n    </div>\n    <div class=\"col-md-4\">\n      <h3><b>New Member Details</b></h3>\n    </div>\n    <div class=\"col-md-4\">\n    </div>\n  </div>\n  <br>\n  <br>\n  <div  class=\"row\">\n    <div class=\"col-md-4\">\n      <img [src]=\"editableMember.image\"><br>\n      <input type=\"file\" imageUpload\n             (imageSelected)=\"selected($event)\"\n             [resizeOptions]=\"resizeOptions\">\n      <!--<img src={{editableMember.image}}>-->\n      <br>\n      <div class=\"col-md-6\">\n        <span>FirstName: </span>\n        <input type=\"text\" class=\"form-control\" value={{editableMember.firstName}}/>\n\n      </div>\n      <div class=\"col-md-6\">\n        <span>LastName: </span>\n\n        <input type=\"text\" class=\"form-control\" value={{editableMember.lastName}}>\n\n      </div>\n\n    </div>\n\n\n    <div class=\"col-md-6\">\n      <span>Role: </span>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"editableMember.role\">\n\n      <span>Skills: </span>\n      <input type=\"text\" [(ngModel)]=\" editableMember.skills\" class=\"form-control\">\n    </div>\n  </div>\n  <div  class=\"row\">\n\n    <div class=\"col-md-6\">\n      <span>Country: </span>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"editableMember.country\">\n      <span>State: </span>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"editableMember.state\">\n      <span>City: </span>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"editableMember.city\">\n      <span>Zip: </span>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"editableMember.zip\">\n      <span>Street: </span>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"editableMember.street\">\n\n    </div>\n\n\n    <div class=\"col-md-5\">\n      <!--<a [routerLink]=\"['/add']\"  style=\"color: black; font-weight: bold; font-size: 25px;\">Add New Team Member</a>-->\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n\n      </agm-map>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <button class=\"button\" type=\"button\" (click)=\"add()\"> Add Member</button>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/addteammember/addteammember.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddteammemberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddteammemberComponent = (function () {
    function AddteammemberComponent(router) {
        this.router = router;
        this.team = null;
        this.src = "";
        this.teams = [];
        this.resizeOptions = {
            resizeMaxHeight: 128,
            resizeMaxWidth: 128
        };
    }
    AddteammemberComponent.prototype.selected = function (imageResult) {
        this.editableMember.image = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
        // alert(this.src)
    };
    AddteammemberComponent.prototype.add = function () {
        localStorage.removeItem('AllTeamMember');
        console.log(this.teams);
        this.teams.push(this.editableMember);
        localStorage.setItem('AllTeamMember', JSON.stringify(this.teams));
        this.teams = JSON.parse(localStorage.getItem('AllTeamMember')) || [];
        console.log(this.teams);
        this.router.navigate(['/dashboard']);
        alert("added new member");
    };
    AddteammemberComponent.prototype.ngOnInit = function () {
        // this.editableMember = JSON.parse(localStorage.getItem('TeamMember')) || 0;
        this.editableMember = {
            firstName: ' ',
            lastName: ' ',
            skills: ['A', 'B', 'C'],
            country: ' ',
            state: ' ',
            role: ' ',
            city: ' ',
            zip: ' ',
            street: ' ',
            image: ''
        };
        this.teams = JSON.parse(localStorage.getItem('AllTeamMember')) || [];
        console.log(this.teams);
    };
    AddteammemberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addteammember',
            template: __webpack_require__("../../../../../src/app/addteammember/addteammember.component.html"),
            styles: [__webpack_require__("../../../../../src/app/addteammember/addteammember.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
    ], AddteammemberComponent);
    return AddteammemberComponent;
    var _a;
}());

//# sourceMappingURL=addteammember.component.js.map

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

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__detailview_detailview_component__ = __webpack_require__("../../../../../src/app/detailview/detailview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__addteammember_addteammember_component__ = __webpack_require__("../../../../../src/app/addteammember/addteammember.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_imageupload__ = __webpack_require__("../../../../ng2-imageupload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_imageupload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_imageupload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__detailview_detailview_component__["a" /* DetailviewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__addteammember_addteammember_component__["a" /* AddteammemberComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routes__["b" /* routing */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_11_ng2_imageupload__["ImageUploadModule"],
                __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDG79KCdFgAHiLAB299ljqp5UCWSOFmCN4',
                    libraries: ['places']
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__app_routes__["a" /* appRoutingProviders */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detailview_detailview_component__ = __webpack_require__("../../../../../src/app/detailview/detailview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addteammember_addteammember_component__ = __webpack_require__("../../../../../src/app/addteammember/addteammember.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */]
    }, {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */]
    }, {
        path: 'detailview',
        component: __WEBPACK_IMPORTED_MODULE_2__detailview_detailview_component__["a" /* DetailviewComponent */]
    },
    {
        path: 'add',
        component: __WEBPACK_IMPORTED_MODULE_3__addteammember_addteammember_component__["a" /* AddteammemberComponent */]
    },
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.teambox {\r\n  background-color:#ffffff;\r\n  margin-left:30px;\r\n  margin-bottom:10px;\r\n  box-shadow: 0 8px 6px -6px #999;\r\n}\r\n\r\n.firstname {\r\n  font-weight:bold;\r\n  padding:5px 0 5px 0;\r\n}\r\n\r\n.name {\r\n  border-top:1px solid #dadada;\r\n  padding-top:5px;\r\n}\r\n\r\n.roletext {\r\n  font-weight:bold;\r\n  font-size:1.4em;\r\n\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 style=\"padding-top: 3%\"><b>{{teamName}}</b></h2>\n  <div  class=\"row\">\n\n  <div class=\"col-md-3 column teambox\" *ngFor=\"let team of teams\">\n\n    <a (click)=\"view(team)\" style=\"cursor: pointer\"><img src={{team.image}} class=\"img-responsive\" style=\"width: 100px; height:100px;    margin-left: 29%;\"></a>\n    <div class=\"firstname\"><h3 style=\"text-align: center; cursor: pointer;\" (click)=\"view(team)\">{{team.firstName}}</h3></div>\n    <div class=\"name\">\n      <div class=\"roletext\"><h4 style=\"cursor: pointer\" (click)=\"view(team)\">Role: <b>{{team.role}}</b></h4></div>\n    </div>\n  </div>\n  </div>\n  <br>\n  <div  class=\"row\">\n    <div class=\"col-md-3\">\n\n    </div>\n    <div class=\"col-md-4\">\n\n    </div>\n    <div class=\"col-md-5\">\n      <a [routerLink]=\"['/add']\"  style=\"\n      background-color: #4CAF50; /* Green */\n  border-radius: 15px;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\">Add New Member</a>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(router) {
        this.router = router;
        this.teamName = 'Main Dashboard';
        this.teams = [];
    }
    DashboardComponent.prototype.view = function ($team) {
        localStorage.setItem('TeamMember', JSON.stringify($team));
        this.router.navigate(['/detailview']);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.teams = JSON.parse(localStorage.getItem('AllTeamMember')) || [];
        console.log(this.teams);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/detailview/detailview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button {\r\n  background-color: #4CAF50; /* Green */\r\n  border-radius: 10px;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\r\n\r\nagm-map {\r\n  height: 300px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/detailview/detailview.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<img [src]=\"src\" [hidden]=\"!src\"><br>-->\n<!--<input type=\"file\" imageUpload-->\n<!--(imageSelected)=\"selected($event)\"-->\n<!--[resizeOptions]=\"resizeOptions\">-->\n\n\n\n<div class=\"container\" *ngIf=\"editflag==false\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <button class=\"button\" type=\"button\" (click)=\"back()\"> Back</button>\n    </div>\n    <div class=\"col-md-4\">\n      <h3><b>Profile</b></h3>\n    </div>\n    <div class=\"col-md-4\">\n      <button class=\"button\" type=\"button\" (click)=\"editit()\"> Edit</button>\n    </div>\n  </div>\n  <br>\n  <br>\n  <div *ngIf=\"editflag==false\" class=\"row\">\n    <div class=\"col-md-4\">\n      <img  style=\"width: 100px; height:100px;    margin-left: 29%;\" src={{editableMember.image}}>\n      <br>\n      <div class=\"col-md-6\">\n        <span>FirstName: </span>\n        <input type=\"text\" class=\"form-control\" value={{editableMember.firstName}} readonly>\n\n      </div>\n      <div class=\"col-md-6\">\n        <span>LastName: </span>\n\n        <input type=\"text\" class=\"form-control\" value={{editableMember.lastName}} readonly>\n\n      </div>\n\n    </div>\n\n\n    <div class=\"col-md-6\">\n      <span>Role: </span>\n      <input type=\"text\" class=\"form-control\" value={{editableMember.role}} readonly>\n      <span>Skills: </span>\n      <input *ngFor=\"let skill of editableMember.skills\" type=\"text\" class=\"form-control\" value={{skill}} readonly>\n    </div>\n  </div>\n  <div *ngIf=\"editflag==false\" class=\"row\">\n\n  <div class=\"col-md-6\">\n      <span>Country: </span>\n      <input type=\"text\" class=\"form-control\" value={{editableMember.country}} readonly>\n    <span>State: </span>\n    <input type=\"text\" class=\"form-control\" value={{editableMember.state}} readonly>\n    <span>City: </span>\n    <input type=\"text\" class=\"form-control\" value={{editableMember.city}} readonly>\n    <span>Zip: </span>\n    <input type=\"text\" class=\"form-control\" value={{editableMember.zip}} readonly>\n    <span>Street: </span>\n    <input type=\"text\" class=\"form-control\" value={{editableMember.street}} readonly>\n\n    </div>\n\n    <div class=\"col-md-5\">\n      <!--<a [routerLink]=\"['/add']\"  style=\"color: black; font-weight: bold; font-size: 25px;\">Add New Team Member</a>-->\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n      </agm-map>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"container\" *ngIf=\"editflag==true\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <button class=\"button\" type=\"button\" (click)=\"back()\"> Back</button>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>Individual view</h3>\n    </div>\n    <div class=\"col-md-4\">\n      <button class=\"button\" type=\"button\" (click)=\"editit()\"> Edit it</button>\n    </div>\n  </div>\n  <br>\n  <br>\n  <div *ngIf=\"editflag==true\" class=\"row\">\n    <div class=\"col-md-4\">\n      <img style=\"width: 100px; height:100px;    margin-left: 29%;\" [src]=\"editableMember.image\"><br>\n      <input type=\"file\" imageUpload\n             (imageSelected)=\"selected($event)\"\n             [resizeOptions]=\"resizeOptions\">\n      <!--<img src={{editableMember.image}}>-->\n      <br>\n      <div class=\"col-md-6\">\n        <span>FirstName: </span>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"editableMember.firstName\" />\n\n      </div>\n      <div class=\"col-md-6\">\n        <span>LastName: </span>\n\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"editableMember.lastName\" />\n\n      </div>\n\n    </div>\n\n\n    <div class=\"col-md-6\">\n      <span>Role: </span>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"editableMember.role\">\n\n      <span>Skills: </span>\n      <input type=\"text\" [(ngModel)]=\" editableMember.skills\" class=\"form-control\">\n    </div>\n  </div>\n  <div *ngIf=\"editflag==true\" class=\"row\">\n\n    <div class=\"col-md-6\">\n      <span>Country: </span>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"editableMember.country\">\n      <span>State: </span>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"editableMember.state\">\n      <span>City: </span>\n      <input type=\"text\" class=\"form-control\"  (keydown)=\"getCoard()\" [(ngModel)]=\"editableMember.city\">\n      <span>Zip: </span>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"editableMember.zip\">\n      <span>Street: </span>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"editableMember.street\">\n\n    </div>\n\n\n    <div class=\"col-md-5\">\n      <!--<a [routerLink]=\"['/add']\"  style=\"color: black; font-weight: bold; font-size: 25px;\">Add New Team Member</a>-->\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n\n      </agm-map>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <button class=\"button\" type=\"button\" (click)=\"update()\"> Update</button>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/detailview/detailview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailviewComponent = (function () {
    function DetailviewComponent(_location, mapsAPILoader, ngZone, http, router) {
        this._location = _location;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.http = http;
        this.router = router;
        this.teams = [];
        this.src = "";
        this.lat = 42.2754136;
        this.lng = -71.877778;
        this.editflag = false;
        this.resizeOptions = {
            resizeMaxHeight: 128,
            resizeMaxWidth: 128
        };
    }
    DetailviewComponent.prototype.back = function () {
        this._location.back();
    };
    DetailviewComponent.prototype.update = function () {
        var _this = this;
        console.log(this.teams);
        var index = this.teams.findIndex(function (i) { return i.firstName === _this.searchMember.firstName && i.lastName === _this.searchMember.lastName
            && i.image === _this.searchMember.image && i.country === _this.searchMember.country && i.city === _this.searchMember.city
            && i.street === _this.searchMember.street && i.zip === _this.searchMember.zip; });
        if (index !== -1) {
            localStorage.removeItem('AllTeamMember');
            console.log(this.editableMember);
            this.teams[index] = this.editableMember;
            alert('Team member updated');
            localStorage.setItem('AllTeamMember', JSON.stringify(this.teams));
            this.router.navigate(['/dashboard']);
        }
    };
    DetailviewComponent.prototype.editit = function () {
        this.editflag = true;
    };
    DetailviewComponent.prototype.getlocation = function (address) {
        return this.http.get('http://maps.googleapis.com/maps/api/geocode/json?address=' + address).map(function (response) { return response.json(); });
    };
    DetailviewComponent.prototype.selected = function (imageResult) {
        this.editableMember.image = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    };
    DetailviewComponent.prototype.ngOnInit = function () {
        // this.getLocation('lahore')
        this.teams = JSON.parse(localStorage.getItem('AllTeamMember')) || [];
        this.editableMember = JSON.parse(localStorage.getItem('TeamMember')) || [];
        this.searchMember = JSON.parse(localStorage.getItem('TeamMember')) || [];
        this.getCoard();
    };
    DetailviewComponent.prototype.getCoard = function () {
        var _this = this;
        this.getlocation(this.editableMember.city).subscribe(function (data) {
            // console.log(data);
            // this.location = Response;
            // console.log(data.results[0].geometry.location.lat);
            _this.lat = (data.results[0].geometry.location.lat);
            _this.lng = (data.results[0].geometry.location.lng);
            // console.log(data.results[0].formatted_address);
            // console.log(this.lng);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])("search"),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], DetailviewComponent.prototype, "searchElementRef", void 0);
    DetailviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-detailview',
            template: __webpack_require__("../../../../../src/app/detailview/detailview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/detailview/detailview.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _f || Object])
    ], DetailviewComponent);
    return DetailviewComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=detailview.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-xs-offset-3 col-xs-6\" style=\"margin-top: 15%;\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\"><b>Login</b> </div>\n    <div class=\"panel-body\">\n      <h3 style=\"text-align: center\">Welcome to Remote Team Management</h3>\n      <form name=\"signInForm\" novalidate (submit)=\"loginUser($event)\">\n        <div class=\"form-group \">\n          <input type=\"text\" name=\"Username\" [(ngModel)]=\"username\" class=\"form-control\" placeholder=\"Enter Username\" required />\n        </div>\n        <div class=\"form-group \">\n          <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Enter Password\" required />\n        </div>\n        <div class=\"input\">\n          <input type=\"submit\" class=\"btn btn-md btn-success\" value=\"Login\">\n        </div>\n      </form>\n      <h5 *ngIf=\"flag==true\" style=\"color: red\"> Username or password is incorrect</h5>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function LoginComponent(router) {
        this.router = router;
        this.usernametoMatch = 'admin';
        this.passwordtoMatch = 'test123';
        this.flag = false;
    }
    LoginComponent.prototype.loginUser = function () {
        if (this.username === this.usernametoMatch && this.password === this.passwordtoMatch) {
            this.router.navigate(['dashboard']);
        }
        else {
            this.flag = true;
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());

//# sourceMappingURL=login.component.js.map

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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map