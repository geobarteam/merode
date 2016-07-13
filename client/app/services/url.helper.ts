import { Injectable }    from '@angular/core';

@Injectable()
export class UrlHelper {
  
  static LITEURL =  "http://localhost:8000"; 

  public  GetUrl(suffix:string){
    if (window.location.href.startsWith(UrlHelper.LITEURL)){
      return "http://localhost:3000" + suffix;
    }
    
    return suffix;
  }
}