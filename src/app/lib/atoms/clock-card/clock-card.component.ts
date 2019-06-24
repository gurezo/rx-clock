import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clock-card',
  templateUrl: './clock-card.component.html',
  styleUrls: ['./clock-card.component.scss']
})
export class ClockCardComponent implements OnInit {

  @Input() value: number;

  constructor() {
    this.value = 0;
  }

  ngOnInit() {
  }

}
