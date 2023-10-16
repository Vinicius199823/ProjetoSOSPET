import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthServiceService } from 'src/app/login/auth-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastra-pet',
  templateUrl: './cadastra-pet.component.html',
  styleUrls: ['./cadastra-pet.component.css']
})
export class CadastraPetComponent implements OnInit {
  pet: any = {
    NomePet: '',
    Raca: '',
    pelagem: '',
    file: ''
  }; selectedFile: File | null = null;

  constructor(private http: HttpClient,
     private authService: AuthServiceService,
      public dialogRef: MatDialogRef<CadastraPetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router) { }

  ngOnInit(): void {

  }


  cadastrar(filename: any) {

    console.log(this.pet)
    if (this.pet.NomePet == '' || this.pet.pelagem == '' || this.pet.Raca == '') {
      alert("Campos vazios")


    } else {

      const productData = new FormData()
      productData.append('NomePet', this.pet.NomePet);
      productData.append('Raca', this.pet.Raca);
      productData.append('Pelagem', this.pet.pelagem);
      productData.append('Filename', filename);
      productData.append('usuario', this.authService.usuario);
      this.http.post('http://localhost:80/projeto_integrador2/PHP/scripts/CadastrarPet.php', productData).subscribe((res: any) => {
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
              this.cadastrar(fileName);
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

