webpackJsonp([1],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPageModule", function() { return MapaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapa__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MapaPageModule = /** @class */ (function () {
    function MapaPageModule() {
    }
    MapaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mapa__["a" /* MapaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mapa__["a" /* MapaPage */]),
            ],
        })
    ], MapaPageModule);
    return MapaPageModule;
}());

//# sourceMappingURL=mapa.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaPage; });
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



var MapaPage = /** @class */ (function () {
    function MapaPage(navCtrl, navParams, pontoTuristicoProvider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pontoTuristicoProvider = pontoTuristicoProvider;
        this.toast = toast;
        this.latitude = this.navParams.data.lat;
        this.longitude = this.navParams.data.lon;
        /*this.pontoTuristicoProvider.get(this.navParams.data.id)
          .then((result:any) => {
            this.ponto = result;
          });
        */
    }
    MapaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapaPage');
        //this.toast.create({ message: 'Vou abrir o mapa: ' + this.latitude +'x'+ this.longitude, duration: 3000, position: 'botton' }).present();
        var position = new google.maps.LatLng(this.latitude, this.longitude);
        var mapOptions = {
            zoom: 18,
            center: position
        };
        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var marker = new google.maps.Marker({
            position: position,
            map: this.map
        });
    };
    MapaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mapa',template:/*ion-inline-start:"/home/ednilsonrossi/Documentos/DOCS_Ednilson/Especializacao/DWM_2018s1/projetos/DiarioTurista/src/pages/mapa/mapa.html"*/'<!--\n  Generated template for the MapaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Onde estive</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n   \n    <div #map id="map"></div>\n    \n</ion-content>\n'/*ion-inline-end:"/home/ednilsonrossi/Documentos/DOCS_Ednilson/Especializacao/DWM_2018s1/projetos/DiarioTurista/src/pages/mapa/mapa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_ponto_turistico_ponto_turistico__["b" /* PontoTuristicoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], MapaPage);
    return MapaPage;
}());

//# sourceMappingURL=mapa.js.map

/***/ })

});
//# sourceMappingURL=1.js.map