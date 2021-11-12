import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recycledata = [];

  constructor() { }

  ngOnInit(): void {
    this.recycledata = [{
      "status": "Completed",
      "Date": "August, 2021",
      "period": "1st - 15th September, 2021",
      "completedtotal": "706",
      "completedstatus": "690",
      "ovedue": 10,
      "request": 5,
      "id": 4
    },
    {
      "status": "Active",
      "Date": "September, 2021",
      "period": "1st - 15th October, 2021",
      "completedtotal": 706,
      "completedstatus": 0,
      "ovedue": 706,
      "request": 0,
      "id": 5
    },{
      "status": "Not Started",
      "Date": "October, 2021",
      "period": "1st - 15th November, 2021",
      "completedtotal": 0,
      "completedstatus": 0,
      "ovedue": 0,
      "request": 0,
      "id": 9
    },{
      "status": "Not Started",
      "Date": "November, 2021",
      "period": "1st - 15th December, 2021",
      "completedtotal": 0,
      "completedstatus": 0,
      "ovedue": 0,
      "request": 0,
      "id": 8
    }];
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      // exportEnabled: true,
      title: {
        // text: "Basic Column Chart in Angular"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Apple" },
          { y: 55, label: "Mango" },
          { y: 50, label: "Orange" }
        ]
      }]
    });
      
    let chart2 = new CanvasJS.Chart("chartContainer2", {
      animationEnabled: true,
      // exportEnabled: true,
      fillStyle : "#39428c",
      title: {
        // text: "Basic Column Chart in Angular"
      },
      data: [{
        // color: "#39428c",
        type: "column",
        dataPoints: [
          { y: 71, label: "Apple" },
          { y: 55, label: "Mango" },
          { y: 50, label: "Orange" }
        ]
      }]
    });
    chart.render();
    chart2.render();
  }

}
