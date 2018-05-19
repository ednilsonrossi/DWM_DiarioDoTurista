
import { Injectable } from '@angular/core';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';

/*
  Generated class for the PontoTuristicoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PontoTuristicoProvider {

  constructor(private dbProvider: DatabaseProvider) {
    console.log('Hello PontoTuristicoProvider Provider');
  }

  public insert(ponto : PontoTuristico) {
    
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'INSERT INTO PontoTuristico (ponto_turistico, descricao, data_visita, latitude, longitude, foto) values (?, ?, ?, ?, ?, ?)';
        let data = [ponto.ponto_turistico, ponto.descricao, ponto.data_visita, ponto.latitude, ponto.longitude, ponto.foto];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public getAll() {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'SELECT * FROM PontoTuristico';
        var data: any[];
  
        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let pontos: any[] = [];
              for (var i = 0; i < data.rows.length; i++) {
                var ponto = data.rows.item(i);
                pontos.push(ponto);
              }
              return pontos;
            } else {
              return [];
            }
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

}

export class PontoTuristico{
  id : number;
  ponto_turistico : String;
  descricao : String;
  data_visita : String;
  latitude : String;
  longitude : String;
  foto : String;
}
