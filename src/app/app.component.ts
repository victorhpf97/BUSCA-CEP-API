import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'FF-DB';

  random = []
  characters:  any[];
  cep:  any[];

  numbers: string[] = ['onne', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  output: string[];
  users: any[];

  //  Cep
  logradouro: any[];
  bairro: any[];
  cidade: any[];
  estado: any[];
  ibge: any[];
  tudo: any[];

  formulario: FormGroup;
  submitted: boolean;
  
  cepUser: string


  constructor(private fb: FormBuilder) {}

  ngOnInit() {
 
    this.formulario = this.fb.group({
      'cepUser': new FormControl('', Validators.required),
     
  });




  //  axios.get(" https://viacep.com.br/ws/01017970/json/").then(response => {
  //   console.log(response.data.bairro)
  //   console.log(response.data.logradouro)
  //   console.log(response.data.localidade)
  //   console.log(response.data.ibge)
  //   this.logradouro = response.data.logradouro
  //   this.bairro = response.data.bairro
  //   this.localidade = response.data.localidade
  //   this.uf = response.data.uf
  //   this.ibge = response.data.ibge
  //   console.log( this.ibge)
  //   // this.tudo = response.data
  //   // console.log( this.tudo.uf)
  //   this.tudo = [{logradouro:response.data.logradouro}]
  // })




  // console.log(this.cepUser)
  // axios.get(" https://api.postmon.com.br/v1/cep/" + this.cepUser).then(response => {
  //   console.log(this.cepUser)
  //   console.log(response.data.bairro)
  //   console.log(response.data.logradouro)
  //   console.log(response.data.localidade)
  //   console.log(response.data.ibge)
  //   this.logradouro = response.data.logradouro
  //   this.bairro = response.data.bairro
  //   this.cidade = response.data.cidade
  //   this.estado = response.data.estado
  //   this.tudo = response.data
  //   this.tudo = [{logradouro:response.data.logradouro}]

  //   console.log( response.data)
  // })




}

onSubmit(value: string) {
  this.submitted = true;
  console.log( this.formulario.value.cepUser)
  axios.get(" https://api.postmon.com.br/v1/cep/" + this.formulario.value.cepUser).then(response => {

    this.logradouro = response.data.logradouro
    this.bairro = response.data.bairro
    this.cidade = response.data.cidade
    this.estado = response.data.estado
    this.tudo = response.data
    this.tudo = [{logradouro:response.data.logradouro}]

    console.log( response.data)
})
}












  // getCharacters() {
  //   axios.get("https://www.moogleapi.com/api/v1/characters").then(response => {
  //     this.characters = response.data[0]
  //   })
  // }

  // search(event) {
  //   console.log('event', event);
  //   this.output = this.numbers.filter(c => c.startsWith(event.query));
  // }

  // search(event) {
  //   axios.get("https://www.moogleapi.com/api/v1/characters").then(response => {
  //     this.characters = response.data
  //   })
  //   this.output = this.characters.filter(c => c.startsWith(event.query));
  //   console.log(this.output)
  // }

 
  searchCep () {
    axios.get(" https://viacep.com.br/ws/01017970/json/").then(response => {
      console.log(response.data.bairro)
      console.log(response.data.logradouro)
      console.log(response.data.localidade)
      console.log(response.data.ibge)
    })
}


}


