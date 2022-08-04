import { Component } from '@angular/core';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  pageNum=0;
  itemListData=[];
  constructor(private myProvider: DataProviderService) {}

  ionViewDidEnter() {
    console.log('ion Entered');
    this.myProvider.getData(0, this.itemListData, null);
  }

  loadData(event) {
    this.pageNum++;
    this.myProvider.getData(this.pageNum*10, this.itemListData, event);
  }

  ngAfterViewInit() {
    this.myProvider.getNewData();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.myProvider.getNewData();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}