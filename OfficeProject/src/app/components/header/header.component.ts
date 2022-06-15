import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToUploadComponent(tab:any){
  console.log(tab.index)
  if(tab.index === 1){
    this.router.navigateByUrl('/upload');
    
  }else{
    this.router.navigateByUrl('/');
  }
}
}
