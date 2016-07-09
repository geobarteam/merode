import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable }    from '@angular/core';

export interface IConfig{
    apiBaseUrl:string;
}

@Injectable()
export class AppConfig{
    
    constructor(private http: Http) { }
    
    public Configuration:IConfig;
      
    Load():Promise<IConfig>{
        return new Promise((resolve, reject)=>{
            this.http.get('/app/config.json')
            .toPromise()            
            .then(response => {
                    this.Configuration = response.json();
                    resolve(true);
            })
            .catch(this.handleError);
            });
        };
    
    
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }   
}