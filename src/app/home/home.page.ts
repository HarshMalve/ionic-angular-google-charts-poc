import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;
  type: string;
  options: any;
  completedText: any;
  charType: number;
  title: string;

  constructor() { 
    // this.setPieChart(); //To Set Pie Chart
    this.setLineChart(); //To Set Line Chart
  }

  setPieChart() {
    this.charType = 1;
    this.type = 'PieChart';
    this.data = [
      ['Enrolled', 80],
      ['Completed', 20]
    ];
    this.options = {
      pieHole: 0.9,
      pieSliceTextStyle: {
        color: '',
      },
      legend: 'none',
      colors: ['#1a88ff', '#ff9924']
    };
    this.completedText = "50% Completed"
  };

  setLineChart() {
    this.charType = 2;
    // this.data.addColumn('string', 'Month');
    this.data = [
       ['Jan',  0.0],
       ['Feb',  6.9],
       ['Mar',  0.5],
       ['Apr',  14.5],
       ['May',  12.2],
       ['Jun',  21.5],
      //  ['Jul',  50.5],
      //  ['Aug',  26.5],
      //  ['Sep',  23.3],
      //  ['Oct',  18.3],
      //  ['Nov',  13.9],
      //  ['Dec',  9.6]
      ];

       this.type = 'LineChart';
       this.options = {
        legend: {
          position: 'none'
        },
        gridllines: {
            color: '#0072BC'
        },
        backgroundColor: {
          fill: '#0072BC',
        },
        chartArea: {
          width: '100%',
          // height: '100%'
          // left: 25
        },
        colors: ['#ffffff', '#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        animation: {
          startup: true,
          duration: 500,
          easing: 'out'
        },
        hAxis: {
          textStyle:{color: '#FFF'}
        },
        vAxis: {
          textStyle: {
            fontSize: 1,
            color: '#FFF'
          },
          baselineColor: 'white',
          gridlines: {
            count: 0,
           },
        },
      };
      this.title = "LEARNING HOURS";
  }
}
