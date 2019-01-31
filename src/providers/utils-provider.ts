import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { ComicsProvider } from './comics-provider';

@Injectable()
export class UtilsProvider {

    db: SQLiteObject = null;

    constructor(){}

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
        let sql = 'CREATE TABLE IF NOT EXISTS Favorites(dbId INTEGER PRIMARY KEY AUTOINCREMENT, id INTEGER, title TEXT, image BLOB, date BLOB, description TEXT, characters BLOB, email BLOB)';
        return this.db.executeSql(sql, []);
    }

    createFavorite(comic: any, email: any){
        let charactersList =[];
        for(let i = 0; i < comic.characters.items.length; i++){
            charactersList.push(comic.characters.items[i].name);
        }
        let sql = 'INSERT INTO Favorites(id, title, image, date, description, characters, email) VALUES(?,?,?,?,?,?,?)';
        return this.db.executeSql(sql, [comic.id, comic.title,comic.thumbnail.path + "." + comic.thumbnail.extension, comic.dates[0].date, comic.description, charactersList, email]);
    }

    getAllFavoritesbyLogin(email: any){
        let sql = 'SELECT * FROM Favorites WHERE email =?';
        return this.db.executeSql(sql, [email])
            .then(response => {
                let favorites = [];
                for (let index = 0; index < response.rows.length; index++) {
                    favorites.push( response.rows.item(index));
                }
                return Promise.resolve(favorites);
            })
    }

    deleteFavorite(comic: any){
        let sql = 'DELETE FROM Favorites WHERE id=?';
        return this.db.executeSql(sql, [comic.id]);
    }

    /* createIsFavoriteTable(){
        let sql = 'CREATE TABLE IF NOT EXISTS IsFavorites(dbId INTEGER PRIMARY KEY AUTOINCREMENT, id INTEGER, isFavorite BOOLEAN)';
        return this.db.executeSql(sql, []);
    }

    createisFavorite(){
        let sql = 'INSERT INTO IsFavorites(id, isFavorite) VALUES(?,?)';
        return this.db.executeSql(sql, []);
    }

    getAllIsFavorites(){
        let sql = 'SELECT * FROM IsFavorites';
        return this.db.executeSql(sql, [])
            .then(response => {
                let favorites = [];
                for (let index = 0; index < response.rows.length; index++) {
                    favorites.push( response.rows.item(index) );
                }
                return Promise.resolve(favorites);
            })
    }

    deleteIsFavorite(){
        let sql = 'DELETE FROM IsFavorites WHERE id=?';
        return this.db.executeSql(sql, []);
    } */
}