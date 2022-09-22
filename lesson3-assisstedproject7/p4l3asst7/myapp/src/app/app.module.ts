import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { ChangeColorDirective } from './ChangeColorDirective';
import { HighLightDirective } from './HighLightDirective';


@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    ChangeColorDirective,
    HighLightDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
