import { Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexGrid,
  ApexTitleSubtitle,
  ApexMarkers
  
} from "ng-apexcharts";

@Component({
  selector: 'app-columnchart',
  templateUrl: './columnchart.component.html',
  styleUrls: ['./columnchart.component.css']
})
export class ColumnchartComponent {
  @ViewChild("chart") chart: ChartComponent | any;
  xaxis: ApexXAxis;
  series: ApexAxisChartSeries;
  charts: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  grid: ApexGrid;
  legend:ApexLegend;
  title:ApexTitleSubtitle;
  statisticLists:any = [];
  colors: any = [];
  markers: ApexMarkers;
  
  constructor() {
      this.markers = {
        size:0,
        showNullDataPoints:false
      }
      this.statisticLists=[
        {
          title:"Average Sale",
          price:"650"
        },
        {
          title:"Commission",
          price:"233,600"
        }, 
        {
          title:"Annual Taxes",
          price:"29,004"
        }, 
        {
          title:"Annual Income",
          price:"1,480,00"
        }
      ]
      this.series = [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91]
        },
       
      ],
      this.title = {
        text:"Sales Progress",
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '25px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  '#fff'
        },
      }
      this.colors = ["rgba(255,255,255,0.25)", "#fff"]
      this.legend = {
        show:false
      }
      this.charts = {
        type: "bar",
        height: 350,
        selection: {
          enabled:false
        },
        toolbar:{
          show:true,
          tools:{
            download:'<i class="fas fa-ellipsis-h"/>',
            // selection:true,
            // customIcons: [{
            //   class:'custom-icon',
            //   icon:'<i class="fas fa-ellipsis-h"/>'
            // }] 
          }
        }
      },

      this.plotOptions= {
        bar: {
          horizontal: false,
          columnWidth: "56%",
          borderRadius:5,
          distributed:false
        }
      },
      this.dataLabels = {
        enabled: false
      },
      this.stroke = {
        show: false,
        width: 2,
        colors: ["transparent"]
      },
      this.xaxis = {
        labels: {
          show:false
        },
        axisBorder: {
          show:false
        },
        axisTicks: {
          show:false
        },
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          " ",
        ]
      },
      this.yaxis = {
        show:false,
        title: {
          text: "$ (thousands)"
        },
      },
      this.grid = {
        yaxis: {
          lines: {
            show: false
          }
        }
      }
      this.fill = {
        opacity: 1
      },
      this.tooltip = {
        y: {
          formatter: function(val) {
            return "$ " + val + " thousands";
          }
        }
      }
    
  }
}
