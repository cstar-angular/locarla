import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SelectionPanelComponent } from './components/selection-panel/selection-panel.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { DataSheetComponent } from './components/data-sheet/data-sheet.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectionPanelComponent,
    CompanyInfoComponent,
    DataSheetComponent,
    DataTableComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
