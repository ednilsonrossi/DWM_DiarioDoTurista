
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

        this.insertDefaultItems(db);
      })
      .catch(e => console.log(e));

      
      
  }

  /**
   * Criando as tabelas no banco de dados
   * @param db
   */
  private createTables(db: SQLiteObject) {
    // Criando as tabelas
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS ponto (id integer primary key AUTOINCREMENT NOT NULL, ponto_turistico TEXT, descricao TEXT, data_visita TEXT, latitude TEXT, longitude TEXT, foto TEXT)']
    ])
      .then(() => console.log('Tabelas criadas'))
      .catch(e => console.error('Erro ao criar as tabelas', e));
  }

  /**
   * Incluindo os dados padrões
   * @param db
   */
  private insertDefaultItems(db: SQLiteObject) {
    db.executeSql('select COUNT(id) as qtd from categories', {})
    .then((data: any) => {
      //Se não existe nenhum registro
      if (data.rows.item(0).qtd == 0) {

        // Criando as tabelas
        db.sqlBatch([
          ['insert into ponto (ponto_turistico, descricao, data_visita, latitude, longitude) values (?, ?, ?, ?, ?)', 
          ['Coxinhas Douradas', 'Bar do Freitas', 'hoje', '0', '0']]
        ])
          .then(() => console.log('Dados padrões incluídos'))
          .catch(e => console.error('Erro ao incluir dados padrões', e));

      }
    })
    .catch(e => console.error('Erro ao consultar a qtd de categorias', e));
  }
}
