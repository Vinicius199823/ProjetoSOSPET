import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/login/auth-service.service';
import { CadastraPetComponent } from '../cadastra-pet/cadastra-pet.component';
import { ModalPerdidoComponent } from './modal-perdido/modal-perdido.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  num = 1;
  listaPet: any = []
  cadastrarPet = true;
  imgPet: any = []
  petperdido: any =[]
  constructor(private router: Router, public dialog: MatDialog, private authService: AuthServiceService, private http: HttpClient) {

  }

  ngOnInit(): void {
    if (!this.authService.logado || this.authService.usuario == '')
      this.router.navigate(['/'])
    if (this.authService.logado) {
      this.verificapet()
    }
    this.verificapetpublicado()
    this.getImagesFromDirectory()
    console.log(this.imgPet)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CadastraPetComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  openDialog2(idPet: number): void {
    this.authService.pet = idPet
    const dialogRef = this.dialog.open(ModalPerdidoComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  verificapet() {
    const productData: FormData = new FormData();
    productData.append('usuario', this.authService.usuario);
    this.http.post('http://localhost:80/projeto_integrador2/PHP/scripts/BuscarPet.php', productData).subscribe((res: any) => {
      try {
        console.log(res)
        this.listaPet = res
        this.authService.pet = res
        if (res.length!==0)
          this.cadastrarPet = false
        else
          this.cadastrarPet = true
        console.log(this.cadastrarPet)
      } catch (e) { }

    });
  }

  verificapetpublicado(){
    const productData: FormData = new FormData();
    productData.append('usuario', this.authService.usuario);
    this.http.post('http://localhost:80/projeto_integrador2/PHP/scripts/BuscaPetPerdidoPorUsuario.php', productData).subscribe((res: any) => {
      try {
        
        console.log(res)
        

      } catch (e) { }

    });
  }

  getImagesFromDirectory(): void {
    const url = 'http://localhost:80/projeto_integrador2/PHP/scripts/PegaNomeImagens.php';
    const formData = new FormData();
    formData.append('email', this.authService.usuario);

    this.http.post(url, formData).subscribe(
      (response: any) => {
        if (response.error) {
          console.error('Erro ao obter as imagens:', response.error);
        } else {
          const imagesObj = response.images;
          const images = Object.values(imagesObj); // Converter o objeto em um array
          this.imgPet = images;
          console.log('Dentro da Função ' + this.imgPet);
          console.log('Imagens encontradas:', images);
          // Realize ações com as imagens encontradas
        }
      }/* ,
      (error: any) => {
        console.error('Erro na requisição:', error);
      } */
    );
  }

  navegarLogin() {
    this.router.navigate(['/login'])
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
