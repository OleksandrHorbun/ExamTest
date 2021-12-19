import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  ifactive1: string = "";
  ifactive2: string = "";

  constructor(private router: Router, private service:MainServiceService) {
    if (this.router.url === '/'){
      //console.log("/");
      this.ifactive1 = "active";
      this.ifactive2 = "";
    } else{
      this.ifactive2 = "active";
      this.ifactive1 = "";
    }
    
    
  }

  
  ngOnInit(): void {
  }

}
