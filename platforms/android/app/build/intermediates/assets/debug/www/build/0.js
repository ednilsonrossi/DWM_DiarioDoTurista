webpackJsonp([0],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoPontoPageModule", function() { return NovoPontoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__novo_ponto__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NovoPontoPageModule = /** @class */ (function () {
    function NovoPontoPageModule() {
    }
    NovoPontoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__novo_ponto__["a" /* NovoPontoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__novo_ponto__["a" /* NovoPontoPage */]),
            ],
        })
    ], NovoPontoPageModule);
    return NovoPontoPageModule;
}());

//# sourceMappingURL=novo-ponto.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovoPontoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_ponto_turistico_ponto_turistico__ = __webpack_require__(101);
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
 * Generated class for the NovoPontoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NovoPontoPage = /** @class */ (function () {
    function NovoPontoPage(navCtrl, navParams, formBuilder, geolocation, pontoTuristicoProvider, toast, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.geolocation = geolocation;
        this.pontoTuristicoProvider = pontoTuristicoProvider;
        this.toast = toast;
        this.camera = camera;
        this.temFoto = false;
        this.hoje = this.dataHoje();
        this.ponto = new __WEBPACK_IMPORTED_MODULE_5__providers_ponto_turistico_ponto_turistico__["a" /* PontoTuristico */]();
        this.ponto.data_visita = this.hoje;
        this.formulario = this.formBuilder.group({
            titulo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            descricao: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.getLocation();
    }
    NovoPontoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NovoPontoPage');
    };
    NovoPontoPage.prototype.dataHoje = function () {
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        return [dia, mes, ano].join('/');
    };
    NovoPontoPage.prototype.salvar = function () {
        var _this = this;
        //this.toast.create({ message: 'Ponto turístico salvo.', duration: 3000, position: 'botton' }).present();
        var _a = this.formulario.controls, titulo = _a.titulo, descricao = _a.descricao;
        var str1 = descricao.value.toString();
        var str2 = titulo.value.toString();
        this.ponto.descricao = str1;
        this.ponto.ponto_turistico = str2;
        this.pontoTuristicoProvider.insert(this.ponto)
            .then(function () {
            _this.toast.create({ message: 'Ponto turístico salvo.', duration: 3000, position: 'botton' }).present();
            _this.navCtrl.pop();
        })
            .catch(function () {
            _this.toast.create({ message: 'Erro ao salvar o ponto turístico.', duration: 3000, position: 'botton' }).present();
        });
    };
    NovoPontoPage.prototype.getLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.ponto.latitude = resp.coords.latitude.toString();
            _this.ponto.longitude = resp.coords.longitude.toString();
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    NovoPontoPage.prototype.tiraFoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.imagem = base64Image;
            _this.ponto.foto = _this.imagem;
            _this.temFoto = true;
        }, function (err) {
            // Handle error
            console.log("Erro ao tirar foto!");
        });
    };
    NovoPontoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-novo-ponto',template:/*ion-inline-start:"/home/ednilsonrossi/Documentos/DOCS_Ednilson/Especializacao/DWM_2018s1/projetos/DiarioTurista/src/pages/novo-ponto/novo-ponto.html"*/'<!--\n  Generated template for the NovoPontoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Novo Ponto Turístico</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="formulario" (submit)="salvar()">\n    <p>Hoje: {{hoje}}</p>\n    <ion-item>\n      <ion-input type="text" formControlName="titulo" placeholder="Nome do ponto turistico"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-textarea formControlName="descricao" placeholder="Breve descrição sobre o local."></ion-textarea>\n    </ion-item>\n    <p>Localização</p>\n    <p>Latitude: {{ponto.latitude}}</p>\n    <p>Longitude: {{ponto.longitude}}</p>\n    <button ion-button *ngIf="temFoto">Enviar</button>\n  </form>\n  <button ion-button (click)="tiraFoto()">Adicionar Foto</button>\n  <h2>A foto: </h2>\n  <img [src]="imagem" *ngIf="imagem" />\n</ion-content>\n'/*ion-inline-end:"/home/ednilsonrossi/Documentos/DOCS_Ednilson/Especializacao/DWM_2018s1/projetos/DiarioTurista/src/pages/novo-ponto/novo-ponto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_5__providers_ponto_turistico_ponto_turistico__["b" /* PontoTuristicoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], NovoPontoPage);
    return NovoPontoPage;
}());

//# sourceMappingURL=novo-ponto.js.map

/***/ })

});
//# sourceMappingURL=0.js.map