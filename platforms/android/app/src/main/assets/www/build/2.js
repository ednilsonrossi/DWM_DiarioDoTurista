webpackJsonp([2],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExibeLocalPageModule", function() { return ExibeLocalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exibe_local__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExibeLocalPageModule = /** @class */ (function () {
    function ExibeLocalPageModule() {
    }
    ExibeLocalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exibe_local__["a" /* ExibeLocalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exibe_local__["a" /* ExibeLocalPage */]),
            ],
        })
    ], ExibeLocalPageModule);
    return ExibeLocalPageModule;
}());

//# sourceMappingURL=exibe-local.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExibeLocalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ponto_turistico_ponto_turistico__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ExibeLocalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExibeLocalPage = /** @class */ (function () {
    function ExibeLocalPage(navCtrl, navParams, pontoTuristicoProvider, toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pontoTuristicoProvider = pontoTuristicoProvider;
        this.toast = toast;
        this.ponto = new __WEBPACK_IMPORTED_MODULE_2__providers_ponto_turistico_ponto_turistico__["a" /* PontoTuristico */]();
        this.pontoTuristicoProvider.get(this.navParams.data.id)
            .then(function (result) {
            _this.ponto = result;
        });
    }
    ExibeLocalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExibeLocalPage');
    };
    ExibeLocalPage.prototype.delete = function () {
        var _this = this;
        this.pontoTuristicoProvider.delete(this.ponto.id)
            .then(function () {
            _this.navCtrl.pop();
        });
    };
    ExibeLocalPage.prototype.abrirMapa = function () {
        //this.navCtrl.pop();
        this.navCtrl.push('MapaPage', { lat: this.ponto.latitude, lon: this.ponto.longitude });
        //this.navCtrl.push('HomePage');
        //this.toast.create({ message: 'Vou abrir o mapa: ' + this.ponto.latitude +'x'+ this.ponto.longitude, duration: 3000, position: 'botton' }).present();
    };
    ExibeLocalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exibe-local',template:/*ion-inline-start:"/home/ednilsonrossi/Documentos/DOCS_Ednilson/Especializacao/DWM_2018s1/projetos/DiarioTurista/src/pages/exibe-local/exibe-local.html"*/'<!--\n  Generated template for the ExibeLocalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Eu visitei!</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>Local: {{ponto.ponto_turistico}}</h1>\n  <h3>Descrição:</h3>\n  <p>{{ponto.descricao}}</p>\n  <p><b>Visitado em:</b> {{ponto.data_visita}}</p>\n  <img [src]="ponto.foto" *ngIf="ponto.foto" />\n  <button ion-button (click)="abrirMapa()">Ver Local</button>\n  <button ion-button (click)="delete()">Apagar</button>\n</ion-content>\n'/*ion-inline-end:"/home/ednilsonrossi/Documentos/DOCS_Ednilson/Especializacao/DWM_2018s1/projetos/DiarioTurista/src/pages/exibe-local/exibe-local.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_ponto_turistico_ponto_turistico__["b" /* PontoTuristicoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], ExibeLocalPage);
    return ExibeLocalPage;
}());

//# sourceMappingURL=exibe-local.js.map

/***/ })

});
//# sourceMappingURL=2.js.map