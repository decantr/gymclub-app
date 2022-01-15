import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild("barCanvas") barCanvas: ElementRef;
  private barChart: Chart;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.drawCharts();
  }

  private drawCharts() {
    const datapoints = [5, 12, 10, 18, 15, 11, 12, 8, 10, 7, 10, 7, 6, 2, 9, 7, 1, 0, 0];
    const data = {
      labels: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm'],
      datasets: [
        {
          data: datapoints,
          borderColor: 'green',
          tension: 0.5
        } 
      ]
    };
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'line',
      data: data,
      options: {
        events: [],
        responsive: true,
        plugins: {
          legend: { display: false, },
        },
        scales: {
          x: {
            grid: {display: false},
            display: true
          },
          y: {
            grid: {display: false},
            display: true,
          }
        }
      },
    });
  }

}
