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

    createFavoritesTable(){
        let sql = 'CREATE TABLE IF NOT EXISTS Favorites(dbId INTEGER PRIMARY KEY AUTOINCREMENT, id INTEGER, title TEXT, image BLOB, date BLOB, description TEXT, characters BLOB)';
        return this.db.executeSql(sql, []);
    }

    createFavorite(){
        let sql = 'INSERT INTO Favoritess(id, title, image, date, description, characters) VALUES(?,?,?,?,?,?)';
        return this.db.executeSql(sql, []);
    }

    getAllFavorites(){
        let sql = 'SELECT * FROM Favorites';
        return this.db.executeSql(sql, [])
            .then(response => {
                let favorites = [];
                for (let index = 0; index < response.rows.length; index++) {
                    favorites.push( response.rows.item(index) );
                }
                return Promise.resolve(favorites);
            })
    }

    deleteFavorite(){
        let sql = 'DELETE FROM Favorites WHERE id=?';
        return this.db.executeSql(sql, []);
    }
}