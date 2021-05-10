import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { TestdbComponent } from './components/testdb/testdb.component';
// import { CommonModule } from '@angular/common';

const routes: Routes = [
 
  {path: 'testDB', component: TestdbComponent},
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)],
    // CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
