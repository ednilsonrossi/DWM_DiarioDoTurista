import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { Geolocation } from '@ionic-native/geolocation';
import { PontoTuristicoProvider, PontoTuristico} from '../../providers/ponto-turistico/ponto-turistico';
import { SQLiteObject } from '@ionic-native/sqlite';
/**
 * Generated class for the NovoPontoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-novo-ponto',
  templateUrl: 'novo-ponto.html',
})
export class NovoPontoPage {

  public formulario:FormGroup;
  public hoje:String;
  //public latitude:number;
  //public longitude:number;
  public ponto : PontoTuristico;
  public temFoto = false;
  public imagem : String;

  constructor(public navCtrl: NavController, 
          public navParams: NavParams, 
          private formBuilder: FormBuilder, 
          private geolocation: Geolocation,
          private pontoTuristicoProvider : PontoTuristicoProvider,
          private toast: ToastController,
          private camera: Camera) {

  
    this.hoje = this.dataHoje();
    this.ponto = new PontoTuristico();
    this.ponto.data_visita = this.hoje;



    
    this.formulario = this.formBuilder.group({
      titulo:['', Validators.required],
      descricao: ['', Validators.required]
    });
    this.getLocation();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovoPontoPage');

  }

  private dataHoje() {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    return [dia, mes, ano].join('/');
  }

  public salvar(){
    //this.toast.create({ message: 'Ponto turístico salvo.', duration: 3000, position: 'botton' }).present();
    let {titulo, descricao} = this.formulario.controls;
    
    let str1 = descricao.value.toString();
    let str2 = titulo.value.toString();

    this.ponto.descricao = str1;
    this.ponto.ponto_turistico = str2;

    this.pontoTuristicoProvider.insert(this.ponto)
      .then(() => {
        this.toast.create({ message: 'Ponto turístico salvo.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar o ponto turístico.', duration: 3000, position: 'botton' }).present();
      });
    
      
  }

  public getLocation():void{
    this.geolocation.getCurrentPosition().then((resp) => {
      this.ponto.latitude = resp.coords.latitude.toString();
      this.ponto.longitude = resp.coords.longitude.toString();
      
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  public tiraFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imagem = base64Image;
      this.ponto.foto = this.imagem;
      this.temFoto = true;
     }, (err) => {
      // Handle error
      console.log("Erro ao tirar foto!");
     });
  }
}
