import { Component, ViewChild, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Chart, registerables} from 'node_modules/chart.js'
import { ReportsService } from 'src/app/services/reports.service';
import { Router } from '@angular/router';
import { LookupService } from 'src/app/services/lookup.service';
import { HeadCountServiceService } from 'src/app/services/head-count-service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { School } from 'src/app/model/school';
import { NgToastService } from 'ng-angular-popup';
Chart.register(...registerables)

@Component({
  selector: 'app-statist-report-head',
  templateUrl: './statist-report-head.component.html',
  styleUrls: ['./statist-report-head.component.scss']
})
export class StatistReportHeadComponent {
  inProgress:any
  label:any
  notStarted: any;
  completed: any;
  data:any
  currentUser:any
  roles:any
  districtName:any
  districts: any;
  panelOpenState:boolean=true
  districtID = [6,7,8,9,10]
  preGradeRMales:any
  gradeRMales:any
  grade1Males: any;
  grade2Males: any;
  grade3Males: any;
  grade4Males: any;
  grade5Males: any;
  grade6Males: any;
  grade7Males: any;
  grade8Males: any;
  grade9Males: any;
  grade10Males: any;
  grade11Males: any;
  grade12Males: any;
  gradeSpecialMales: any;
  gradeOtherMales: any;

  preGradeRFemales:any
  gradeRFemales:any
  grade1Females: any;
  grade2Females: any;
  grade3Females: any;
  grade4Females: any;
  grade5Females: any;
  grade6Females: any;
  grade7Females: any;
  grade8Females: any;
  grade9Females: any;
  grade10Females: any;
  grade11Females: any;
  grade12Females: any;
  gradeSpecialFemales: any;
  gradeOtherFemales: any;

  displayedColumns: string[] = [
    'districtName','totalSchools','completed','notStarted'];
     dataSource!: MatTableDataSource<School>;
     @ViewChild(MatPaginator) paginator!: MatPaginator;
     @ViewChild(MatSort) sort!: MatSort;
   
  constructor(private report: ReportsService, private router:Router , private lookup:LookupService,private head:HeadCountServiceService,private toast: NgToastService) {
    const currentUserString = sessionStorage.getItem('currentUser')
    this.currentUser = currentUserString ? JSON.parse(currentUserString) : null
    this.roles = sessionStorage.getItem('roles')
    this.districtName = sessionStorage.getItem('districtName')
  }

  ngOnInit(): void {
    this.report.getNumberOfLearnersInGauteng().subscribe(result => {
      this.data = result
      if (this.data!=null) {


        this.preGradeRMales = this.data.preGradeRMales
        this.gradeRMales = this.data.gradeRMales
        this.grade1Males = this.data.grade1Males;
        this.grade2Males = this.data.grade2Males;
        this.grade3Males = this.data.grade3Males;
        this.grade4Males = this.data.grade4Males;
        this.grade5Males = this.data.grade5Males;
        this.grade6Males = this.data.grade6Males;
        this.grade7Males = this.data.grade7Males;
        this.grade8Males = this.data.grade8Males;
        this.grade9Males = this.data.grade9Males;
        this.grade10Males = this.data.grade10Males;
        this.grade11Males = this.data.grade11Males;
        this.grade12Males = this.data.grade12Males;
        this.gradeSpecialMales = this.data.gradeSpecialMales;
        this.gradeOtherMales = this.data.gradeOtherMales;

    this.preGradeRFemales = this.data.preGradeRFemales
        this.gradeRFemales = this.data.gradeRFemales
        this.grade1Females = this.data.grade1Females;
        this.grade2Females = this.data.grade2Females;
        this.grade3Females = this.data.grade3Females;
        this.grade4Females = this.data.grade4Females;
        this.grade5Females = this.data.grade5Females;
        this.grade6Females = this.data.grade6Females;
        this.grade7Females = this.data.grade7Females;
        this.grade8Females = this.data.grade8Females;
        this.grade9Females = this.data.grade9Females;
        this.grade10Females = this.data.grade10Females;
        this.grade11Females = this.data.grade11Females;
        this.grade12Females = this.data.grade12Females;
        this.gradeSpecialFemales = this.data.gradeSpecialFemales;
        this.gradeOtherFemales = this.data.gradeOtherFemales;

        const chartID = 'bar-chart' ;
        this.RenderChart(chartID,this.districtName,this.preGradeRMales,this.gradeRMales,this.grade1Males,this.grade2Males,this.grade3Males,this.grade4Males,this.grade5Males,this.grade6Males,this.grade7Males,
          this.grade8Males,this.grade9Males,this.grade10Males,this.grade11Males,this.grade12Males,this.gradeSpecialMales,this.gradeOtherMales,this.preGradeRFemales,this.gradeRFemales,
          this.grade1Females,this.grade2Females,this.grade3Females,this.grade4Females,this.grade5Females,this.grade6Females,this.grade7Females,
          this.grade8Females,this.grade9Females,this.grade10Females,this.grade11Females,this.grade12Females,this.gradeSpecialFemales,this.gradeOtherFemales)
        }
      })
    
  }

  RenderChart(chartID:any,districtName:any,preGradeRMales:any,gradeRMales:any,grade1Males:any,grade2Males:any,grade3Males:any,grade4Males:any,grade5Males:any,grade6Males:any,grade7Males:any,grade8Males:any,grade9Males:any,grade10Males:any, grade11Males:any,grade12Males:any,
    gradeSpecialMales:any,gradeOtherMales:any,
    preGradeRFemales:any,gradeRFemales:any,grade1Females:any,grade2Females:any,grade3Females:any,grade4Females:any,grade5Females:any,grade6Females:any,grade7Females:any,grade8Females:any,grade9Females:any,grade10Females:any, grade11Females:any,grade12Females:any,
    gradeSpecialFemales:any,gradeOtherFemales:any){
    const myChart = new Chart(chartID, {
                      type: 'bar',
                      data: {
                        labels: ['Pre-Grade R','Grade R','Grade 1','Grade 2','Grade 3','Grade 4','Grade 5','Grade 6','Grade 7','Grade 8','Grade 9','Grade 10','Grade 11','Grade 12','Grade Special','Grade Other'],
                        datasets: [{
                          label: 'Males',
                          data: [preGradeRMales,gradeRMales,grade1Males,grade2Males,grade3Males,grade4Males,grade5Males,grade6Males,grade7Males,grade8Males,grade9Males,grade10Males,grade11Males,grade12Males,gradeSpecialMales, gradeOtherMales ],
                          backgroundColor:'#004b98',
                         
                        },{
                          label: 'Females',
                          data: [preGradeRFemales,gradeRFemales,grade1Females,grade2Females,grade3Females,grade4Females,grade5Females,grade6Females,grade7Females,grade8Females,grade9Females,grade10Females,grade11Females,grade12Females,gradeSpecialFemales, gradeOtherFemales ],
                          backgroundColor:'#FFAFBD',
                         
                        }]
                      },
                      options: {
                        plugins: {
                          title: {
                            display: true,
                            text: 'LEARNER ENROLMENT BY GRADE AND GENDER IN GAUTENG' // Set the chart title here
                          }
                        },
                        scales: {
                          y: {
                            beginAtZero: true
                          }
                        }
                      
                      }
                    });
  }
}
