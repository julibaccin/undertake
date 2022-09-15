(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_app_modules_home_home_module_ts"],{

/***/ 4601:
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 5493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    {
        path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5493:
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 3166);




class HomeComponent {
    constructor() {
    }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 142, vars: 0, consts: [[1, "backg", "min-vh-100"], [1, "container", "py-3", 2, "max-width", "1200px"], [1, "navbar", "navbar-expand-lg", "navbar-dark", 2, "padding-bottom", "120px"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarTogglerDemo01", "aria-controls", "navbarTogglerDemo01", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarTogglerDemo01", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "href", "#servicios", 1, "nav-link", "active"], ["aria-current", "page", "href", "#nosotros", 1, "nav-link", "active"], ["aria-current", "page", "href", "#contacto", 1, "nav-link", "active"], [1, "buttons"], ["routerLink", "/login", 1, "btn", "btn-outline-light", 2, "border-radius", "100px"], ["routerLink", "/register", 1, "btn", "mx-2", 2, "background-color", "#482BE7", "border-radius", "100px", "color", "#fff"], [1, "row", "justify-content-center", "align-items-center", "text-center", "text-white", "txt-main"], [1, "col-10", "col-sm-8", "mb-2"], [1, "mb-2"], [2, "border", "1px solid"], [1, "mb-5"], [2, "font-weight", "700"], [1, "btn", "btn-outline-light", "my-3", 2, "border-radius", "100px"], [1, "container-fluid"], ["name", "servicios"], [1, "row", "pb-3"], [1, "col-12", "col-md-5", "img2"], [1, "col-12", "col-md-7", "py-5"], [1, "text-left", "py-5", "px-5", "txt-prod"], ["src", "../../../assets/logodata.png"], [1, "py-3"], [1, "btn", "btn-lg", "my-2", 2, "border-radius", "100px", "margin-right", "15px", "background-color", "#109CF1", "color", "#fff"], [1, "btn", "btn-lg", "my-2", 2, "border-radius", "100px", "border", "2px solid #109CF1", "color", "#109CF1"], [1, "row"], [1, "col-12", "col-md-5", "img3"], [1, "pb-3"], [1, "me-2"], [2, "font-weight", "500", "color", "rgba(21, 20, 57, 0.4)"], [1, "py-2"], [1, "d-flex", "py-3", "justify-content-around"], ["appearance", "legacy", 2, "width", "50%"], ["matInput", "", "placeholder", "Tu correo electr\u00F3nico"], ["href", "mailto:undertakecontacto@gmail.com?Subject=Deseo%20mas%20informacion%20sobre%20UndertakeWeb"], [1, "btn", "btn-outline-light", 2, "background-color", "#4C488D", "border-radius", "100px", "height", "50px", "width", "113px", "font-size", "18px"], ["name", "nosotros"], [1, "back2", "text-white", "py-5"], [1, "row", "justify-content-center", "py-5"], [1, "col-10", "py-5"], [1, "py-5"], [1, "py-3", 2, "font-weight", "700", "letter-spacing", "3px"], [2, "font-weight", "400", "letter-spacing", "1px"], ["name", "contacto"], [1, "backg-contacto", "text-white"], [1, "row", "py-5", "justify-content-center"], [1, "col-10", "col-md-6", "py-5"], [1, "py-2", 2, "font-weight", "700"], [1, "d-flex", "align-items-center", "py-3"], ["src", "../../../assets/insta.png", "alt", "", 2, "height", "25px", "padding-right", "15px"], ["target", "_blank", "href", "https://instagram.com/undertakeoficial", 1, "btn", "btn-outline-light", 2, "text-decoration", "none", "font-size", "15px", "font-weight", "400", "border-radius", "20px"], ["src", "../../../assets/what.png", "alt", "", 2, "height", "25px", "padding-right", "15px"], ["target", "_blank", "href", "https://api.whatsapp.com/send?phone=5492215949132&text=Hola%20Undertake!", 1, "btn", "btn-outline-light", 2, "text-decoration", "none", "font-size", "15px", "font-weight", "400", "border-radius", "20px"], ["src", "../../../assets/telegram.png", "alt", "", 2, "height", "25px", "padding-right", "15px"], ["target", "_blank", "href", "https://t.me/undertakeoficial", 1, "btn", "btn-outline-light", 2, "text-decoration", "none", "font-size", "15px", "font-weight", "400", "border-radius", "20px"], ["src", "../../../assets/telefono.png", "alt", "", 2, "height", "25px", "padding-right", "15px"], ["target", "_blank", "href", "https://calendly.com/undertake/", 1, "btn", "btn-outline-light", 2, "text-decoration", "none", "font-size", "15px", "font-weight", "400", "border-radius", "20px"], ["src", "../../../assets/mail.png", "alt", "", 2, "height", "25px", "padding-right", "15px"], ["target", "_blank", "href", "mailto:undertakecontacto@gmail.com", 1, "btn", "btn-outline-light", 2, "text-decoration", "none", "font-size", "15px", "font-weight", "400", "border-radius", "20px"], [1, "d-flex", "align-items-start", "py-3"], ["src", "../../../assets/ubicacion.png", "alt", "", 2, "height", "25px", "padding-right", "15px"], ["routerLink", "/admin", 2, "font-size", "18px", "font-weight", "500"], [1, "footer", "pt-2", "pb-1", 2, "background-color", "#2F1893"], [1, "container", "py-5"], [1, "col-12", "col-sm-4", "text-center", "mb-3"], ["src", "../../../assets/ft-logo.jpg", 1, "mb-1", 2, "border-radius", "10px"], [1, "mb-3", "font-weight-bold", "text-white"], [1, "mb-3"], ["target", "_blank", "href", "https://instagram.com/undertakeoficial"], ["src", "../../../assets/ft-inst.png", 1, "mx-2"], ["target", "_blank", "href", "mailto:undertakecontacto@gmail.com"], ["src", "../../../assets/ft-mail.png", 1, "mx-2"], ["target", "_blank", "href", "https://api.whatsapp.com/send?phone=5492215949132&text=Hola%20Undertake!"], ["src", "../../../assets/ft-wht.png", 1, "mx-2"], [1, "col-12", "col-sm-4", "mb-4", "text-center", "text-sm-start"], [1, "text-white", "mb-4", "font-weight-bold"], ["href", "#servicios", 1, "text-white", 2, "text-decoration", "none"], ["href", "#nosotros", 1, "text-white", 2, "text-decoration", "none"], [1, "text-white", "text-center", 2, "font-size", "16px", "font-weight", "400"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Undertake");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ingresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Crear cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "NOVEDADES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "UndertakeData:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Un CRM creado para fidelizar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "M\u00E1s informaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Creamos esta herramienta para automatizar la comunicaci\u00F3n vendedor-cliente. Presentamos un CRM que permite desarrollar campa\u00F1as de mensajes totalmente personalizados.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Comenzar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Ver demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "UndertakeWeb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h6", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Pr\u00F3ximamente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Crea tu p\u00E1gina web personalizada y profesional en cuesti\u00F3n de minutos. Ofrec\u00E9 tus productos y/o servicios online y digitaliza tu negocio.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u00BFTe gustar\u00EDa saber cuando est\u00E9 disponible? \u00A1Te avisaremos!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-form-field", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Listo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h1", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Sobre Nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h2", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Undertake es una Start-Up tecnol\u00F3gica que tiene como prop\u00F3sito fomentar el emprendedurismo a trav\u00E9s del desarrollo de soluciones digitales y la educaci\u00F3n. Actualmente, la empresa opera en Argentina y Ecuador.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h1", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Seguinos en Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Enviar WhatsApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Enviar Telegram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Acordar un llamada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Enviar Correo electronico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "La Plata,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Buenos Aires, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Argentina. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "footer", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h2", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Undertake");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h5", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "UndertakeData");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h5", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Sobre nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h3", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\u00A9 Undertake. Todos los derechos reservados.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput], styles: ["*[_ngcontent-%COMP%] {\r\n\tfont-family: 'DM Sans', sans-serif;\r\n}\r\n.btn[_ngcontent-%COMP%]:hover {\r\n\topacity: 0.7;\r\n}\r\n.backg[_ngcontent-%COMP%] {\r\n\tbackground: url('fondoheader.jpg');\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n\t\r\n}\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n\tfont-size: 34px;\r\n\tfont-weight: 700; \r\n\tfont-style: normal; \r\n\tletter-spacing: -0.292683px;\r\n}\r\n.navbar-nav[_ngcontent-%COMP%] {\r\n\tmargin-left: auto;\r\n}\r\n.nav-item[_ngcontent-%COMP%] {\r\n\tfont-size: 16px;\r\n\tfont-weight: 500;\r\n}\r\n\r\n.txt-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{\r\n\tfont-family: 'DM Sans', sans-serif;\r\n}\r\n.txt-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\tfont-size: 38px;\r\n}\r\n\r\n.txt-prod[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\tfont-size: 42px;\r\n\tfont-weight: 700;\r\n\tcolor: #4C488D;\r\n}\r\n.txt-prod[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tfont-family: 'DM Sans', sans-serif;\r\n\tfont-size: 22px;\r\n\tfont-weight: 500;\r\n\tcolor: #515152;\r\n}\r\n.txt-prod[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n\tfont-size: 17px;\r\n}\r\n.txt-prod[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\theight: 80px;\r\n}\r\n.img2[_ngcontent-%COMP%] {\r\n\tbackground: url('img2.jpg');\r\n\tbackground-position: center;\r\n\tbackground-size: cover;\r\n}\r\n.img3[_ngcontent-%COMP%] {\r\n\tbackground: url('img3.jpg');\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n}\r\n\r\n.back2[_ngcontent-%COMP%] {\r\n\tbackground-color:#2F1893;\r\n}\r\n.back2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\r\n\tfont-family: 'DM Sans', sans-serif;\r\n\tfont-style: normal;\r\n}\r\n.back2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\tfont-size: 42px;\r\n}\r\n.back2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tfont-size: 21px;\r\n}\r\n.txt-nosotros[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\tfont-weight: 700;\r\n\tfont-size: 20px;\r\n\tfont-style: normal;\r\n}\r\n.txt-nosotros[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tfont-size: 18px;\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n.backg-contacto[_ngcontent-%COMP%] {\t\r\n\tbackground: url('fondocontacto.jpg');\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n}\r\n.backg-contacto[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\tfont-size: 42px;\r\n\tletter-spacing: 2px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n\tfont-size: 18px;\r\n}\r\n@media (max-width: 600px) {\r\n\t\r\n\t.txt-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\t\tfont-size: 30px;\r\n\t}\r\n\t\r\n\t.txt-prod[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\t\tfont-size: 32px;\r\n\t}\r\n\t.txt-prod[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\t\tfont-size: 20px;\r\n\t}\r\n\t.txt-prod[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n\t\tfont-size: 15px;\r\n\t}\r\n\t.txt-prod[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\t\theight: 60px;\r\n\t}\r\n\t\r\n\t.back2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\t\tfont-size: 30px;\r\n\t}\r\n\t.back2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\t\r\n\t.backg-contacto[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\t\tfont-size: 32px;\r\n\t}\r\n}\r\n@media (max-width: 450px) {\r\n\t.navbar-brand[_ngcontent-%COMP%] {\r\n\t\tfont-size: 30px;\r\n\t}\r\n\t.txt-prod[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\t\theight: 50px;\r\n\t}\r\n\t.txt-prod[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\r\n\t.txt-prod[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\t\tfont-size: 26px;\r\n\t}\r\n\t.txt-prod[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n\t\tfont-size: 12px;\r\n\t}\r\n}\r\n@media (max-width: 300px) {\r\n\t.navbar-brand[_ngcontent-%COMP%] {\r\n\t\tfont-size: 28px;\r\n\t}\r\n\t.txt-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\t\tfont-size: 26px;\r\n\t}\r\n\t.txt-prod[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\t\theight: 45px;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFDbkI7Q0FDQyxrQ0FBa0M7QUFDbkM7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUVBO0NBQ0Msa0NBQWdEO0NBQ2hELHNCQUFzQjtDQUN0QiwyQkFBMkI7O0FBRTVCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQiwyQkFBMkI7QUFDNUI7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjtBQUVBLGFBQWE7QUFDYjtDQUNDLGtDQUFrQztBQUNuQztBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUVBLGNBQWM7QUFFZDtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsY0FBYztBQUNmO0FBRUE7Q0FDQyxrQ0FBa0M7Q0FDbEMsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7QUFFQTtDQUNDLGVBQWU7QUFDaEI7QUFFQTtDQUNDLFlBQVk7QUFDYjtBQUVBO0NBQ0MsMkJBQXlDO0NBQ3pDLDJCQUEyQjtDQUMzQixzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLDJCQUF5QztDQUN6QyxzQkFBc0I7Q0FDdEIsMkJBQTJCO0FBQzVCO0FBRUEsbUJBQW1CO0FBRW5CO0NBQ0Msd0JBQXdCO0FBQ3pCO0FBRUE7Q0FDQyxrQ0FBa0M7Q0FDbEMsa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7QUFFQSxhQUFhO0FBQ2I7Q0FDQyxvQ0FBa0Q7Q0FDbEQsc0JBQXNCO0NBQ3RCLDJCQUEyQjtBQUM1QjtBQUVBO0NBQ0MsZUFBZTtDQUNmLG1CQUFtQjtBQUNwQjtBQUVBLFdBQVc7QUFHWDtDQUNDLGVBQWU7QUFDaEI7QUFFQTtDQUNDLFlBQVk7Q0FDWjtFQUNDLGVBQWU7Q0FDaEI7Q0FDQSxpQkFBaUI7Q0FDakI7RUFDQyxlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxZQUFZO0NBQ2I7Q0FDQSxtQkFBbUI7Q0FDbkI7RUFDQyxlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxlQUFlO0NBQ2hCO0NBQ0EsWUFBWTtDQUNaO0VBQ0MsZUFBZTtDQUNoQjtBQUNEO0FBRUE7Q0FDQztFQUNDLGVBQWU7Q0FDaEI7Q0FDQTtFQUNDLFlBQVk7Q0FDYjtDQUNBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7Q0FDQTtFQUNDLGVBQWU7Q0FDaEI7QUFDRDtBQUVBO0NBQ0M7RUFDQyxlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxZQUFZO0NBQ2I7QUFDRCIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKm5hdiBpdGVtICBjZW50ZXIqL1xyXG4qIHtcclxuXHRmb250LWZhbWlseTogJ0RNIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5idG46aG92ZXIge1xyXG5cdG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLmJhY2tnIHtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ZvbmRvaGVhZGVyLmpwZyk7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0XHJcbn1cclxuLm5hdmJhci1icmFuZCB7XHJcblx0Zm9udC1zaXplOiAzNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7IFxyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcblx0bGV0dGVyLXNwYWNpbmc6IC0wLjI5MjY4M3B4O1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiB7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5uYXYtaXRlbSB7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8qIFRYVCBQUEFMICovXHJcbi50eHQtbWFpbiBoMSwgaDJ7XHJcblx0Zm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4udHh0LW1haW4gaDEge1xyXG5cdGZvbnQtc2l6ZTogMzhweDtcclxufVxyXG5cclxuLyogUFJPRFVDVE9TICovXHJcblxyXG4udHh0LXByb2QgaDEge1xyXG5cdGZvbnQtc2l6ZTogNDJweDtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGNvbG9yOiAjNEM0ODhEO1xyXG59XHJcblxyXG4udHh0LXByb2QgaDIge1xyXG5cdGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAyMnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Y29sb3I6ICM1MTUxNTI7XHJcbn1cclxuXHJcbi50eHQtcHJvZCBoNiB7XHJcblx0Zm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4udHh0LXByb2QgaW1nIHtcclxuXHRoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5pbWcyIHtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZzIuanBnKTtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uaW1nMyB7XHJcblx0YmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWczLmpwZyk7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIFNPQlJFIE5PU09UUk9TICovXHJcblxyXG4uYmFjazIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzJGMTg5MztcclxufVxyXG5cclxuLmJhY2syIGgxLCBoMiB7XHJcblx0Zm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5iYWNrMiBoMSB7XHJcblx0Zm9udC1zaXplOiA0MnB4O1xyXG59XHJcbi5iYWNrMiBoMiB7XHJcblx0Zm9udC1zaXplOiAyMXB4O1xyXG59XHJcbi50eHQtbm9zb3Ryb3MgaDEge1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG4udHh0LW5vc290cm9zIGgyIHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbi8qIENPTlRBQ1RPICovXHJcbi5iYWNrZy1jb250YWN0byB7XHRcclxuXHRiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ZvbmRvY29udGFjdG8uanBnKTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLmJhY2tnLWNvbnRhY3RvIGgxIHtcclxuXHRmb250LXNpemU6IDQycHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG5cclxuLyogRk9PVEVSICovXHJcblxyXG5cclxuZm9vdGVyIGg1IHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cdC8qIHR4dCBwcGFsKi9cclxuXHQudHh0LW1haW4gaDEge1xyXG5cdFx0Zm9udC1zaXplOiAzMHB4O1xyXG5cdH1cclxuXHQvKiB0eHQgcHJvZHVjdG9zKi9cclxuXHQudHh0LXByb2QgaDEge1xyXG5cdFx0Zm9udC1zaXplOiAzMnB4O1xyXG5cdH1cclxuXHQudHh0LXByb2QgaDIge1xyXG5cdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdH1cclxuXHQudHh0LXByb2QgaDYge1xyXG5cdFx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdH1cclxuXHQudHh0LXByb2QgaW1nIHtcclxuXHRcdGhlaWdodDogNjBweDtcclxuXHR9XHJcblx0Lyogc29icmUgbm9zb3Ryb3MgKi9cclxuXHQuYmFjazIgaDEge1xyXG5cdFx0Zm9udC1zaXplOiAzMHB4O1xyXG5cdH1cclxuXHQuYmFjazIgaDIge1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdH1cclxuXHQvKiBjb250YWN0byovXHJcblx0LmJhY2tnLWNvbnRhY3RvIGgxIHtcclxuXHRcdGZvbnQtc2l6ZTogMzJweDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG5cdC5uYXZiYXItYnJhbmQge1xyXG5cdFx0Zm9udC1zaXplOiAzMHB4O1xyXG5cdH1cclxuXHQudHh0LXByb2QgaW1nIHtcclxuXHRcdGhlaWdodDogNTBweDtcclxuXHR9XHJcblx0LnR4dC1wcm9kIGgyIHtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHR9XHJcblxyXG5cdC50eHQtcHJvZCBoMSB7XHJcblx0XHRmb250LXNpemU6IDI2cHg7XHJcblx0fVxyXG5cdC50eHQtcHJvZCBoNiB7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzAwcHgpIHtcclxuXHQubmF2YmFyLWJyYW5kIHtcclxuXHRcdGZvbnQtc2l6ZTogMjhweDtcclxuXHR9XHJcblx0LnR4dC1tYWluIGgxIHtcclxuXHRcdGZvbnQtc2l6ZTogMjZweDtcclxuXHR9XHJcblx0LnR4dC1wcm9kIGltZyB7XHJcblx0XHRoZWlnaHQ6IDQ1cHg7XHJcblx0fVxyXG59Il19 */"] });


/***/ }),

/***/ 4882:
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 4601);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 5493);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 2271);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);






class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_home_home_module_ts.js.map