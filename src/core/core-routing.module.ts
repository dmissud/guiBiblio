import {CoreShellComponent} from "./core-shell/core-shell.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: CoreShellComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // On utilise forChild dans un module enfant
  exports: [RouterModule]
})
export class CoreRoutingModule { }
