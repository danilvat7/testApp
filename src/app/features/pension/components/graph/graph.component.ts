import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import * as d3 from 'd3';

interface PensionData {
  age: string;
  money: string | number;
}

const chartData1: PensionData[] = [
  { age: '50', money: '82000' },
  { age: '51', money: '82500' },
  { age: '52', money: '83000' },
  { age: '53', money: '83500' },
  { age: '54', money: '84000' },
  { age: '55', money: '84500' },
  { age: '56', money: '85000' },
  { age: '57', money: '85500' },
  { age: '58', money: '86000' },
  { age: '59', money: '86500' },
  { age: '60', money: '87000' },
  { age: '61', money: '87500' },
  { age: '62', money: '88000' },
  { age: '63', money: '88500' },
  { age: '64', money: '65000' },
  { age: '65', money: '45000' },
  { age: '66', money: '45000' },
  { age: '67', money: '45000' },
  { age: '68', money: '45000' },
  { age: '69', money: '45000' },
  { age: '70', money: '45000' },
  { age: '71', money: '45000' },
  { age: '72', money: '45000' },
  { age: '73', money: '45000' },
  { age: '74', money: '45000' },
  { age: '75', money: '45000' },
  { age: '76', money: '45000' },
  { age: '77', money: '45000' },
  { age: '78', money: '45000' },
  { age: '79', money: '45000' },
  { age: '80', money: '45000' },
  { age: '81', money: '45000' },
  { age: '82', money: '45000' },
  { age: '83', money: '45000' },
  { age: '84', money: '45000' },
  { age: '85', money: '45000' }
];


const chartData2: PensionData[] = [
  { age: '50', money: '72000' },
  { age: '51', money: '72500' },
  { age: '52', money: '73000' },
  { age: '53', money: '73500' },
  { age: '54', money: '74000' },
  { age: '55', money: '74500' },
  { age: '56', money: '75000' },
  { age: '57', money: '75500' },
  { age: '58', money: '76000' },
  { age: '59', money: '76500' },
  { age: '60', money: '77000' },
  { age: '61', money: '77500' },
  { age: '62', money: '78000' },
  { age: '63', money: '60000' },
  { age: '64', money: '40000' },
  { age: '65', money: '40000' },
  { age: '66', money: '40000' },
  { age: '67', money: '40000' },
  { age: '68', money: '40000' },
  { age: '69', money: '40000' },
  { age: '70', money: '40000' },
  { age: '71', money: '40000' },
  { age: '72', money: '40000' },
  { age: '73', money: '40000' },
  { age: '74', money: '40000' },
  { age: '75', money: '40000' },
  { age: '76', money: '40000' },
  { age: '77', money: '40000' },
  { age: '78', money: '40000' },
  { age: '79', money: '40000' },
  { age: '80', money: '40000' },
  { age: '81', money: '40000' },
  { age: '82', money: '40000' },
  { age: '83', money: '40000' },
  { age: '84', money: '40000' },
  { age: '85', money: '40000' }
];

const WIDTH = 500;
const HEIGHT = 500;
const MARGINS = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 50
};
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.less']
})
export class GraphComponent implements OnInit, AfterViewInit {
  @ViewChild('chart')
  chart: ElementRef;

  visualChart: any;

  xScale: any;
  yScale: any;

  xAxis: any;
  yAxis: any;

  lineGen: any;

  constructor() {}
  ngOnInit() {
    this.xScale = d3
      .scaleLinear()
      .range([MARGINS.left, WIDTH - MARGINS.right])
      .domain([50, 85]);

    this.yScale = d3
      .scaleLinear()
      .range([HEIGHT - MARGINS.top, MARGINS.bottom])
      .domain([30000, 100000]);

    this.xAxis = d3.axisBottom(this.xScale);

    this.yAxis = d3.axisLeft(this.yScale);

    this.lineGen = d3
      .line()
      .x((d: any) => {
        return this.xScale(d.age);
      })
      .y((d: any) => {
        return this.yScale(d.money);
      });
  }

  ngAfterViewInit() {
    this.visualChart = d3.select(this.chart.nativeElement);

    this.visualChart
      .append('svg:g')
      .attr('class', 'axis')
      .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
      .call(this.xAxis);

    this.visualChart
      .append('svg:g')
      .attr('class', 'axis')
      .attr('transform', 'translate(' + MARGINS.left + ',0)')
      .call(this.yAxis);

    this.visualChart
      .append('svg:path')
      .attr('d', this.lineGen(chartData1))
      .attr('stroke', '#ffd500')
      .attr('stroke-width', 2)
      .attr('fill', 'none');

    this.visualChart
      .append('svg:path')
      .attr('d', this.lineGen(chartData2))
      .attr('stroke', '#5cb85c')
      .attr('stroke-width', 2)
      .attr('fill', 'none');
  }
}
