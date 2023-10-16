import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/login/auth-service.service';

@Component({
  selector: 'app-sobrenos',
  templateUrl: './sobrenos.component.html',
  styleUrls: ['./sobrenos.component.css']
})
export class SobrenosComponent implements OnInit {


  constructor(private router: Router, private authService: AuthServiceService){

  }

  ngOnInit(): void {
    if(!this.authService.logado || this.authService.usuario == '')
    this.router.navigate(['/'])
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
