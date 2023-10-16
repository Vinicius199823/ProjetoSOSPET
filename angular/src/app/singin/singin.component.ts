import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  usuario: any = {
    Nome: '',
    Email: '',
    Senha: '',
    ConfirmaSenha: '',
    Ciencia: false
  };

  constructor(private Http: HttpClient, private router: Router){}

  ngOnInit(): void {
      
  }

  

  cadastrar(){
    
    console.log(this.usuario)
    if(this.usuario.Ciencia){
      if(this.usuario.Senha == this.usuario.ConfirmaSenha){
        const productData = new FormData()
        productData.append('NomeCompleto', this.usuario.Nome);
        productData.append('Email', this.usuario.Email);
        productData.append('Senha', this.usuario.Senha);
        productData.append('ConfirmaSenha', this.usuario.ConfirmaSenha);
        productData.append('Ciencia', this.usuario.Ciencia)
        this.Http.post('http://localhost:80/projeto_integrador2/PHP/scripts/CadastraUsuario.php', productData).subscribe((res: any) => {   
          try{
              console.log(res)
              this.router.navigate(['/usuario'])
          }catch(e){}
    
        });
      } else {
        alert("As senhas não conferem")
      }
    } else {
      alert("Confirme ciencia!")
    }
  }
}
