(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["common"],{

/***/ 2316:
/*!*******************************************!*\
  !*** ./src/app/services/sites.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SitesService": () => (/* binding */ SitesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 9344);


class SitesService {
    constructor(_toastr) {
        this._toastr = _toastr;
    }
}
SitesService.ɵfac = function SitesService_Factory(t) { return new (t || SitesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService)); };
SitesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SitesService, factory: SitesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2325:
/*!*******************************************!*\
  !*** ./src/app/services/snack.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackService": () => (/* binding */ SnackService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 9344);


class SnackService {
    constructor(_toastr) {
        this._toastr = _toastr;
    }
    presentError(message) {
        this._toastr.error(message, 'Error', { timeOut: 3000 });
    }
    presentInfo(message) {
        this._toastr.info(message, 'Info', { timeOut: 3000 });
    }
    presentSuccess(message) {
        this._toastr.success(message, 'Success', { timeOut: 3000 });
    }
}
SnackService.ɵfac = function SnackService_Factory(t) { return new (t || SnackService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService)); };
SnackService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SnackService, factory: SnackService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map