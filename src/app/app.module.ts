import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NgbDropdownModule,
  NgbModule,
  NgbScrollSpyModule,
  NgbToastModule,
} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { TrainingComponent } from './training/training.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AngularIconComponent } from './common/icons/angular-icon/angular-icon.component';
import { ReactIconComponent } from './common/icons/react-icon/react-icon.component';
import { CsharpIconComponent } from './common/icons/csharp-icon/csharp-icon.component';
import { CplusIconComponent } from './common/icons/cplus-icon/cplus-icon.component';
import { DotnetIconComponent } from './common/icons/dotnet-icon/dotnet-icon.component';
import { MysqlIconComponent } from './common/icons/mysql-icon/mysql-icon.component';
import { GqlIconComponent } from './common/icons/gql-icon/gql-icon.component';
import { WhatsIconComponent } from './common/icons/whats-icon/whats-icon.component';
import { LinkdinIconComponent } from './common/icons/linkdin-icon/linkdin-icon.component';
import { GithubIconComponent } from './common/icons/github-icon/github-icon.component';
import { HtmlIconComponent } from './common/icons/html-icon/html-icon.component';
import { CssIconComponent } from './common/icons/css-icon/css-icon.component';
import { JsIconComponent } from './common/icons/js-icon/js-icon.component';
import { TsIconComponent } from './common/icons/ts-icon/ts-icon.component';
import { SqlserverIconComponent } from './common/icons/sqlserver-icon/sqlserver-icon.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    TrainingComponent,
    ContactComponent,
    NavbarComponent,
    AngularIconComponent,
    ReactIconComponent,
    CsharpIconComponent,
    CplusIconComponent,
    DotnetIconComponent,
    MysqlIconComponent,
    GqlIconComponent,
    WhatsIconComponent,
    LinkdinIconComponent,
    GithubIconComponent,
    HtmlIconComponent,
    CssIconComponent,
    JsIconComponent,
    TsIconComponent,
    SqlserverIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbToastModule,
    NgbScrollSpyModule,
    NgbDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
