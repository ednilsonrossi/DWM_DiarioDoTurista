
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) {
    console.log('Hello DatabaseProvider Provider');
  }


   /**
   * Cria um banco caso não exista ou abre um banco existente com o nome no parametro
   */
  public getDB() {
    return this.sqlite.create({
      name: 'diario_turista.db',
      location: 'default'
    });
  }

   /**
   * Cria a estrutura inicial do banco de dados
   */
  public createDatabase() {
    return this.getDB()
      .then((db: SQLiteObject) => {

        // Criando as tabelas
        this.createTables(db);

        /*
        db.executeSql('INSERT INTO PontoTuristico (ponto_turistico, descricao, data_visita, latitude, longitude) VALUES ("IFSP", "Escola", "hoje", "0", "0")', {})
          .then( () => console.log('Inserido'))
          .catch(e => console.error('Erro ao inserir', e));
        */
      })
      .catch(e => console.log(e));

      
      
  }

  /**
   * Criando as tabelas no banco de dados
   * @param db
   */
  private createTables(db: SQLiteObject) {
    // Criando as tabelas
    db.executeSql('CREATE TABLE IF NOT EXISTS PontoTuristico (id integer primary key AUTOINCREMENT NOT NULL, ponto_turistico TEXT, descricao TEXT, data_visita TEXT, latitude TEXT, longitude TEXT, foto TEXT)', {})
      .then(() => console.log('Tabelas criadas'))
      .catch(e => console.error('Erro ao criar as tabelas', e));
  }

}
