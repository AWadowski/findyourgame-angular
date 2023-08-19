import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SecondpageComponent } from './homepage/secondpage/secondpage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'secondpage', component: SecondpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
