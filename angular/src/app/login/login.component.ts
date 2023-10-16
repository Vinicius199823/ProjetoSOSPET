import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: any = {
    Email: '',
    Senha: ''
  }
  constructor(private Http: HttpClient, private router: Router, private authService: AuthServiceService) {

  }

  ngOnInit(): void {

  }

  logar() {
    console.log(this.usuario)
    const productData = new FormData()
    productData.append('Email', this.usuario.Email);
    productData.append('Senha', this.usuario.Senha);
    this.Http.post('http://localhost:80/projeto_integrador2/PHP/scripts/login.php', productData).subscribe((res: any) => {
      // Aqui você pode lidar com a resposta do servidor
      if (res.message === 'Senha válida') {
        // Senha válida
        console.log('Senha válida');
        this.authService.logado = true
        this.authService.usuario = this.usuario.Email
        this.router.navigate(['/home'])
      } else if (res.message === 'Senha inválida') {
        // Senha inválida
        console.log('Senha inválida');
      } else if (res.message === 'Usuário não encontrado') {
        // Usuário não encontrado
        console.log('Usuário não encontrado');
      }
    });
  }
}
