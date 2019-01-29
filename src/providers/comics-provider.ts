import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class ComicsProvider {

    constructor(public http: HttpClient){

    }

    getListOfComics(){
        let url = 'https://gateway.marvel.com:443/v1/public/comics?ts=1000&apikey=200bf1531c6fceffa554b6ecf3402467&hash=4e2e6ef92d0c352f669069d2ae80adc9';

        const httpHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.get(url,{headers: httpHeaders});
    }

    getComicbyId(id: any){
        let url = 'https://gateway.marvel.com:443/v1/public/comics/' + id + '?ts=1000&apikey=200bf1531c6fceffa554b6ecf3402467&hash=4e2e6ef92d0c352f669069d2ae80adc9';

        return this.http.get(url);
    }

    /* getComicCharactersbyId(id: any){
        let url ='https://gateway.marvel.com:443/v1/public/comics/' + id + '/characters?ts=1000&apikey=200bf1531c6fceffa554b6ecf3402467&hash=4e2e6ef92d0c352f669069d2ae80adc9';

        return this.http.get(url);
    } */

    getListofComicsbyTitle(title: any){
        let url = 'https://gateway.marvel.com:443/v1/public/comics?title=' + title + '&ts=1000&apikey=200bf1531c6fceffa554b6ecf3402467&hash=4e2e6ef92d0c352f669069d2ae80adc9';

        return this.http.get(url);
    }
}