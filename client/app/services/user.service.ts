import { User } from '../model/user/user';
import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { UrlHelper } from './url.helper';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    private suffix = '/api/user';  // URL to web api
    private url:string;
    constructor(private http: Http, private urlHelper:UrlHelper) { 
       this.url = this.urlHelper.GetUrl(this.suffix);
  }

  registerUser(user:User) {
    let body = JSON.stringify(user);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.url, body, options)
               .toPromise()
               .catch(this.handleError);
  }

   private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}