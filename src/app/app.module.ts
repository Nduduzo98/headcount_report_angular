import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { ReportsNavComponent } from './components/Reports/reports-nav/reports-nav.component';
import { LoginComponent } from './components/User/login/login.component';
import { RegisterComponent } from './components/User/register/register.component';
import { CompletedComponent } from './components/Reports/DistrictOfficial/completed/completed.component';
import { DistrictOfficialComponent } from './components/Reports/DistrictOfficial/district-official/district-official.component';
import { InProgressComponent } from './components/Reports/DistrictOfficial/in-progress/in-progress.component';
import { NotStartedComponent } from './components/Reports/DistrictOfficial/not-started/not-started.component';
import { AllDistrictsComponent } from './components/Reports/charts/all-districts/all-districts.component';
import { EkurhuleniNorthComponent } from './components/Reports/charts/ekurhuleni/ekurhuleni-north/ekurhuleni-north.component';
import { EnCompletedComponent } from './components/Reports/charts/ekurhuleni/ekurhuleni-north/en-completed/en-completed.component';
import { EnInprogressComponent } from './components/Reports/charts/ekurhuleni/ekurhuleni-north/en-inprogress/en-inprogress.component';
import { EnNotstartedComponent } from './components/Reports/charts/ekurhuleni/ekurhuleni-north/en-notstarted/en-notstarted.component';
import { EnSubmissionStatComponent } from './components/Reports/charts/ekurhuleni/ekurhuleni-north/en-submission-stat/en-submission-stat.component';
import { EkurhuleniSouthComponent } from './components/Reports/charts/ekurhuleni/ekurhuleni-south/ekurhuleni-south.component';
import { EsCompletedComponent } from './components/Reports/charts/ekurhuleni/ekurhuleni-south/es-completed/es-completed.component';
import { EsInprogressComponent } from './components/Reports/charts/ekurhuleni/ekurhuleni-south/es-inprogress/es-inprogress.component';
import { EsNotstartedComponent } from './components/Reports/charts/ekurhuleni/ekurhuleni-south/es-notstarted/es-notstarted.component';
import { EsSubmissionStatComponent } from './components/Reports/charts/ekurhuleni/ekurhuleni-south/es-submission-stat/es-submission-stat.component';
import { EkurhuleniComponent } from './components/Reports/charts/ekurhuleni/ekurhuleni.component';
import { GautengEastComponent } from './components/Reports/charts/gauteng/gauteng-east/gauteng-east.component';
import { GeCompletedComponent } from './components/Reports/charts/gauteng/gauteng-east/ge-completed/ge-completed.component';
import { GeInprogressComponent } from './components/Reports/charts/gauteng/gauteng-east/ge-inprogress/ge-inprogress.component';
import { GeNotstartedComponent } from './components/Reports/charts/gauteng/gauteng-east/ge-notstarted/ge-notstarted.component';
import { GeSubmissionStatComponent } from './components/Reports/charts/gauteng/gauteng-east/ge-submission-stat/ge-submission-stat.component';
import { GautengNorthComponent } from './components/Reports/charts/gauteng/gauteng-north/gauteng-north.component';
import { GnCompletedComponent } from './components/Reports/charts/gauteng/gauteng-north/gn-completed/gn-completed.component';
import { GnInprogressComponent } from './components/Reports/charts/gauteng/gauteng-north/gn-inprogress/gn-inprogress.component';
import { GnNotstartedComponent } from './components/Reports/charts/gauteng/gauteng-north/gn-notstarted/gn-notstarted.component';
import { GnSubmissionStatComponent } from './components/Reports/charts/gauteng/gauteng-north/gn-submission-stat/gn-submission-stat.component';
import { GautengWestComponent } from './components/Reports/charts/gauteng/gauteng-west/gauteng-west.component';
import { GwCompletedComponent } from './components/Reports/charts/gauteng/gauteng-west/gw-completed/gw-completed.component';
import { GwInprogressComponent } from './components/Reports/charts/gauteng/gauteng-west/gw-inprogress/gw-inprogress.component';
import { GwNotstartedComponent } from './components/Reports/charts/gauteng/gauteng-west/gw-notstarted/gw-notstarted.component';
import { GwSubmissionStatComponent } from './components/Reports/charts/gauteng/gauteng-west/gw-submission-stat/gw-submission-stat.component';
import { GautengComponent } from './components/Reports/charts/gauteng/gauteng.component';
import { CentralCompletedComponent } from './components/Reports/charts/johannesburg/central/central-completed/central-completed.component';
import { CentralInprogressComponent } from './components/Reports/charts/johannesburg/central/central-inprogress/central-inprogress.component';
import { CentralNotstartedComponent } from './components/Reports/charts/johannesburg/central/central-notstarted/central-notstarted.component';
import { CentralSubmissionStatComponent } from './components/Reports/charts/johannesburg/central/central-submission-stat/central-submission-stat.component';
import { CentralComponent } from './components/Reports/charts/johannesburg/central/central.component';
import { EastCompletedComponent } from './components/Reports/charts/johannesburg/east-jhb/east-completed/east-completed.component';
import { EastInprogressComponent } from './components/Reports/charts/johannesburg/east-jhb/east-inprogress/east-inprogress.component';
import { EastJhbComponent } from './components/Reports/charts/johannesburg/east-jhb/east-jhb.component';
import { EastNotstartedComponent } from './components/Reports/charts/johannesburg/east-jhb/east-notstarted/east-notstarted.component';
import { EastSubmissionStatComponent } from './components/Reports/charts/johannesburg/east-jhb/east-submission-stat/east-submission-stat.component';
import { JohannesburgComponent } from './components/Reports/charts/johannesburg/johannesburg.component';
import { NorthCompletedComponent } from './components/Reports/charts/johannesburg/north-jhb/north-completed/north-completed.component';
import { NorthInprogressComponent } from './components/Reports/charts/johannesburg/north-jhb/north-inprogress/north-inprogress.component';
import { NorthJhbComponent } from './components/Reports/charts/johannesburg/north-jhb/north-jhb.component';
import { NorthNotstartedComponent } from './components/Reports/charts/johannesburg/north-jhb/north-notstarted/north-notstarted.component';
import { NorthSubmissionStatComponent } from './components/Reports/charts/johannesburg/north-jhb/north-submission-stat/north-submission-stat.component';
import { SouthCompletedComponent } from './components/Reports/charts/johannesburg/south-jhb/south-completed/south-completed.component';
import { SouthInprogressComponent } from './components/Reports/charts/johannesburg/south-jhb/south-inprogress/south-inprogress.component';
import { SouthJhbComponent } from './components/Reports/charts/johannesburg/south-jhb/south-jhb.component';
import { SouthNotstartedComponent } from './components/Reports/charts/johannesburg/south-jhb/south-notstarted/south-notstarted.component';
import { SouthSubmissionStatComponent } from './components/Reports/charts/johannesburg/south-jhb/south-submission-stat/south-submission-stat.component';
import { WestCompletedComponent } from './components/Reports/charts/johannesburg/west-jhb/west-completed/west-completed.component';
import { WestInprogressComponent } from './components/Reports/charts/johannesburg/west-jhb/west-inprogress/west-inprogress.component';
import { WestJhbComponent } from './components/Reports/charts/johannesburg/west-jhb/west-jhb.component';
import { WestNotstartedComponent } from './components/Reports/charts/johannesburg/west-jhb/west-notstarted/west-notstarted.component';
import { WestSubmissionStatComponent } from './components/Reports/charts/johannesburg/west-jhb/west-submission-stat/west-submission-stat.component';
import { SeCompletedComponent } from './components/Reports/charts/sedibeng/sedibeng-east/se-completed/se-completed.component';
import { SeInprogressComponent } from './components/Reports/charts/sedibeng/sedibeng-east/se-inprogress/se-inprogress.component';
import { SeNotstartedComponent } from './components/Reports/charts/sedibeng/sedibeng-east/se-notstarted/se-notstarted.component';
import { SeSubmissionStatComponent } from './components/Reports/charts/sedibeng/sedibeng-east/se-submission-stat/se-submission-stat.component';
import { SedibengEastComponent } from './components/Reports/charts/sedibeng/sedibeng-east/sedibeng-east.component';
import { SedibengWestComponent } from './components/Reports/charts/sedibeng/sedibeng-west/sedibeng-west.component';
import { SwCompletedComponent } from './components/Reports/charts/sedibeng/sedibeng-west/sw-completed/sw-completed.component';
import { SwInprogressComponent } from './components/Reports/charts/sedibeng/sedibeng-west/sw-inprogress/sw-inprogress.component';
import { SwNotstartedComponent } from './components/Reports/charts/sedibeng/sedibeng-west/sw-notstarted/sw-notstarted.component';
import { SwSubmissionStatComponent } from './components/Reports/charts/sedibeng/sedibeng-west/sw-submission-stat/sw-submission-stat.component';
import { SedibengComponent } from './components/Reports/charts/sedibeng/sedibeng.component';
import { SubmissionStatsComponent } from './components/Reports/charts/submission-stats/submission-stats.component';
import { TshwaneComponent } from './components/Reports/charts/tshwane/tshwane.component';
import { TshwaneNorthComponent } from './components/Reports/charts/tshwane/tshwane-north/tshwane-north.component';
import { TshwaneSouthComponent } from './components/Reports/charts/tshwane/tshwane-south/tshwane-south.component';
import { TshwaneWestComponent } from './components/Reports/charts/tshwane/tshwane-west/tshwane-west.component';
import { TnCompletedComponent } from './components/Reports/charts/tshwane/tshwane-north/tn-completed/tn-completed.component';
import { TnInprogressComponent } from './components/Reports/charts/tshwane/tshwane-north/tn-inprogress/tn-inprogress.component';
import { TnNotstartedComponent } from './components/Reports/charts/tshwane/tshwane-north/tn-notstarted/tn-notstarted.component';
import { TnSubmissionStatComponent } from './components/Reports/charts/tshwane/tshwane-north/tn-submission-stat/tn-submission-stat.component';
import { TsSubmissionStatComponent } from './components/Reports/charts/tshwane/tshwane-south/ts-submission-stat/ts-submission-stat.component';
import { TsNotstartedComponent } from './components/Reports/charts/tshwane/tshwane-south/ts-notstarted/ts-notstarted.component';
import { TsInprogressComponent } from './components/Reports/charts/tshwane/tshwane-south/ts-inprogress/ts-inprogress.component';
import { TsCompletedComponent } from './components/Reports/charts/tshwane/tshwane-south/ts-completed/ts-completed.component';
import { TwCompletedComponent } from './components/Reports/charts/tshwane/tshwane-west/tw-completed/tw-completed.component';
import { TwInprogressComponent } from './components/Reports/charts/tshwane/tshwane-west/tw-inprogress/tw-inprogress.component';
import { TwNotstartedComponent } from './components/Reports/charts/tshwane/tshwane-west/tw-notstarted/tw-notstarted.component';
import { TwSubmissionStatComponent } from './components/Reports/charts/tshwane/tshwane-west/tw-submission-stat/tw-submission-stat.component';
import { StatisticalReportComponent } from './components/Reports/DistrictOfficial/statistical-report/statistical-report.component';
import { StatistReportHeadComponent } from './components/Reports/charts/statist-report-head/statist-report-head.component';
import { CentralStatistReportComponent } from './components/Reports/charts/johannesburg/central/central-statist-report/central-statist-report.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportsNavComponent,
    LoginComponent,
    RegisterComponent,
    
    AllDistrictsComponent,
    EkurhuleniComponent,
    GautengComponent,
    JohannesburgComponent,
    SedibengComponent,
    TshwaneComponent,
    DistrictOfficialComponent,
    InProgressComponent,
    CompletedComponent,
    NotStartedComponent,
    CentralComponent,
    CentralCompletedComponent,
    CentralInprogressComponent,
    CentralNotstartedComponent,
    EastJhbComponent,
    NorthJhbComponent,
    SouthJhbComponent,
    WestJhbComponent,
    EastNotstartedComponent,
    EastCompletedComponent,
    EastInprogressComponent,
    NorthInprogressComponent,
    NorthCompletedComponent,
    NorthNotstartedComponent,
    SouthNotstartedComponent,
    SouthCompletedComponent,
    SouthInprogressComponent,
    WestInprogressComponent,
    WestCompletedComponent,
    WestNotstartedComponent,
    SubmissionStatsComponent,
    CentralSubmissionStatComponent,
    EastSubmissionStatComponent,
    NorthSubmissionStatComponent,
    SouthSubmissionStatComponent,
    WestSubmissionStatComponent,
    EkurhuleniNorthComponent,
    EkurhuleniSouthComponent,
    EnSubmissionStatComponent,
    EnNotstartedComponent,
    EnCompletedComponent,
    EnInprogressComponent,
    EsInprogressComponent,
    EsCompletedComponent,
    EsNotstartedComponent,
    EsSubmissionStatComponent,
    GautengNorthComponent,
    GautengWestComponent,
    GautengEastComponent,
    GeSubmissionStatComponent,
    GeNotstartedComponent,
    GeCompletedComponent,
    GeInprogressComponent,
    GnInprogressComponent,
    GnCompletedComponent,
    GnNotstartedComponent,
    GnSubmissionStatComponent,
    GwSubmissionStatComponent,
    GwNotstartedComponent,
    GwCompletedComponent,
    GwInprogressComponent,
    SedibengEastComponent,
    SedibengWestComponent,
    SeCompletedComponent,
    SeInprogressComponent,
    SeNotstartedComponent,
    SeSubmissionStatComponent,
    SwSubmissionStatComponent,
    SwNotstartedComponent,
    SwInprogressComponent,
    SwCompletedComponent,
    TshwaneNorthComponent,
    TshwaneSouthComponent,
    TshwaneWestComponent,
    TnCompletedComponent,
    TnInprogressComponent,
    TnNotstartedComponent,
    TnSubmissionStatComponent,
    TsSubmissionStatComponent,
    TsNotstartedComponent,
    TsInprogressComponent,
    TsCompletedComponent,
    TwCompletedComponent,
    TwInprogressComponent,
    TwNotstartedComponent,
    TwSubmissionStatComponent,
    StatisticalReportComponent,
    StatistReportHeadComponent,
    CentralStatistReportComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule,
    MatDatepickerModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule,
    MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule,
    MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule,MatStepperModule,NgToastModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
