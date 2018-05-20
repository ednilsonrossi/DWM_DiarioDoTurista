import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExibeLocalPage } from './exibe-local';

@NgModule({
  declarations: [
    ExibeLocalPage,
  ],
  imports: [
    IonicPageModule.forChild(ExibeLocalPage),
  ],
})
export class ExibeLocalPageModule {}
