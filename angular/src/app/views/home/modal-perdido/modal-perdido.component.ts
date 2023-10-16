import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/login/auth-service.service';

@Component({
  selector: 'app-modal-perdido',
  templateUrl: './modal-perdido.component.html',
  styleUrls: ['./modal-perdido.component.css']
})
export class ModalPerdidoComponent implements OnInit {

  vistoporultimo: any
  constructor(private http: HttpClient,
    private authService: AuthServiceService,
    public dialogRef: MatDialogRef<ModalPerdidoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router) { }

  ngOnInit(): void {
    this.mostrar()
  }

  mostrar() {
    console.log(this.authService.pet)
    console.log(this.authService.usuario)
  }
  cadastrar() {


    if (this.vistoporultimo == '') {
      alert("Campos vazios")


    } else {


      const productData = new FormData()
      productData.append('idPet', this.authService.pet);
      productData.append('usuario', this.authService.usuario);
      productData.append('endereco', this.vistoporultimo);
      this.http.post('http://localhost:80/projeto_integrador2/PHP/scripts/CadastrarPerdido.php', productData).subscribe((res: any) => {
        try {
          console.log(res)
          this.navegarHome()
          this.onNoClick()

        } catch (e) { }

      });
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  navegarHome() {
    this.router.navigate(['/home'])
  }
}
