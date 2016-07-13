import { User } from '../model/user/user';
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UrlHelper } from './url.helper';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    private suffix = '/api/user';  // URL to web api
    private url:string;
    constructor(private http: Http, private urlHelper:UrlHelper) { 
       this.url = this.urlHelper.GetUrl(this.suffix);
  }

}