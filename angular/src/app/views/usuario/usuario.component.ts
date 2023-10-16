import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/login/auth-service.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{
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
  navega(){
    this.router.navigate(['/login'])
  }
}
