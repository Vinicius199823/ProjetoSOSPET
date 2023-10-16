import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/login/auth-service.service';
import { ModalEncontreiComponent } from './modal-encontrei/modal-encontrei.component';

@Component({
  selector: 'app-procura',
  templateUrl: './procura.component.html',
  styleUrls: ['./procura.component.css']
})
export class ProcuraComponent implements OnInit {
  cor = 'red'

  cont: any
  statusPet1 = 'Encontrado'
  statusPet2 = 'Encontrado'
  statusPet3 = 'Perdido'
  statusPet: any
  pets: any = [];

  constructor(private http: HttpClient,
    private router: Router,public dialog: MatDialog,
    private authService: AuthServiceService) { }

  ngOnInit(): void {
    if (!this.authService.logado || this.authService.usuario == '')
      this.router.navigate(['/'])
    console.log(this.cont)
    this.getPetsFromDatabase();
    this.cont = 1;
    this.incrementNumber()
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalEncontreiComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  getPetsFromDatabase() {
    this.http.get<any[]>('http://localhost:80/projeto_integrador2/PHP/scripts/BuscaPetPerdido.php').subscribe(data => {
        
        try{
          this.pets = data;
          console.log(this.pets)
        }catch (e){}
    });
  }
  incrementNumber() {

    const intervalId = setInterval(() => {
      this.cont++;
      if (this.cont > 8) {
        this.cont = 1;
        this.incrementNumber()
      }
      console.log(this.cont); // ou faça o que desejar com o número incrementado
    }, 5000); // incrementa o número a cada 1000 milissegundos (1 segundo)

    // Exemplo de como parar o setInterval após um determinado número de incrementos
    setTimeout(() => {
      clearInterval(intervalId);
    }, 5000); // para o setInterval após 5 segundos (ou seja, 5 incrementos)
  }

  navegarHome() {
    this.router.navigate(['/home'])
  }
  navegarParaProcura() {
    this.router.navigate(['/procura'])
  }
  navegarParaMapa() {
    this.router.navigate(['/mapa'])
  }
  navegarParaHistorias() {
    this.router.navigate(['/historias'])
  }
  navegarParaSobre() {
    this.router.navigate(['/sobre'])
  }
}
