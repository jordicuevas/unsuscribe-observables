import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { SegundoComponent } from './segundo/segundo.component';
import {PrimeroComponent} from './primero/primero.component';
 const routes: Routes = [
    { path: 'primero', component: PrimeroComponent },
    { path: 'segundo', component: SegundoComponent }


];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
