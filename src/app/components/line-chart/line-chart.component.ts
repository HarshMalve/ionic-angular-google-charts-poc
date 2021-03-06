import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  @Input('completedText') completedText;
  @Input('type') type;
  @Input('data') data;
  @Input('options') options;
  @Input('title') title: String;
  constructor() { }

  ngOnInit() {}

}
