import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.component.html',
  styleUrls: ['./form-contato.component.scss']
})
export class FormContatoComponent implements OnInit {

  formContato: any;
  
  constructor(private formBuilder:FormBuilder, private contatoService: ContatoService) { 
    this.criarForm();
  }

  ngOnInit(): void {
  }

  criarForm(){
    this.formContato = this.formBuilder.group({
      nome:  ['', Validators.required ],
      email: ['', [Validators.required, Validators.email] ],
      tel: ['',],
      empresa: ['',],
      mensagem: ['', Validators.required ],
    });
  }

  get formControls() { return this.formContato.controls; }

  enviarEmailContato(){
    if (this.formContato.invalid) {
      return;
    }

    this.contatoService.PostMessage(this.formContato.value).subscribe(response => {
      location.href = 'https://mailthis.to/confirm'
    }, error => {
      console.warn(error.responseText)
    })
  }


}
