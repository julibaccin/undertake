(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_app_modules_sendings_sendings_module_ts"],{

/***/ 608:
/*!*************************************************************!*\
  !*** ./src/app/modules/sendings/sendings-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendingsRoutingModule": () => (/* binding */ SendingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _sendings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendings.component */ 2535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    { path: '', component: _sendings_component__WEBPACK_IMPORTED_MODULE_0__.SendingsComponent }
];
class SendingsRoutingModule {
}
SendingsRoutingModule.ɵfac = function SendingsRoutingModule_Factory(t) { return new (t || SendingsRoutingModule)(); };
SendingsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SendingsRoutingModule });
SendingsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SendingsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2535:
/*!********************************************************!*\
  !*** ./src/app/modules/sendings/sendings.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendingsComponent": () => (/* binding */ SendingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ 11);



class SendingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SendingsComponent.ɵfac = function SendingsComponent_Factory(t) { return new (t || SendingsComponent)(); };
SendingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SendingsComponent, selectors: [["app-sendings"]], decls: 7, vars: 0, template: function SendingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Todos los envios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " 3462302916 -> Success -> Hola Julian Buenos d\u00EDas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_1__.MatListItem, _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW5kaW5ncy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 468:
/*!*****************************************************!*\
  !*** ./src/app/modules/sendings/sendings.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendingsModule": () => (/* binding */ SendingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _sendings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendings.component */ 2535);
/* harmony import */ var _sendings_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sendings-routing.module */ 608);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 2271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);





class SendingsModule {
}
SendingsModule.ɵfac = function SendingsModule_Factory(t) { return new (t || SendingsModule)(); };
SendingsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SendingsModule });
SendingsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _sendings_routing_module__WEBPACK_IMPORTED_MODULE_1__.SendingsRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SendingsModule, { declarations: [_sendings_component__WEBPACK_IMPORTED_MODULE_0__.SendingsComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _sendings_routing_module__WEBPACK_IMPORTED_MODULE_1__.SendingsRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_sendings_sendings_module_ts.js.map