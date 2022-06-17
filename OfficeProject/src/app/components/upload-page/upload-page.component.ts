import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../API/rest-api.service';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {
  url = 'https://0elkcqg9b5.execute-api.us-east-1.amazonaws.com/dev/postFileLambda'
  constructor(public restApiService:RestApiService,private http: HttpClient) { }

  ngOnInit(): void {
  }

  onChange(event:any){
    let file = event.target.files
    let content = file[0]
    console.log("FILEEE",content)
     this.restApiService.postFile().subscribe((data) =>{
      console.log("Success 200", data)
    }, (error)=>{
      console.log("Error", error)
    }) 

  }

}
