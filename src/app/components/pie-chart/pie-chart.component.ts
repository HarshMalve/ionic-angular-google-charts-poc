import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  @Input('completedText') completedText;
  // completedText = '50% Completed'
  @Input('type') type;
  // type='PieChart';
  @Input('data') data;

@Input('options') options;

  constructor() { }

  ngOnInit() {
    console.log('completedText ' + this.completedText);
  }

}
