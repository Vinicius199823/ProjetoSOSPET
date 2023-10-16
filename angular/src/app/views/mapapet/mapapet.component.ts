import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/login/auth-service.service';

@Component({
  selector: 'app-mapapet',
  templateUrl: './mapapet.component.html',
  styleUrls: ['./mapapet.component.css']
})
export class MapapetComponent implements OnInit{

  constructor(private router: Router, private authService: AuthServiceService){

  }

  ngOnInit(): void {
    if(!this.authService.logado || this.authService.usuario == '')
    this.router.navigate(['/'])
  }
  

  navegarLogin(){
    this.router.navigate(['/login'])
  }
  navegarHome(){
    this.router.navigate(['/home'])
  }
  navegarParaProcura(){
    this.router.navigate(['/procura'])
  }
  navegarParaMapa(){
    this.router.navigate(['/mapa'])
  }
  navegarParaHistorias(){
    this.router.navigate(['/historias'])
  }
  navegarParaSobre(){
    this.router.navigate(['/sobre'])
  }
}
