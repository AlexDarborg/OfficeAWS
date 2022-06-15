import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event:any){
    let file = event.target.files
    let content = file[0]
    console.log("FILEEE",content)
  }
}
