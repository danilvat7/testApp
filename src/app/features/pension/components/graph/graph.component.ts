import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import * as d3 from 'd3';

const chartData: any[] = [
  { 'age': '50', 'money': '92000' },
  { 'age': '51', 'money': '92000' },
  { 'age': '52', 'money': '92000' },
  { 'age': '53', 'money': '92000' },
  { 'age': '54', 'money': '92000' },
  { 'age': '55', 'money': '92000' },
  { 'age': '56', 'money': '92000' },
  { 'age': '57', 'money': '92000' },
  { 'age': '58', 'money': '92000' },
  { 'age': '59', 'money': '92000' },
  { 'age': '60', 'money': '92000' },
  { 'age': '61', 'money': '92000' },
  { 'age': '62', 'money': '92000' },
  { 'age': '63', 'money': '92000' },
  { 'age': '64', 'money': '92000' },
  { 'age': '65', 'money': '92000' },
  // { 'age': '64', 'money': '80000' },
  // { 'age': '66', 'money': '45000' },
  // { 'age': '66', 'money': '40000' }
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
      .domain([40000, 100000]);

    this.xAxis = d3.axisBottom(this.xScale);

    this.yAxis = d3.axisLeft(this.yScale);

    this.lineGen = d3
      .line()
      .x( (d: any) => {
        console.log(d);
        
        return this.xScale(d.age);
      })
      .y( (d: any) => {
        return this.yScale(d.money);
      });
  }

  ngAfterViewInit() {
    console.log(this.chart.nativeElement);

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
      .attr('d', this.lineGen(chartData))
      .attr('stroke', 'green')
      .attr('stroke-width', 2)
      .attr('fill', 'none');
  }
}
