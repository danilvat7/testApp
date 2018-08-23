import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './step-button.component.html',
  styleUrls: ['./step-button.component.less']
})
export class StepButtonComponent implements OnInit {
  @Input()
  label: string;
  @Input()
  type = 'button';
  @Input() direction = 'next';
  @Input() class: string;

  constructor() {}

  ngOnInit() {}
}
