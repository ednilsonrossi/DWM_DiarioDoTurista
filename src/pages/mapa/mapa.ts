import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PontoTuristicoProvider, PontoTuristico } from '../../providers/ponto-turistico/ponto-turistico';


/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  map : any;
  id : number;
  ponto : PontoTuristico;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pontoTuristicoProvider : PontoTuristicoProvider, private toast: ToastController) {

    this.pontoTuristicoProvider.get(this.navParams.data.id)
      .then((result:any) => {
        this.ponto = result;
      });
    
      this.toast.create({ message: 'Vou abrir o mapa: ' + this.ponto.latitude +'x'+ this.ponto.longitude, duration: 3000, position: 'botton' }).present();

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');

    
    const position = new google.maps.LatLng(this.ponto.latitude, this.ponto.longitude);
    const mapOptions = {
      zoom : 18,
      center : position
    }

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const marker = new google.maps.Marker({
      position: position,
      map: this.map
    });
    
  }

}
