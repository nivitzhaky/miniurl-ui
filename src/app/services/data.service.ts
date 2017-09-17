import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

var host = "http://localhost:9000"; //ec2-13-59-172-49.us-east-2.compute.amazonaws.com:9000

@Injectable()
export class DataService {


  constructor(public http:Http) { 
    console.log('Data service connected...');
  }

  getMiniUrls(user : String){
    if (user != "") {
      return this.http.get(host + '/api/miniurls?user=' + user)
      .map(res => res.json());
    }else {
      return this.http.get(host + '/api/miniurls')
      .map(res => res.json());

    }
  }
  addMiniUrl(b: bookmark){
    if (b.user != "") {
      return this.http.post(host + '/api/miniurls',{url: b.url, alias : b.alias, user : b.user}) 
    }
    else {
      return this.http.post(host + '/api/miniurls',{url: b.url, alias : b.alias})      
    }
  }
  deleteMiniUrl(id: string){
      return this.http.delete(host + '/api/miniurls/'+ id)      
  }
  private extractData(res: Response) {
    console.log("body" + res.json)
    return  {};
  }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
      }
}

export interface miniurl {
  id : string, 
  url : string,
  alias : string,
  clicks : number,
  link : string,
  user: string
}

export interface bookmark {
  url : string,
  alias : string,
  user?: string
}
export interface MiniUrlResponse{
  postfix : string,
  link : string 
}