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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    function AppComponent() {
        this.title = "app";
        console.log("constructor : AppComponent");
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__item_item_component__ = __webpack_require__("../../../../../src/app/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__itemlist_itemlist_component__ = __webpack_require__("../../../../../src/app/itemlist/itemlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_item_service_mock__ = __webpack_require__("../../../../../src/app/services/item.service.mock.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__student_dashboard_student_dashboard_component__ = __webpack_require__("../../../../../src/app/student-dashboard/student-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__student_home_student_home_component__ = __webpack_require__("../../../../../src/app/student-home/student-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__subject_details_subject_details_component__ = __webpack_require__("../../../../../src/app/subject-details/subject-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__chapter_chapter_component__ = __webpack_require__("../../../../../src/app/chapter/chapter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__content_content_component__ = __webpack_require__("../../../../../src/app/content/content.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: "dashboard",
        component: __WEBPACK_IMPORTED_MODULE_11__student_dashboard_student_dashboard_component__["a" /* StudentDashboardComponent */],
        children: [
            {
                path: "",
                component: __WEBPACK_IMPORTED_MODULE_13__student_home_student_home_component__["a" /* StudentHomeComponent */]
            },
            {
                path: "subject-details",
                component: __WEBPACK_IMPORTED_MODULE_14__subject_details_subject_details_component__["a" /* SubjectDetailsComponent */]
            }
        ]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__student_dashboard_student_dashboard_component__["a" /* StudentDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__itemlist_itemlist_component__["a" /* ItemlistComponent */],
                __WEBPACK_IMPORTED_MODULE_7__item_item_component__["a" /* ItemComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__student_home_student_home_component__["a" /* StudentHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__subject_details_subject_details_component__["a" /* SubjectDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__chapter_chapter_component__["a" /* ChapterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__content_content_component__["a" /* ContentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_item_service_mock__["a" /* ItemServiceMock */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/chapter/chapter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chapter/chapter.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  chapter works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/chapter/chapter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChapterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChapterComponent = (function () {
    function ChapterComponent() {
    }
    ChapterComponent.prototype.ngOnInit = function () {
    };
    ChapterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chapter',
            template: __webpack_require__("../../../../../src/app/chapter/chapter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chapter/chapter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChapterComponent);
    return ChapterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/content/content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  max-width: 100%;\n}\n\n.content-image {\n  display: block;\n  margin: 10px auto;\n  width: auto;\n}\n\n.content-video {\n  width: 100%;\n}\n\n.video-frame {\n  width: 560px;\n  height: 315px;\n}\n\n@media only screen and (min-width: 360px) {\n  .content-video {\n    width: 100%;\n  }\n\n  .video-frame {\n    width: 100%;\n    height: 200px;\n  }\n}\n\n@media only screen and (min-width: 720px) {\n  .content-video {\n    width: 100%;\n  }\n\n  .content-image {\n    max-width: 100%;\n    display: inline-block;\n  }\n\n  .video-frame {\n    width: 540px;\n    height: 315px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"content-heading\">Heading</h1>\n<p class=\"content-para\">\n  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto inventore quae incidunt molestias in autem? Nulla quas\n  earum nam asperiores assumenda nostrum enim illum? Ullam doloribus nam distinctio quisquam architecto! Lorem ipsum dolor\n  sit amet consectetur adipisicing elit. Atque excepturi error voluptatum sed laudantium culpa quisquam dolorem, inventore\n  vero ducimus totam asperiores eligendi incidunt, nisi necessitatibus accusamus perspiciatis quo rem?\n</p>\n<img class=\"content-image\" src=\"./assets/chapters-img/1.jpg\">\n<img class=\"content-image\" src=\"./assets/chapters-img/2.jpg\">\n<img class=\"content-image\" src=\"./assets/chapters-img/3.jpg\">\n<p class=\"content-para\">\n  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto inventore quae incidunt molestias in autem? Nulla quas\n  earum nam asperiores assumenda nostrum enim illum? Ullam doloribus nam distinctio quisquam architecto! Lorem ipsum dolor\n  sit amet consectetur adipisicing elit. Atque excepturi error voluptatum sed laudantium culpa quisquam dolorem, inventore\n  vero ducimus totam asperiores eligendi incidunt, nisi necessitatibus accusamus perspiciatis quo rem?\n</p>\n<div class=\"content-video\">\n  <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/WrCKrN9E_bU\" frameborder=\"0\" gesture=\"media\" allow=\"encrypted-media\"\n    allowfullscreen></iframe>\n  <!-- <iframe class=\"video-frame\" src=\"https://www.youtube.com/embed/Xu_jhb9t7ic\" frameborder=\"0\" allowfullscreen></iframe> -->\n  <!-- <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Xu_jhb9t7ic\" frameborder=\"0\" allowfullscreen></iframe> -->\n  <!-- <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Xu_jhb9t7ic\" frameborder=\"0\" allowfullscreen></iframe> -->\n</div>\n<p class=\"content-para\">\n  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto inventore quae incidunt molestias in autem? Nulla quas\n  earum nam asperiores assumenda nostrum enim illum? Ullam doloribus nam distinctio quisquam architecto! Lorem ipsum dolor\n  sit amet consectetur adipisicing elit. Atque excepturi error voluptatum sed laudantium culpa quisquam dolorem, inventore\n  vero ducimus totam asperiores eligendi incidunt, nisi necessitatibus accusamus perspiciatis quo rem?\n</p>\n<p class=\"content-para\">\n  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto inventore quae incidunt molestias in autem? Nulla quas\n  earum nam asperiores assumenda nostrum enim illum? Ullam doloribus nam distinctio quisquam architecto! Lorem ipsum dolor\n  sit amet consectetur adipisicing elit. Atque excepturi error voluptatum sed laudantium culpa quisquam dolorem, inventore\n  vero ducimus totam asperiores eligendi incidunt, nisi necessitatibus accusamus perspiciatis quo rem?\n</p>"

/***/ }),

/***/ "../../../../../src/app/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-content',
            template: __webpack_require__("../../../../../src/app/content/content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/item/item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  /* --pad: 8px; */\n  background-color: white;\n  width: 250px;\n  box-shadow: 0px 1px 1px darkgray;\n  padding: 8px;\n}\n.card .img-container {\n  position: relative;\n  left: 0;\n  top: 0;\n  cursor: pointer;\n  /* padding: var(--md-pad); */\n}\n\n.img-container .desc {\n  transition: all 300ms ease-in-out;\n}\n\n.hide {\n  /* display: none; */\n  visibility: hidden;\n  opacity: 0;\n}\n\n.img-container .desc-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  font-size: 2em;\n  /* padding: var(--pad); */\n}\n\n.card .desc-container #desc {\n  word-wrap: break-word;\n}\n\n.txt-pad {\n  /* padding-top: var(--pad); */\n  /* padding-bottom: var(--pad); */\n}\n\n.category {\n  font-size: 1.8em;\n  font-weight: 400;\n}\n.card .content .title {\n  font-size: 2em;\n  font-weight: 500;\n}\n\n.card .content .duration {\n  font-size: 1.8em;\n  font-weight: 400;\n}\n\n.desc-container {\n  width: 100%;\n}\n\n.desc-container .desc {\n  width: 100%;\n  height: 100%;\n}\n\n/**********************************************Material css*****************************************************/\n\n.example-card {\n  width: 200px;\n}\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\nmat-card-actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/item/item.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"card\">\n  <div class=\"img-container\" (mouseenter)=\"this.isHidden = !this.isHidden\" (mouseleave)=\"this.isHidden = !this.isHidden;\">\n    <img class=\"item-img\" [src]=\"item.imagePath\">\n    <div class=\"desc\" [ngClass]=\"{ 'hide':isHidden, 'desc-container': true}\">\n      <p>\n        {{item.desc}}\n      </p>\n    </div>\n  </div>\n  <div class=\"content\">\n    <h3 class=\"title txt-pad\">{{item.title}}</h3>\n    <h3 class=\"category\">{{item.category}}</h3>\n    <h3 class=\"duration txt-pad\" *ngIf=\"item.duration != 0\">aprox. {{item.duration}} mins</h3>\n    <h3 class=\"duration txt-pad\" *ngIf=\"item.duration == 0\">watch and see</h3>\n    <button (click)=\"viewContent()\" class=\"secondary block\">View</button>\n  </div>\n</div> -->\n\n<mat-card class=\"example-card\">\n  <!-- <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header> -->\n  <img mat-card-image [src]=\"item.imagePath\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      Encapsulation in Java Encapsulation in Java\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>\n      <i class=\"material-icons\">favorite</i>Favourite\n    </button>\n    <button mat-button>\n      <i class=\"material-icons\">book</i> Read\n    </button>\n\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/item/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item_model__ = __webpack_require__("../../../../../src/app/models/item.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemComponent = (function () {
    /** constructor */
    function ItemComponent() {
        this.isHidden = true;
        console.log("constructor: ItemComponent");
    }
    ItemComponent.prototype.viewContent = function () {
        console.log("showcontent...");
        console.dir(this.item.title);
    };
    ItemComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("itemobj"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_item_model__["a" /* Item */])
    ], ItemComponent.prototype, "item", void 0);
    ItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-item",
            template: __webpack_require__("../../../../../src/app/item/item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/item/item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/itemlist/itemlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".items-container-wrapper {\n  background-color: #ff0000;\n  background: -webkit-linear-gradient(top, white, white);\n  color: #161616;\n  /* background: -o-linear-gradient(right, #ff1bd8, #ff0000);\n  background: -moz-linear-gradient(right, #ff1bd8, #ff0000);\n  background: linear-gradient(to right, #ff1bd8, #ff0000); */\n  box-shadow: 0 1px 1px 1px darkgray;\n  border-radius: 5px;\n  padding: 8px;\n  /* margin: 32px 0; */\n  /* padding-bottom: 16px; */\n}\n\n.items-container-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 5px 0;\n}\n\n.heading {\n  /* margin-top: 32px; */\n  /* margin-bottom: 16px; */\n  font-size: 1.6em;\n  font-weight: normal;\n  color: #161616;\n}\n\n.items-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  overflow: scroll;\n  /* margin: 32px 0; */\n}\n\n.items-container .item {\n  /* margin: 5px; */\n  padding: 8px 0;\n}\n\n.items-container .item:nth-of-type(1) {\n  margin-left: 0;\n}\n\n.items-container .item:last-of-type {\n  margin-right: 0;\n}\n\n.view-btn {\n  border: 1px solid #4b4eb7;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/itemlist/itemlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"items-container-wrapper\">\n    <div class=\"items-container-header\">\n        <h1 class=\"heading\">{{title}}</h1>\n        <button mat-raised-button color=\"primary\">View All</button>\n    </div>\n\n    <div class=\"items-container\">\n        <app-item class=\"item\" *ngFor=\"let _item of items\" [itemobj]=\"_item\"></app-item>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/itemlist/itemlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_service_mock__ = __webpack_require__("../../../../../src/app/services/item.service.mock.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemlistComponent = (function () {
    function ItemlistComponent(_itemService) {
        this._itemService = _itemService;
        console.log("ItemList ---->>>>>>>" + _itemService);
    }
    // @Input()
    // set title(title: string) {
    //   console.log(`value of title : ${title}`);
    //   this._title = (title && title.trim()) || '<no title set>';
    // }
    // get title() {
    //   return this._title;
    // }
    // @Overridden from OnInit
    ItemlistComponent.prototype.ngOnInit = function () {
        this.items = this._itemService.items();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ItemlistComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], ItemlistComponent.prototype, "pageSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ItemlistComponent.prototype, "somethingElse", void 0);
    ItemlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-itemlist",
            template: __webpack_require__("../../../../../src/app/itemlist/itemlist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/itemlist/itemlist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_item_service_mock__["a" /* ItemServiceMock */]])
    ], ItemlistComponent);
    return ItemlistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-container-wrapper {\n  /* background: red; */\n  /* background: -webkit-linear-gradient(left, #ff1bd8, #ff0000);\n  background: -o-linear-gradient(right, #ff1bd8, #ff0000);\n  background: -moz-linear-gradient(right, #ff1bd8, #ff0000);\n  background: linear-gradient(to right, #ff1bd8, #ff0000); */\n  /* background: -webkit-linear-gradient(left, #4050b4, #ff1bd8);\n  background: -o-linear-gradient(right, #4050b4, #ff1bd8);\n  background: -moz-linear-gradient(right, #4050b4, #ff1bd8);\n  background: linear-gradient(to right, #4050b4, #ff1bd8); */\n\n  min-height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\ndiv.spacer {\n  padding: 4px 0;\n}\n.title {\n  font-size: 1.5rem;\n}\n.or {\n  text-align: center;\n  margin: 4px 0;\n  color: #161616;\n}\n.login-container {\n  /* background: linear-gradient(45deg, yellow, orangered); */\n  background: linear-gradient(to right, #4050b4, #ff1bd8);\n  color: rgb(45, 45, 45);\n  /* background-color: rgba(255, 255, 255, 0.1); */\n  width: 50%;\n  min-height: 60vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  /* border: 1px solid mintcream; */\n  border-radius: 10px;\n  transition: all 300ms ease-in-out;\n  /* color: mintcream; */\n  padding: 16px 0;\n  color: #161616;\n}\n\n.login-container:hover {\n  background: white;\n  cursor: pointer;\n}\nmat-form-field {\n  font-size: 2rem;\n  /* color: #161616; */\n}\n.login-container .title {\n  font-size: 2em;\n  /* color: rgb(45, 45, 45); */\n  font-size: 3rem;\n  margin-top: 0;\n}\n\n.form-fields-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 80%;\n  /*height: 50%;*/\n}\n\n.form-fields-container label {\n  font-size: 1.2rem;\n  color: rgb(45, 45, 45);\n}\n\n/* .form-fields-container input[type=\"text\"] {\n  height: 40px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  font-size: 1.5em;\n  background-color: rgba(255, 255, 255, 0.38);\n  border: 1px solid mintcream;\n} */\n\n/* .form-fields-container input[type=\"password\"] {\n  \n  height: 40px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  font-size: 1.5rem;\n  border: 1px solid mintcream;\n  background-color: rgba(255, 255, 255, 0.38);\n} */\n.form-buttons-panel {\n  width: 80%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  background-color: transparent;\n  /* border: 1px solid mintcream; */\n}\n.login-container .form-buttons-panel input[type=\"button\"] {\n  padding: 10px;\n  width: 50%;\n  color: rgb(45, 45, 45);\n  /*color: orangered;*/\n  border: 0;\n  font-size: 1rem;\n  background-color: rgba(255, 255, 255, 0.47);\n}\n\n.btn-login {\n  /* width: 50%; */\n  /* text-align: left;\n  font-size: 1.6rem;\n  padding: 4px; */\n  background-color: inherit;\n  border: 1px solid white;\n  color: white;\n}\n\n.login-container:hover .btn-login {\n  background: -webkit-linear-gradient(left, #4050b4, #ff1bd8);\n  /* color: black; */\n}\n.btn-google {\n  color: rgb(241, 72, 54);\n  padding: 8px;\n}\n.btn-facebook {\n  /* background-color: blue; */\n  color: #3b5998;\n  padding: 8px;\n  /* border-radius: 50%; */\n}\n\n.login-container .form-buttons-panel input[type=\"button\"]:hover {\n  background-color: transparent;\n}\n\n@media only screen and (min-width: 240px) {\n  /* mat-sidenav-container mat-sidenav {\n      width: 80%;\n      min-height: 100vh;\n    } */\n}\n\n@media only screen and (min-width: 360px) {\n  .login-container {\n    width: 90%;\n  }\n}\n\n@media only screen and (min-width: 540px) {\n  .login-container {\n    width: 75%;\n  }\n}\n\n@media only screen and (min-width: 720px) {\n  .login-container {\n    width: 50%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container-wrapper\">\n  <div class=\"login-container\">\n\n    <h3 class=\"title\">Login</h3>\n    <h1 class=\"or\">with</h1>\n    <div class=\"form-buttons-panel\">\n\n      <button mat-button class=\"btn-google\">\n        <i class=\"fa fa-google fa-3x\" aria-hidden=\"true\"></i>\n      </button>\n      <button mat-button class=\"btn-facebook\">\n        <i class=\"fa fa-facebook fa-3x\"></i>\n\n      </button>\n    </div>\n    <h1 class=\"or\">Or</h1>\n    <div class=\"form-fields-container\">\n\n      <!-- <input type=\"text\" id=\"username\"> -->\n      <mat-form-field>\n        <input matInput placeholder=\"Username\">\n      </mat-form-field>\n\n      <div class=\"spacer\"></div>\n\n      <!-- <input type=\"password\" id=\"password\"> -->\n      <mat-form-field>\n        <input matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\">\n        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n      </mat-form-field>\n\n    </div>\n    <div class=\"form-buttons-panel\">\n      <button mat-button class=\"btn-login\" (click)=\"login()\">\n        <i class=\"fa fa-sign-in fa-3x\"></i>\n        <span class=\"spacer\"></span>Sign In\n      </button>\n      <button mat-button class=\"btn-login\" color=\"secondary\">\n        <i class=\"fa fa-sign-up fa-3x\"></i>\n        Sign Up\n      </button>\n    </div>\n  </div>\n</div>\n<!-- <router-outlet></router-outlet> -->"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function LoginComponent(router, currentRoute) {
        this.router = router;
        this.currentRoute = currentRoute;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        console.log("login clicked...");
        this.router.navigate(["dashboard"]);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-login",
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/item.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item(_title, _category, _imagePath, _duration, _desc, _keywords) {
        if (_duration === void 0) { _duration = 0; }
        if (_desc === void 0) { _desc = "Description not available"; }
        this._title = _title;
        this._category = _category;
        this._imagePath = _imagePath;
        this._duration = _duration;
        this._desc = _desc;
        this._keywords = _keywords;
    }
    Object.defineProperty(Item.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "category", {
        get: function () {
            return this._category;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "imagePath", {
        get: function () {
            return this._imagePath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "desc", {
        get: function () {
            return this._desc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "keywords", {
        get: function () {
            return this._keywords;
        },
        enumerable: true,
        configurable: true
    });
    return Item;
}());



/***/ }),

/***/ "../../../../../src/app/services/item.service.mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemServiceMock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item_model__ = __webpack_require__("../../../../../src/app/models/item.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ItemServiceMock = (function () {
    function ItemServiceMock() {
    }
    //   private _items: Item[] = [];
    // constructor(private http: HttpClient) {}
    ItemServiceMock.prototype.items = function () {
        return this.createItems();
    };
    ItemServiceMock.prototype.createItems = function () {
        var _items = [];
        _items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item_model__["a" /* Item */]("Encapsulation in Java", "Java", "./assets/books-img/1.jpg", 10));
        _items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item_model__["a" /* Item */]("Title 2", "Java", "./assets/books-img/2.jpg"));
        _items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item_model__["a" /* Item */]("Title 3", "Java", "./assets/books-img/3.jpg"));
        _items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item_model__["a" /* Item */]("Title 4", "Java", "./assets/books-img/4.jpg"));
        _items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item_model__["a" /* Item */]("Title 5", "Java", "./assets/books-img/5.jpg"));
        _items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item_model__["a" /* Item */]("Title 6", "Java", "./assets/books-img/6.jpg"));
        _items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item_model__["a" /* Item */]("Title 7", "Java", "./assets/books-img/7.jpg"));
        _items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item_model__["a" /* Item */]("Title 8", "Java", "./assets/books-img/8.jpg"));
        _items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item_model__["a" /* Item */]("Title 9", "Java", "./assets/books-img/9.jpg"));
        _items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item_model__["a" /* Item */]("Title 10", "Java", "./assets/books-img/10.jpg"));
        _items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item_model__["a" /* Item */]("Title 11", "Java", "./assets/books-img/11.jpg"));
        _items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item_model__["a" /* Item */]("Title 12", "Java", "./assets/books-img/12.jpg"));
        _items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item_model__["a" /* Item */]("Title 13", "Java", "./assets/books-img/13.jpg"));
        _items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item_model__["a" /* Item */]("Title 14", "Java", "./assets/books-img/14.jpg"));
        _items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item_model__["a" /* Item */]("Title 15", "Java", "./assets/books-img/15.jpg"));
        _items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item_model__["a" /* Item */]("Title 16", "Java", "./assets/books-img/16.jpg"));
        _items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item_model__["a" /* Item */]("Title 17", "Java", "./assets/books-img/17.jpg"));
        _items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item_model__["a" /* Item */]("Title 18", "Java", "./assets/books-img/18.jpg"));
        return _items;
    };
    ItemServiceMock = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], ItemServiceMock);
    return ItemServiceMock;
}());



/***/ }),

/***/ "../../../../../src/app/student-dashboard/student-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-sidenav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: visible;\n}\n.spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.scrolling-content {\n  overflow: auto;\n  min-height: calc(100vh - 64px);\n  max-height: calc(100vh - 64px);\n  /* background-color: tomato; */\n  padding: 4px;\n  background-color: #f1f1f1;\n}\n.logo {\n  padding: 0 4px;\n}\n.right-align {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.mat-toolbar.mat-primary {\n  /* background: -webkit-linear-gradient(left, #ff1bd8, #ff0000);\n  background: -o-linear-gradient(right, #ff1bd8, #ff0000);\n  background: -moz-linear-gradient(right, #ff1bd8, #ff0000);\n  background: linear-gradient(to right, #ff1bd8, #ff0000); */\n  background: linear-gradient(to right, #3f51b5, #ff1bd8);\n}\n\n.notification {\n  text-decoration: none;\n  padding: 4px;\n  /* margin: 4px; */\n}\n.mat-menu-panel {\n  padding: 8px !important;\n}\nmat-toolbar mat-toolbar-row {\n  padding-left: 4px;\n  padding-right: 4px;\n}\nmat-icon {\n  /* padding: 0 8px; */\n  min-width: 48px;\n  min-height: 48px;\n  /* outline: 1px solid white; */\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  transition: all 300ms ease-in-out;\n  /* border-radius: 50%;\n    background-color: red; */\n\n  /* height: 100%; */\n}\n\n.mat-card:not([class*=\"mat-elevation-z\"]) {\n  box-shadow: 0 0px 0px -0px rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.14),\n    0 0px 0px 0 rgba(0, 0, 0, 0.12);\n}\n\n.user-img {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  border-radius: 50%;\n  border: 1px dashed darkgray;\n  padding: 4px;\n}\n\n.icon-close {\n  /* border-radius: 50%; */\n  /* background-color: white; */\n  /* color: red; */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student-dashboard/student-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n\n        <mat-icon (click)=\"toggleMenu()\" [ngClass]=\"{'icon-close': !isMenu}\">\n            <i class=\"material-icons\">{{ isMenu ? 'menu' : 'close'}}</i>\n        </mat-icon>\n\n        <img src=\"../assets/only_logo_white.svg\" alt=\"logo image\">\n        <span class=\"spacer\"></span>\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n            <i class=\"material-icons\">notifications</i>\n\n        </button>\n        <mat-menu #menu=\"matMenu\">\n            <button mat-icon-button>\n                <i class=\"material-icons\">clear_all</i>\n            </button>\n            <p href=\"#\" class=\"notification\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corrupti, fuga nisi ullam ratione commodi placeat\n                id, quae doloribus inventore soluta veniam nulla quis voluptate sunt. Facilis harum quis repudiandae.</p>\n            <hr/>\n            <p href=\"#\" class=\"notification\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, possimus provident modi nisi ipsa eius,\n                sed vel cupiditate illo et delectus dolores explicabo labore nulla quod. Ut beatae fugiat delectus.</p>\n            <hr/>\n            <p href=\"#\" class=\"notification\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia veritatis excepturi neque. Omnis aperiam doloribus\n                explicabo sed odit ipsum asperiores dignissimos laborum accusantium fugiat, accusamus, voluptatum architecto\n                cum iste?\n            </p>\n            <hr/>\n            <p href=\"#\" class=\"notification\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corrupti, fuga nisi ullam ratione commodi placeat\n                id, quae doloribus inventore soluta veniam nulla quis voluptate sunt. Facilis harum quis repudiandae.</p>\n            <hr/>\n            <p href=\"#\" class=\"notification\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, possimus provident modi nisi ipsa eius,\n                sed vel cupiditate illo et delectus dolores explicabo labore nulla quod. Ut beatae fugiat delectus.</p>\n            <hr/>\n            <p href=\"#\" class=\"notification\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia veritatis excepturi neque. Omnis aperiam doloribus\n                explicabo sed odit ipsum asperiores dignissimos laborum accusantium fugiat, accusamus, voluptatum architecto\n                cum iste?\n            </p>\n            <hr/>\n            <p href=\"#\" class=\"notification\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia veritatis excepturi neque. Omnis aperiam doloribus\n                explicabo sed odit ipsum asperiores dignissimos laborum accusantium fugiat, accusamus, voluptatum architecto\n                cum iste?\n            </p>\n            <hr/>\n            <p href=\"#\" class=\"notification\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia veritatis excepturi neque. Omnis aperiam doloribus\n                explicabo sed odit ipsum asperiores dignissimos laborum accusantium fugiat, accusamus, voluptatum architecto\n                cum iste?\n            </p>\n            <hr/>\n            <p href=\"#\" class=\"notification\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia veritatis excepturi neque. Omnis aperiam doloribus\n                explicabo sed odit ipsum asperiores dignissimos laborum accusantium fugiat, accusamus, voluptatum architecto\n                cum iste?\n            </p>\n            <hr/>\n            <p href=\"#\" class=\"notification\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia veritatis excepturi neque. Omnis aperiam doloribus\n                explicabo sed odit ipsum asperiores dignissimos laborum accusantium fugiat, accusamus, voluptatum architecto\n                cum iste?\n            </p>\n            <hr/>\n            <p href=\"#\" class=\"notification\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia veritatis excepturi neque. Omnis aperiam doloribus\n                explicabo sed odit ipsum asperiores dignissimos laborum accusantium fugiat, accusamus, voluptatum architecto\n                cum iste?\n            </p>\n\n        </mat-menu>\n    </mat-toolbar-row>\n\n</mat-toolbar>\n<mat-sidenav-container class=\"side-nav-container\">\n    <mat-sidenav #sidenav mode=\"side\" opened=\"false\">\n        <div class=\"scrolling-content\">\n            <mat-card class=\"profile-card\">\n                <mat-card-header>\n                    <div mat-card-avatar class=\"example-header-image\"></div>\n                    <mat-card-title>Shiv Sunder</mat-card-title>\n                    <mat-card-subtitle>Mechanical Engineering</mat-card-subtitle>\n                    <mat-card-subtitle>Semester 4</mat-card-subtitle>\n                </mat-card-header>\n                <img mat-card-image src=\"../assets/user.svg\" alt=\"Photo of User\" class=\"user-img\">\n                <mat-card-content>\n\n                </mat-card-content>\n                <mat-card-actions class=\"right-align\">\n                    <button mat-icon-button>\n                        <i class=\"material-icons\">settings</i>\n\n                    </button>\n                    <!-- <button mat-icon-button>\n                        <i class=\"material-icons\" style=\"color :red;\">favorite</i>\n\n                    </button> -->\n\n                </mat-card-actions>\n            </mat-card>\n            <mat-list>\n                <button mat-button class=\"block left-align\" (click)=\"navigate('dashboard')\">\n                    <i class=\"material-icons\">home</i>\n                    <span class=\"spacer\"></span>Home\n                </button>\n                <h3 mat-subheader>\n                    <i class=\"material-icons\">view_list</i>Subjects\n                </h3>\n                <mat-list-item (click)=\"showSubjectDetails()\">\n                    <!-- <mat-icon mat-list-icon>folder</mat-icon> -->\n                    <button mat-button class=\"block left-align\">Engineering Mathematics</button>\n\n                </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item>\n                    <!-- <mat-icon mat-list-icon>folder</mat-icon> -->\n                    <button mat-button class=\"block left-align\">Fundamental Electrical</button>\n\n                </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item>\n                    <!-- <mat-icon mat-list-icon>folder</mat-icon> -->\n                    <button mat-button class=\"block left-align\">Fundamental Electronics</button>\n\n                </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item>\n                    <!-- <mat-icon mat-list-icon>folder</mat-icon> -->\n                    <button mat-button class=\"block left-align\">Electronics & Communications</button>\n\n                </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item>\n                    <!-- <mat-icon mat-list-icon>folder</mat-icon> -->\n                    <button mat-button class=\"block left-align\">Communication</button>\n\n                </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item>\n                    <!-- <mat-icon mat-list-icon>folder</mat-icon> -->\n                    <button mat-button class=\"block left-align\">Mechanical Engineering</button>\n\n                </mat-list-item>\n                <mat-divider></mat-divider>\n            </mat-list>\n            <button mat-button class=\"block left-align\" class=\"block left-align\" style=\"text-align: left;vertical-align: middle;\">\n                <i class=\"material-icons\">archive</i>\n                <span class=\"spacer\"></span>Archived\n            </button>\n\n            <button mat-button class=\"block left-align\" class=\"block left-align\" style=\"text-align: left;vertical-align: middle;\">\n                <i class=\"material-icons\">favorite</i>\n                <span class=\"spacer\"></span>Favourites\n            </button>\n            <!-- <button mat-button class=\"block left-align\">\n          <i class=\"material-icons\">share</i><span class=\"spacer\"></span>Share\n        </button> -->\n            <button mat-button class=\"block left-align\">\n                <i class=\"material-icons\">feedback</i>\n                <span class=\"spacer\"></span>Feedback\n            </button>\n            <button mat-button class=\"block left-align\" (click)=\"exit()\">\n                <i class=\"material-icons\">exit_to_app</i>\n                <span class=\"spacer\"></span>Exit\n            </button>\n        </div>\n    </mat-sidenav>\n\n    <div class=\"scrolling-content\">\n        <router-outlet></router-outlet>\n    </div>\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/student-dashboard/student-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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



var StudentDashboardComponent = (function () {
    function StudentDashboardComponent(router) {
        this.router = router;
        this.isMenu = true;
        console.log("Constructor : StudentDashboard ");
    }
    StudentDashboardComponent.prototype.toggleMenu = function () {
        console.log("sidenav : " + this.sidenav);
        this.toggle();
    };
    StudentDashboardComponent.prototype.toggle = function () {
        this.sidenav.toggle();
        this.isMenu = !this.isMenu;
    };
    StudentDashboardComponent.prototype.showSubjectDetails = function () {
        console.log("method : showChapters");
        this.router.navigate(["dashboard/subject-details"]);
        this.toggle();
    };
    StudentDashboardComponent.prototype.navigate = function (to) {
        this.router.navigate([to]);
    };
    StudentDashboardComponent.prototype.exit = function () {
        this.router.navigate([""]);
    };
    StudentDashboardComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("sidenav"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatSidenav */])
    ], StudentDashboardComponent.prototype, "sidenav", void 0);
    StudentDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-student-dashboard",
            template: __webpack_require__("../../../../../src/app/student-dashboard/student-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/student-dashboard/student-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], StudentDashboardComponent);
    return StudentDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/student-home/student-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-container {\n  margin: 16px 0;\n  /* background: #fe1cd8; */\n  /* background: linear-gradient(to right, #ff1bd8, #ff0000); */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student-home/student-home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Student Dashboard</h1>\n<div class=\"list-container\">\n    <app-itemlist [title]=\"'Most Watched'\" [pageSize]=\"10\"></app-itemlist>\n</div>\n<div class=\"list-container\">\n    <app-itemlist [title]=\"'Recent Updates'\" [pageSize]=\"10\"></app-itemlist>\n</div>\n<div class=\"list-container\">\n    <app-itemlist [title]=\"'Quizes'\" [pageSize]=\"10\"></app-itemlist>\n</div>\n<div class=\"list-container\">\n    <app-itemlist [title]=\"'Test Papers'\" [pageSize]=\"10\"></app-itemlist>\n</div>"

/***/ }),

/***/ "../../../../../src/app/student-home/student-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentHomeComponent = (function () {
    function StudentHomeComponent() {
        console.log("constructor : StudentHomeComponent");
    }
    StudentHomeComponent.prototype.ngOnInit = function () { };
    StudentHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-student-home",
            template: __webpack_require__("../../../../../src/app/student-home/student-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/student-home/student-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentHomeComponent);
    return StudentHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/subject-details/subject-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-step-header .mat-step-icon {\n  background-color: #bb092d;\n  color: rgba(255, 255, 255, 0.87);\n}\n\n::ng-deep mat-step-header .mat-step-icon[ng-reflect-ng-switch=\"edit\"] mat-icon {\n  /* content: \"home\"; */\n  /* background-image: url(\"http://placehold.it/20x20\"); */\n  content: \"home\";\n  color: #3f51b5;\n  /* background-color: red; */\n  /* color: yellow; */\n  /* visibility: hidden; */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subject-details/subject-details.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Mechanical Engineering</h3>\n<!-- <button mat-raised-button (click)=\"isLinear = true\" id=\"toggle-linear\">Enable linear mode</button> -->\n\n<mat-vertical-stepper [linear]=\"true\">\n  <mat-step editable=\"true\" completed>\n    <ng-template matStepLabel>Chapter 1</ng-template>\n    <app-content></app-content>\n    <div>\n      <button mat-button matStepperNext>Next</button>\n      <button mat-button>\n        <i class=\"material-icons\">favorite</i>Add to favourite\n      </button>\n    </div>\n  </mat-step>\n  <mat-step editable=\"true\">\n    <ng-template matStepLabel>Chapter 2</ng-template>\n    <app-content></app-content>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n      <button mat-button>\n        <i class=\"material-icons\">favorite</i>Add to favourite\n      </button>\n    </div>\n  </mat-step>\n  <mat-step editable=\"true\">\n    <ng-template matStepLabel>Chapter 3</ng-template>\n    <app-content></app-content>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n      <button mat-button>\n        <i class=\"material-icons\">favorite</i>Add to favourite\n      </button>\n    </div>\n  </mat-step>\n  <mat-step editable=\"true\">\n    <div>\n      <ng-template matStepLabel>Chapter 4</ng-template>\n      <app-content></app-content>\n    </div>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n      <button mat-button>\n        <i class=\"material-icons\">favorite</i>Add to favourite\n      </button>\n    </div>\n  </mat-step>\n  <mat-step editable=\"true\">\n    <div>\n      <ng-template matStepLabel>Chapter 5</ng-template>\n      <app-content></app-content>\n    </div>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button>\n        <i class=\"material-icons\">favorite</i>Add to favourite\n      </button>\n    </div>\n  </mat-step>\n</mat-vertical-stepper>"

/***/ }),

/***/ "../../../../../src/app/subject-details/subject-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubjectDetailsComponent = (function () {
    function SubjectDetailsComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    SubjectDetailsComponent.prototype.ngOnInit = function () { };
    SubjectDetailsComponent.prototype.activateStep = function (step) {
        console.log("step ---> " + step);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("stepHeader"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatStepHeader */])
    ], SubjectDetailsComponent.prototype, "stepHeader", void 0);
    SubjectDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-subject-details",
            template: __webpack_require__("../../../../../src/app/subject-details/subject-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/subject-details/subject-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], SubjectDetailsComponent);
    return SubjectDetailsComponent;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map