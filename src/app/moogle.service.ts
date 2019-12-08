import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class MoogleService {

  constructor() { }


  getRandom() {
    axios.get("https://www.moogleapi.com/api/v1/characters/random").then(response => {
       response.data
      
    })
  }

  getCharacters(data) {
    axios.get("https://www.moogleapi.com/api/v1/characters").then(response => {
    return response.data
    })
  }


}


