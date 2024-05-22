import { Component } from '@angular/core';

@Component({
  selector: 'app-tshwane-west',
  templateUrl: './tshwane-west.component.html',
  styleUrls: ['./tshwane-west.component.scss']
})
export class TshwaneWestComponent {
  completedTable:boolean = false
  notStartedTable:boolean = false
  inProgressTable:boolean = false
  submissionStatTable:boolean = false
  
  showCompleted(){
    this.completedTable = !this.completedTable
    this.inProgressTable = false
    this.notStartedTable = false
    this.submissionStatTable = false
  }
  showInProgress(){
    this.completedTable = false
    this.inProgressTable = !this.inProgressTable
    this.notStartedTable = false
    this.submissionStatTable = false
  }
  showNotStarted(){
    this.completedTable = false
    this.inProgressTable = false
    this.notStartedTable =  !this.notStartedTable
    this.submissionStatTable = false
  }

  showSubmissionStat(){
    this.completedTable = false
    this.inProgressTable = false
    this.notStartedTable =  false
    this.submissionStatTable = !this.submissionStatTable
  }
}
