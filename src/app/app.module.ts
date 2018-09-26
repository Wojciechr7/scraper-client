import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule } from '@angular/material';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {DataDialog, TableSettingsComponent} from './components/table-settings/table-settings.component';

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductsTableComponent},
    {path: 'cart', component: CartComponent},
    {path: '', redirectTo: '/products', pathMatch: 'full'}
];



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductsTableComponent,
    CartComponent,
    HomeComponent,
    TableSettingsComponent,
      DataDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
      RouterModule.forRoot(
          appRoutes,
          {enableTracing: false}
      ),
      HttpClientModule,
      DeviceDetectorModule.forRoot(),
      MatCheckboxModule,
      MatProgressSpinnerModule,
      MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
    entryComponents: [DataDialog]
})
export class AppModule { }
