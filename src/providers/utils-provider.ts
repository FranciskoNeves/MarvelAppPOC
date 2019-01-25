import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class UtilsProvider {

    db: SQLiteObject = null;

    constructor(){

    }

    setDatabase(db: SQLiteObject){
        if(this.db === null){
          this.db = db;
        }
      }

    createLoginTable(){
        let sql = 'CREATE TABLE IF NOT EXISTS Logins(dbId INTEGER PRIMARY KEY AUTOINCREMENT, email BLOB, password BLOB)';
        return this.db.executeSql(sql, []);
    }

    createLogin(form: any){
        let sql = 'INSERT INTO Logins(email, password) VALUES(?,?)';
        return this.db.executeSql(sql, [form.value.email, form.value.password]);
    }

    /* getAll(){
        let sql = 'SELECT * FROM Logins';
        return this.db.executeSql(sql, [])
            .then(response => {
                let all = [];
                for (let index = 0; index < response.rows.length; index++) {
                    all.push( response.rows.item(index) );
                  }
                console.log(all);
            })
            .catch(error => Promise.reject(error));
    }
 */
    findLogin(form: any){
        let sql = 'SELECT * FROM Logins WHERE email=? and password=?';
        return this.db.executeSql(sql, [form.value.email, form.value.password])
            .then(response => {
                let login = [];
                for (let index = 0; index < response.rows.length; index++) {
                    login.push( response.rows.item(index) );
                }
                return Promise.resolve(login);
            })
    }
}