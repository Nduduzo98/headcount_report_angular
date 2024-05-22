import { Component } from '@angular/core';

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.scss']
})
export class CentralComponent {

  completedTable:boolean = false
  notStartedTable:boolean = false
  inProgressTable:boolean = false
  submissionStatTable:boolean = false
  statreport:boolean = false
  
  showCompleted(){
    this.completedTable = !this.completedTable
    this.inProgressTable = false
    this.notStartedTable = false
    this.submissionStatTable = false
    this.statreport = false
  }
  showInProgress(){
    this.completedTable = false
    this.inProgressTable = !this.inProgressTable
    this.notStartedTable = false
    this.submissionStatTable = false
    this.statreport = false
  }
  showNotStarted(){
    this.completedTable = false
    this.inProgressTable = false
    this.notStartedTable =  !this.notStartedTable
    this.submissionStatTable = false
    this.statreport = false
  }

  showSubmissionStat(){
    this.completedTable = false
    this.inProgressTable = false
    this.notStartedTable =  false
    this.submissionStatTable = !this.submissionStatTable
    this.statreport = false
  }

  showStat(){
    this.completedTable = false
    this.inProgressTable = false
    this.notStartedTable =  false
    this.submissionStatTable = false
    this.statreport = !this.statreport
  }
  
}
