import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataProviderService } from '../data-provider.service';
import { Mood } from 'src/models/mood.model';
import { AlertController } from '@ionic/angular';  

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  public info$: Observable<Mood>;
  public keyword: string;
  constructor(private moodProvider: DataProviderService, public alertCtrl: AlertController) {}

  
  findData() {
    this.info$=this.moodProvider.getInfo(this.keyword);
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
            this.findData();
            console.log('submitted');  
          }  
        }  
      ]  
    });  
    await confirm.present();  
  }  

}
