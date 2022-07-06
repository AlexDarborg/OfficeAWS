import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class RestApiService {
    // url taken from Api gateway in AWS
    url = 'https://0elkcqg9b5.execute-api.us-east-1.amazonaws.com/dev/postFileLambda'
    constructor(private http: HttpClient){

    }
    getUrl(){
        return this.http.get(this.url).pipe(retry(1));
    }

    postFile(file:any){
      return this.http.post(this.url,file).pipe(retry(1));
  }
}