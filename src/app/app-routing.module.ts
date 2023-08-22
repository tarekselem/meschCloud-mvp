import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'workspaces',
    loadChildren: () =>
      import('./workspaces/workspaces.module').then((m) => m.WorkspacesModule),
  },
  { path: '', redirectTo: 'workspaces', pathMatch: 'full' },
  { path: '**', redirectTo: 'workspaces' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
