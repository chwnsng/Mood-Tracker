import { Component, ElementRef, ViewChild } from '@angular/core';
import { Data } from '@angular/router';
import { modalController } from '@ionic/core';
import { Chart, registerables } from 'chart.js';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  @ViewChild('lineCanvas', {static: true}) private lineCanvas: ElementRef;
  @ViewChild('barCanvas', {static: true}) private barCanvas: ElementRef;
  @ViewChild('doughnutCanvas', {static: true}) private doughnutCanvas: ElementRef;

  lineChart: any;
  barChart: any;
  doughnutChart: any;
  showData=[];
  xData=[];

  yBar=[];
  xBar=[];

  yDoughnut=[];

  constructor(private myDataProvider: DataProviderService) {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.barChartMethod();
    this.doughnutChartMethod();
    this.lineChartMethod();
    this.myDataProvider.getAVG(this.showData,this.lineChart,this.xData);
    this.myDataProvider.getTOP(this.yBar,this.barChart,this.xBar);
    this.myDataProvider.getPIE(this.yDoughnut,this.doughnutChart);
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.xData,
        datasets: [
          {
            label:'Average mood score',
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.showData,
            spanGaps: false,
          }
        ]
      }
    });
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.xBar,
        datasets: [{
          label: 'Average mood score',
          data: this.yBar,
          backgroundColor: [
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {

      }
    });
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Morning', 'Afternoon', 'Night'],
        datasets: [{
          label: 'Sum of mood scores',
          data: this.yDoughnut,
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }
  
}
