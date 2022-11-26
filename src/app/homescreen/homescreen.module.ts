import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { FeedsComponent } from './feeds/feeds.component';
import { UserslistComponent } from './userslist/userslist.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent,
    FeedsComponent,
    UserslistComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: []
})
export class HomescreenModule { }
