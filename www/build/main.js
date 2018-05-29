webpackJsonp([3],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PontoTuristicoProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PontoTuristico; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the PontoTuristicoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PontoTuristicoProvider = /** @class */ (function () {
    function PontoTuristicoProvider(dbProvider) {
        this.dbProvider = dbProvider;
        console.log('Hello PontoTuristicoProvider Provider');
    }
    PontoTuristicoProvider.prototype.insert = function (ponto) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'INSERT INTO PontoTuristico (ponto_turistico, descricao, data_visita, latitude, longitude, foto) values (?, ?, ?, ?, ?, ?)';
            var data = [ponto.ponto_turistico, ponto.descricao, ponto.data_visita, ponto.latitude, ponto.longitude, ponto.foto];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    PontoTuristicoProvider.prototype.get = function (id) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'select * from PontoTuristico where id = ?';
            var data = [id];
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var item = data.rows.item(0);
                    var p = new PontoTuristico();
                    p.data_visita = item.data_visita;
                    p.descricao = item.descricao;
                    p.foto = item.foto;
                    p.id = item.id;
                    p.latitude = item.latitude;
                    p.longitude = item.longitude;
                    p.ponto_turistico = item.ponto_turistico;
                    return p;
                }
                return null;
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    PontoTuristicoProvider.prototype.getAll = function () {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'SELECT * FROM PontoTuristico order by id desc';
            var data;
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var pontos = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var ponto = data.rows.item(i);
                        pontos.push(ponto);
                    }
                    return pontos;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    PontoTuristicoProvider.prototype.delete = function (id) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'delete from PontoTuristico where id = ?';
            var data = [id];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    PontoTuristicoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */]])
    ], PontoTuristicoProvider);
    return PontoTuristicoProvider;
}());

var PontoTuristico = /** @class */ (function () {
    function PontoTuristico() {
    }
    return PontoTuristico;
}());

//# sourceMappingURL=ponto-turistico.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/exibe-local/exibe-local.module": [
		274,
		2
	],
	"../pages/mapa/mapa.module": [
		275,
		1
	],
	"../pages/novo-ponto/novo-ponto.module": [
		276,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toast, pontoProvider) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.pontoProvider = pontoProvider;
        this.pontos = [];
        //this.getAllPontos();
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.getAllPontos();
    };
    HomePage.prototype.getAllPontos = function () {
        var _this = this;
        this.pontoProvider.getAll()
            .then(function (result) {
            _this.pontos = result;
        });
    };
    HomePage.prototype.add = function () {
        this.navCtrl.push('NovoPontoPage');
    };
    HomePage.prototype.exibe = function (id) {
        this.navCtrl.push('ExibeLocalPage', { id: id });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/ednilsonrossi/Documentos/DOCS_Ednilson/Especializacao/DWM_2018s1/projetos/DiarioTurista/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Diário do Turista\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor="let ponto of pontos">\n      <button ion-item (click)="exibe(ponto.id)">\n        <h1>{{ponto.ponto_turistico}}</h1>\n        <h6 align="right">{{ponto.data_visita}}</h6>\n        <h3>{{ponto.descricao}}</h3>\n      </button>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab color="light" (click)="add()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/ednilsonrossi/Documentos/DOCS_Ednilson/Especializacao/DWM_2018s1/projetos/DiarioTurista/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_ponto_turistico_ponto_turistico__["b" /* PontoTuristicoProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_database_database__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_ponto_turistico_ponto_turistico__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/exibe-local/exibe-local.module#ExibeLocalPageModule', name: 'ExibeLocalPage', segment: 'exibe-local', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mapa/mapa.module#MapaPageModule', name: 'MapaPage', segment: 'mapa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/novo-ponto/novo-ponto.module#NovoPontoPageModule', name: 'NovoPontoPage', segment: 'novo-ponto', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* LOCALE_ID */], useValue: 'pt-BR' },
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_ponto_turistico_ponto_turistico__["b" /* PontoTuristicoProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, dbProvider) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            //Criando o banco de dados
            dbProvider.createDatabase()
                .then(function () {
                // fechando a SplashScreen somente quando o banco for criado
                _this.openHomePage(splashScreen);
            })
                .catch(function () {
                // ou se houver erro na criação do banco
                _this.openHomePage(splashScreen);
            });
        });
    }
    MyApp.prototype.openHomePage = function (splashScreen) {
        splashScreen.hide();
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ednilsonrossi/Documentos/DOCS_Ednilson/Especializacao/DWM_2018s1/projetos/DiarioTurista/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/ednilsonrossi/Documentos/DOCS_Ednilson/Especializacao/DWM_2018s1/projetos/DiarioTurista/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(sqlite) {
        this.sqlite = sqlite;
        console.log('Hello DatabaseProvider Provider');
    }
    /**
    * Cria um banco caso não exista ou abre um banco existente com o nome no parametro
    */
    DatabaseProvider.prototype.getDB = function () {
        return this.sqlite.create({
            name: 'diario_turista.db',
            location: 'default'
        });
    };
    /**
    * Cria a estrutura inicial do banco de dados
    */
    DatabaseProvider.prototype.createDatabase = function () {
        var _this = this;
        return this.getDB()
            .then(function (db) {
            // Criando as tabelas
            _this.createTables(db);
            /*
            db.executeSql('INSERT INTO PontoTuristico (ponto_turistico, descricao, data_visita, latitude, longitude) VALUES ("IFSP", "Escola", "hoje", "0", "0")', {})
              .then( () => console.log('Inserido'))
              .catch(e => console.error('Erro ao inserir', e));
            */
        })
            .catch(function (e) { return console.log(e); });
    };
    /**
     * Criando as tabelas no banco de dados
     * @param db
     */
    DatabaseProvider.prototype.createTables = function (db) {
        // Criando as tabelas
        db.executeSql('CREATE TABLE IF NOT EXISTS PontoTuristico (id integer primary key AUTOINCREMENT NOT NULL, ponto_turistico TEXT, descricao TEXT, data_visita TEXT, latitude TEXT, longitude TEXT, foto TEXT)', {})
            .then(function () { return console.log('Tabelas criadas'); })
            .catch(function (e) { return console.error('Erro ao criar as tabelas', e); });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map