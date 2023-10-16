import { HttpClient } from '@angular/common/http';
import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/login/auth-service.service';

@Component({
  selector: 'app-modal-encontrei',
  templateUrl: './modal-encontrei.component.html',
  styleUrls: ['./modal-encontrei.component.css']
})
export class ModalEncontreiComponent implements OnInit {
  pet: any = {
    endereco: '',
    
    file: ''
  }; selectedFile: File | null = null;

  vistoporultimo: any
  constructor(private http: HttpClient,
    private authService: AuthServiceService,
    public dialogRef: MatDialogRef<ModalEncontreiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  cadastrar() {

    console.log(this.pet)
    if (this.pet.endereco == '' || this.pet.pelagem == '' || this.pet.Raca == '') {
      alert("Campos vazios")


    } else {

      const productData = new FormData()
      productData.append('endereco', this.pet.endereco);
      productData.append('idPet', this.authService.pet);
      productData.append('usuario', this.authService.usuario);
      this.http.post('http://localhost:80/projeto_integrador2/PHP/scripts/CadastraPetEncontrado.php', productData).subscribe((res: any) => {
        try {
          console.log(res)
          this.navegarHome()
          this.onNoClick()

        } catch (e) { }

      });
    }
  }
  handleFileInput(event: any): void {
    const files: FileList = event.target.files;

    if (files && files.length > 0) {
      this.selectedFile = files[0];
    }
  }
  /* uploadImage(): void {
    if (this.selectedFile) {
      const formData: FormData = new FormData();
      formData.append('image', this.selectedFile);

      this.http.post('http://localhost:80/projeto_integrador2/PHP/scripts/upload.php', formData)
        .subscribe(response => {
          console.log('Imagem enviada com sucesso!', response);
          // Realize ações adicionais após o upload
        }, error => {
          console.error('Erro ao enviar imagem', error);
        });
    }
  } */
  uploadImage(): void {
    if (this.selectedFile) {
      const formData: FormData = new FormData();
      formData.append('image', this.selectedFile);
      formData.append('email', this.authService.usuario);

      this.http.post('http://localhost:80/projeto_integrador2/PHP/scripts/upload.php', formData)
        .subscribe((response: any) => {
          try {
            console.log('Imagem enviada com sucesso!', response);
            const imagePath: string = response.path; // Obter o caminho completo do arquivo
            if (imagePath) {
              const fileName: string = imagePath.split('/').pop() || ""; // Extrair o nome do arquivo
    
              // Passar o fileName para a próxima função de cadastro
              this.cadastrar();
            } else {
              // Tratar o caso em que a propriedade 'path' está ausente na resposta
            }
            
          } catch (e) { }
          // Realizee ações adicionais após o upload
        } /* error => {
          console.error('Erro ao enviar imagem', error);*/
        );
    } else {
      console.warn('Nenhuma imagem selecionada.');
    }
  }
  onNoClick(): void {
    this.navegarHome()
    this.dialogRef.close();
  }

  navegarHome(){
    this.router.navigate(['/home'])
  }
}