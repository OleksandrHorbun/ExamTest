import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './main/title/title.component';
import { MainContentComponent } from './main/main-content/main-content.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';

const route: Routes = [
  {path: '', component: MainComponent},
  {path: 'users', component: UsersComponent},
  {path: '**', component: NotFoundComponent}
//children:[
  //{path: '', component: ArticleComponent},
  //{path: 'actlab', component: ActiveArticleComponent}
//]}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    FooterComponent,
    TitleComponent,
    MainContentComponent,
    NotFoundComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(route),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
