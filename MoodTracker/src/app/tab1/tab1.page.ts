import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataProviderService } from '../data-provider.service';
import { Mood } from 'src/models/mood.model';
import { AlertController } from '@ionic/angular';  

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public msg: any;
  public m1: string;
  public a1: string;
  public m2: string;
  public a2: string;
  public m3: string;
  public a3: string;
  public n: string;

  constructor(private moodProvider: DataProviderService, public alertCtrl: AlertController) {}

  submitData() {
    this.msg=this.moodProvider.sendData(this.m1, this.a1, this.m2, this.a2, this.m3, this.a3, this.n);
  }

  async showConfirm() {  
    const confirm = await this.alertCtrl.create({  
      header: 'Submit',  
      message: 'Do you wish to submit?',  
      buttons: [  
        {  
          text: 'Cancel',  
          role: 'cancel',  
          handler: () => {  
            console.log('submission canceled');  
          }  
        },  
        {  
          text: 'OK',  
          handler: () => {  
            this.submitData();
            console.log('submitted');  
          }  
        }  
      ]  
    });  
    await confirm.present();  
  }  

}
