import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CarService} from "../../services/CarService";

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-car-chart',
  templateUrl: 'car-chart.html',
})
export class CarChartPage implements OnInit {
  cars = [];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getAllCars().then(cars => {
      this.cars = cars;
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(() => {
        this.drawCategoryChart();
        this.drawAgeChart();
        this.doorChart()
      });
    });
  }

  drawCategoryChart() {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Category');
    data.addColumn('number', 'Price');
    this.cars.forEach(car => {
      data.addRow([car.categorie, Number(car.price)]);
    });

    const options = {
      title: 'Car Prices by Category',
      hAxis: {
        title: 'Category',
        titleTextStyle: {
          bold: true
        }
      },
      vAxis: {
        title: 'Price',
        titleTextStyle: {
          bold: true
        }
      }
    };

    const chart = new google.visualization.ColumnChart(document.getElementById('category-chart'));
    chart.draw(data, options);
  }

  drawAgeChart() {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Age');
    data.addColumn('number', 'Count');
    const ageCounts = {};
    this.cars.forEach(car => {
      const age = car.age ? car.age.toString() : 'Unknown';
      if (!ageCounts[age]) {
        ageCounts[age] = 1;
      } else {
        ageCounts[age]++;
      }
    });
    Object.keys(ageCounts).forEach(age => {
      data.addRow([age, ageCounts[age]]);
    });

    const options = {
      title: 'Car Age Distribution',
      pieHole: 0.4,
    };

    const chart = new google.visualization.PieChart(document.getElementById('age-chart'));
    chart.draw(data, options);
  }
  doorChart(){
    const doorData = new google.visualization.DataTable();
    doorData.addColumn('string', 'Number of Doors');
    doorData.addColumn('number', 'Count');
    const doorCounts = {};
    this.cars.forEach(car => {
      const numDoors = car.nbporte ? car.nbporte.toString() : 'Unknown';
      if (!doorCounts[numDoors]) {
        doorCounts[numDoors] = 1;
      } else {
        doorCounts[numDoors]++;
      }
    });
    Object.keys(doorCounts).forEach(numDoors => {
      doorData.addRow([numDoors, doorCounts[numDoors]]);
    });

    const doorOptions = {
      title: 'Car Counts by Number of Doors',
      pieHole: 0.4
    };

    const doorChart = new google.visualization.PieChart(document.getElementById('door-chart'));
    doorChart.draw(doorData, doorOptions);

  }
}
