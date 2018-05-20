import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PontoTuristico, PontoTuristicoProvider } from '../../providers/ponto-turistico/ponto-turistico';

/**
 * Generated class for the ExibeLocalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exibe-local',
  templateUrl: 'exibe-local.html',
})
export class ExibeLocalPage {

  id : number;
  ponto : PontoTuristico;


  constructor(public navCtrl: NavController, public navParams: NavParams, private pontoTuristicoProvider : PontoTuristicoProvider, private toast: ToastController) {
    this.ponto = new PontoTuristico();

    this.pontoTuristicoProvider.get(this.navParams.data.id)
      .then((result:any) => {
        this.ponto = result;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExibeLocalPage');
  }

  public delete(){
    this.pontoTuristicoProvider.delete(this.ponto.id)
      .then(() => {
        this.navCtrl.pop();
      });
  }

  public abrirMapa(){
    this.navCtrl.pop();
    this.navCtrl.push('MapaPage', {id:this.ponto.id});
    //this.navCtrl.push('HomePage');
    this.toast.create({ message: 'Vou abrir o mapa: ' + this.ponto.latitude +'x'+ this.ponto.longitude, duration: 3000, position: 'botton' }).present();
  }
}
