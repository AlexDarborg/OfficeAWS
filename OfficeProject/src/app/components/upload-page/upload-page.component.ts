import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../API/rest-api.service';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {
  url = 'https://0elkcqg9b5.execute-api.us-east-1.amazonaws.com/dev/uploadFile'
  constructor(public restApiService:RestApiService,private http: HttpClient) { }
  ngOnInit(): void {
  }

  accessUrl:any;
  onChange(event:any){
    let file = event.target.files
    let content = file[0]
    let fileOrigin = content.name
    console.log("FIIIIIILEEE",content)
     this.restApiService.getUrl().subscribe((data) =>{
      console.log("Success 200 get", JSON.stringify(data))
      this.accessUrl = data
      console.log("heeeeej URL", this.accessUrl)
      this.restApiService.postFile(file).subscribe((data)=>{
        console.log("Success 200 post file to s3!!")
      }, (error)=>{
        console.log("Error post",error)
      })
    }, (error)=>{
      console.log("Error get", error)
    })
    

  }

}
