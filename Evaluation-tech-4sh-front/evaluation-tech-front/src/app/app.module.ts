import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { FormSortieComponent } from './form-sortie/form-sortie.component';
import { FormEntreeComponent } from './form-entree/form-entree.component';
import { TableHistoriqueComponent } from './table-historique/table-historique.component';
import { HttpModule } from '@angular/http';
import { Communication } from './Communication';
@NgModule({
  declarations: [
    AppComponent,
    FormSortieComponent,
    FormEntreeComponent,
    TableHistoriqueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Communication],
  bootstrap: [AppComponent]
})
export class AppModule { }
