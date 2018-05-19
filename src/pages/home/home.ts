import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { PontoTuristicoProvider, PontoTuristico} from '../../providers/ponto-turistico/ponto-turistico';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pontos:any[] = [];


  constructor(public navCtrl: NavController, private toast: ToastController, private pontoProvider: PontoTuristicoProvider) {
      
  }

  ionViewDidEnter() {
    this.getAllPontos();
  }

  getAllPontos() {
    this.pontoProvider.getAll()
      .then((result: any[]) => {
        this.pontos = result;
      });
  }

  add(){
    
  }
}
