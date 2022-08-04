import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Mood } from 'src/models/mood.model';


@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  private URL='http://a286-35-186-169-179.ngrok.io/';
  constructor(private http:HttpClient) {
    console.log('Data provider created');
  }

  getNewData() {
    this.http.get(this.URL+'get?').subscribe(data=>{})
  }

  getData(page, itemList, event) {
    this.http.get(this.URL+'get?page='+page).subscribe(data=>
      {
        for(let i=0; i<data['result'].length; i++) {
          console.log(data['result'][i]);
          itemList.push(data['result'][i]);
        }
      }
    );
    
    if(page != 0) {
      event.target.complete();
    }
  }

  sendData(m1:any, a1:any, m2:any, a2:any, m3:any, a3:any, n:any) {
    console.log("clicked");
    return this.http.get<Mood>(this.URL+'insert?m1='+m1+'&m2='+m2+'&m3='+m3+'&a1='+a1+'&a2='+a2+'&a3='+a3+'&notes='+n).subscribe(data=>{
    })
  }

  getAVG(listData: any,lineChart: any, Xaxis:any) {
    this.http.get(this.URL+'getavg').subscribe(data =>
    {
      for(let i=0;i<data['result'].length;i++) 
        listData.push(data['result'][i]);
      console.log(listData);
      lineChart.update();
      console.log(listData);
    }
    );

    this.http.get(this.URL+'getX').subscribe(data =>
      {
        for(let i=0;i<data['result'].length;i++) 
          Xaxis.push(data['result'][i]);
        console.log(Xaxis);
        lineChart.update();
        console.log(Xaxis);
      }
      );
  }

  getTOP(listData: any, barChart:any, Xaxis:any) {
    this.http.get(this.URL+'getTop').subscribe(data =>
    {
      for(let i=0;i<data['y'].length;i++) 
        listData.push(data['y'][i]);
      barChart.update();
    }
    );

    this.http.get(this.URL+'getTop').subscribe(data =>
    {
      for(let i=0;i<data['x'].length;i++) 
        Xaxis.push(data['x'][i]);
      barChart.update();
    }
    );

    

  }

  getPIE(listData: any, doughnutChart: any) {
    this.http.get(this.URL+'getCount').subscribe(data =>
    {
      for(let i=0;i<data['result'].length;i++) 
        listData.push(data['result'][i]);
      doughnutChart.update();
    }
    );
  }

  getInfo(keyword: string) {
    return this.http.get<Mood>(this.URL+'getInfo?k='+keyword);
  }

}
