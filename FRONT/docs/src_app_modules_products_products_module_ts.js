(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_app_modules_products_products_module_ts"],{

/***/ 3998:
/*!******************************************************************************!*\
  !*** ./src/app/modules/products/components/addupdate/addupdate.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddupdateComponent": () => (/* binding */ AddupdateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/products.service */ 9531);





class AddupdateComponent {
    constructor(_formBuilder, _productsService) {
        this._formBuilder = _formBuilder;
        this._productsService = _productsService;
        //IMAGES
        this.mainFile = null;
    }
    ngOnInit() {
        this.form = this._formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            productCategory: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            main: [false, []],
        });
    }
    handleFileInput(e, identificador) {
        var reader = new FileReader();
        reader.onload = (e) => {
            this.urlMain = e.target.result;
        };
        reader.onerror = (e) => {
            console.log('File could not be read: ' + e.target.error.code);
        };
        identificador == 1;
        this.mainFile = e.target.files[0];
        reader.readAsDataURL(this.mainFile);
    }
    uploadImage(type, urlSite, file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const imageName = type + urlSite;
            //let referencia = (await this._fireStorage.upload(imageName, file)).ref;
            //return await referencia.getDownloadURL();
        });
    }
    createProduct() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let { name, description, price, main, productCategory } = this.form.value;
            let imgUrl = yield this.uploadImage('product', name, this.mainFile);
            // let newProduct: IProduct = {
            //   name,
            //   description,
            //   price,
            //   main,
            //   //imgUrl,
            //   productCategory,
            //   active: true,
            // }
            //await this._productsService.addProduct(newProduct, 'divergentesbatik'); 
            alert("Producto Creado con Exito");
            this.form.reset();
            this.mainFile = null;
            this.urlMain = "";
        });
    }
}
AddupdateComponent.??fac = function AddupdateComponent_Factory(t) { return new (t || AddupdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService)); };
AddupdateComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: AddupdateComponent, selectors: [["app-addupdate"]], decls: 36, vars: 2, consts: [[1, "row", "my-4"], [1, "my-3"], ["action", "", 1, "text-dark", 3, "formGroup", "submit"], [1, "row"], [1, "col-12", "col-md-6"], [1, "form-floating", "mb-3"], ["type", "text", "id", "floatingInput", "formControlName", "name", 1, "form-control"], ["for", "floatingInput"], ["type", "text", "id", "floatingPassword", "formControlName", "description", 1, "form-control"], ["type", "number", "id", "floatingPassword", "formControlName", "price", 1, "form-control"], ["type", "number", "id", "floatingPassword", "formControlName", "productCategory", 1, "form-control"], [1, "form-check", "mb-3"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", "formControlName", "main", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label", "text-light"], [1, "col-12"], [1, "col-sm-12", "col-md-6", "mt-3"], [1, "mb-3"], ["for", "formFile", 1, "form-label", "text-white"], ["accept", "image/png, image/jpeg", "type", "file", 1, "form-control", 3, "change"], ["alt", "No seleccion\u00F3 ninguna imagen", 1, "img-thumbnail", "bg-light", 2, "width", "500px", 3, "src"], ["type", "submit", 1, "btn", "btn-success", "my-3"]], template: function AddupdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "Agregar/Editar Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("submit", function AddupdateComponent_Template_form_submit_3_listener() { return ctx.createProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13, "Descripcion");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](18, "Precio");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](22, "Categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](26, " Destacar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](31, "Insertar Imagen");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function AddupdateComponent_Template_input_change_32_listener($event) { return ctx.handleFileInput($event, 2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](33, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](35, "Cargar Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("src", ctx.urlMain, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????sanitizeUrl"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGR1cGRhdGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2727:
/*!*************************************************************!*\
  !*** ./src/app/modules/products/products-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsRoutingModule": () => (/* binding */ ProductsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.component */ 1089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    { path: '', component: _products_component__WEBPACK_IMPORTED_MODULE_0__.ProductsComponent }
];
class ProductsRoutingModule {
}
ProductsRoutingModule.??fac = function ProductsRoutingModule_Factory(t) { return new (t || ProductsRoutingModule)(); };
ProductsRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: ProductsRoutingModule });
ProductsRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](ProductsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 1089:
/*!********************************************************!*\
  !*** ./src/app/modules/products/products.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/products.service */ 9531);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 2091);
/* harmony import */ var _components_addupdate_addupdate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/addupdate/addupdate.component */ 3998);




function ProductsComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ProductsComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](element_r10.name);
} }
function ProductsComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Descripcion");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ProductsComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](element_r11.description);
} }
function ProductsComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ProductsComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](element_r12.price);
} }
function ProductsComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Detalles");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ProductsComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ProductsComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "tr", 17);
} }
function ProductsComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "tr", 18);
} }
class ProductsComponent {
    constructor(productsService) {
        this.productsService = productsService;
        this.displayedColumns = ['name', 'description', 'price', 'more'];
        this.dataSource = [];
    }
    ngOnInit() {
        // this.productsService.getAllProductBySiteId('divergentesbatik').then(i=>{
        //   i.subscribe(e=>{
        //     e.docs.forEach(o=>{
        //       this.dataSource.push(o.data())
        //     })
        //     this.dataSource = [...this.dataSource];
        //   })
        // })
    }
}
ProductsComponent.??fac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService)); };
ProductsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 24, vars: 3, consts: [[1, "row"], [1, "col", "text-center"], [1, "btn", "btn-success"], [1, "row", "mt-3"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "price"], ["matColumnDef", "more"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "btn", "btn-danger"], [1, "btn", "btn-primary", "m-3"], ["mat-header-row", ""], ["mat-row", ""]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Agregar Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](9, ProductsComponent_th_9_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](10, ProductsComponent_td_10_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](11, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](12, ProductsComponent_th_12_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](13, ProductsComponent_td_13_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](14, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](15, ProductsComponent_th_15_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](16, ProductsComponent_td_16_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](17, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](18, ProductsComponent_th_18_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](19, ProductsComponent_td_19_Template, 5, 0, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](20, ProductsComponent_tr_20_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](21, ProductsComponent_tr_21_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](23, "app-addupdate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _components_addupdate_addupdate_component__WEBPACK_IMPORTED_MODULE_1__.AddupdateComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 2252:
/*!*****************************************************!*\
  !*** ./src/app/modules/products/products.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* binding */ ProductsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-routing.module */ 2727);
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.component */ 1089);
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ 2271);
/* harmony import */ var _components_addupdate_addupdate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/addupdate/addupdate.component */ 3998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);






class ProductsModule {
}
ProductsModule.??fac = function ProductsModule_Factory(t) { return new (t || ProductsModule)(); };
ProductsModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: ProductsModule });
ProductsModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _products_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductsRoutingModule,
            src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](ProductsModule, { declarations: [_products_component__WEBPACK_IMPORTED_MODULE_1__.ProductsComponent, _components_addupdate_addupdate_component__WEBPACK_IMPORTED_MODULE_3__.AddupdateComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _products_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductsRoutingModule,
        src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 9531:
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsService": () => (/* binding */ ProductsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ProductsService {
    constructor() { }
}
ProductsService.??fac = function ProductsService_Factory(t) { return new (t || ProductsService)(); };
ProductsService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ProductsService, factory: ProductsService.??fac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_products_products_module_ts.js.map