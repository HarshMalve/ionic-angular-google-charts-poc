import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { PieChartComponent } from '../components/pie-chart/pie-chart.component';
import { LineChartComponent } from '../components/line-chart/line-chart.component';
import { HomePageRoutingModule } from './home-routing.module';
import { GoogleChartsModule } from 'angular-google-charts';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    GoogleChartsModule
  ],
  declarations: [HomePage, PieChartComponent, LineChartComponent]
})
export class HomePageModule {}
