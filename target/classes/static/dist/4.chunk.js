webpackJsonp([4,12],{

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deploy_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__deploy_routing_module__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(168);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeployModule", function() { return DeployModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DeployModule = (function () {
    function DeployModule() {
    }
    return DeployModule;
}());
DeployModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__deploy_routing_module__["a" /* DeployRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__deploy_component__["a" /* DeployComponent */]]
    })
], DeployModule);

//# sourceMappingURL=deploy.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_uploadService__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeployComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// const URL = 'http://168.3.21.155:8009/uploadpost';
// const URL = 'http://localhost:7001/SimpleHelloWorld/uploadpost';
// const URL = 'http://168.3.23.231:26066/SimpleHelloWorld/uploadpost';
// const URL = 'http://45.32.113.194:8080/SimpleHelloWorld/uploadpost';
// const URL = 'http://45.76.159.232:8009/uploadpost';
// const URL = 'https://168.3.23.224:18109/uploadpost';
const URL = '/uploadpost';
var DeployComponent = (function () {
    function DeployComponent(uploadService, http, el) {
        this.uploadService = uploadService;
        this.http = http;
        this.el = el;
        this.reset = function () {
            console.log('reset.....');
        };
    }
    // public submit(): void {
    //   console.log("submit......");
    //   this.uploadService.uploadOneFile("a").subscribe(res=>{
    //     console.log("response...."+res);
    //
    //   });
    //
    // }
    DeployComponent.prototype.submit = function () {
        var inputEl = this.el.nativeElement.querySelector('#file-input');
        var fileCount = inputEl.files.length;
        console.log('>>>上传文件的数量' + fileCount);
        var formData = new FormData();
        for (var i = 0; i < fileCount; i++) {
            if (fileCount > 0) {
                console.log('>>>' + inputEl.files.item(i).name);
                formData.append('file', inputEl.files.item(i));
            }
            this.http
                .post(URL, formData).map(function (res) { return res; }).subscribe(function (success) {
                alert(success._body);
            }, function (error) { return alert(error); });
        }
    };
    DeployComponent.prototype.ngOnInit = function () {
    };
    return DeployComponent;
}());
DeployComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(426),
        providers: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_1__service_uploadService__["a" /* UploadService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_uploadService__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_uploadService__["a" /* UploadService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object])
], DeployComponent);

var _a, _b, _c;
//# sourceMappingURL=deploy.component.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deploy_component__ = __webpack_require__(396);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeployRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__deploy_component__["a" /* DeployComponent */],
        data: {
            title: 'Deploy'
        }
    }
];
var DeployRoutingModule = (function () {
    function DeployRoutingModule() {
    }
    return DeployRoutingModule;
}());
DeployRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], DeployRoutingModule);

//# sourceMappingURL=deploy-routing.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <strong>{{title}}</strong> Elements\n  </div>\n  <div class=\"card-block\">\n    <form role=\"form\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n\n      <div class=\"form-group row\">\n        <label class=\"col-md-3 form-control-label\" for=\"file-input\">单个文件上传</label>\n        <div class=\"col-md-9\">\n          <input type=\"file\" id=\"file-input\" name=\"file-input\" >\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-md-3 form-control-label\" for=\"file-multiple-input\">多个文件上传</label>\n        <div class=\"col-md-9\">\n          <input type=\"file\" id=\"file-multiple-input\" name=\"file-multiple-input\" multiple>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"card-footer\">\n    <button (click)=\"submit()\" type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> 提交</button>\n    <button (click)=\"reset()\" type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> 重置</button>\n  </div>\n</div>\n\n\n\n\n"

/***/ })

});
//# sourceMappingURL=4.chunk.js.map