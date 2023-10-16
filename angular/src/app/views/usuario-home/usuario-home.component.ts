import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/login/auth-service.service';

@Component({
  selector: 'app-usuario-home',
  templateUrl: './usuario-home.component.html',
  styleUrls: ['./usuario-home.component.css']
})
export class UsuarioHomeComponent implements OnInit{
  constructor(private router : Router, private authService:AuthServiceService){}

  ngOnInit(): void {
      if(!this.authService.logado){
          this.router.navigate(['/'])
      }
  }

  singout(){
    this.authService.logado = false
    this.router.navigate(['/'])
  }
}