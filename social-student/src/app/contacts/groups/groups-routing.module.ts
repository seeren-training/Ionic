import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupCreatorComponent } from './group-creator/group-creator.component';
import { GroupDiscussionComponent } from './group-discussion/group-discussion.component';
import { GroupsComponent } from './groups.component';


const routes: Routes = [
  {
    path: '',
    component: GroupsComponent,
    children: [
      {
        path: 'new',
        component: GroupCreatorComponent
      },
      {
        path: 'discussion/:id',
        component: GroupDiscussionComponent
      },
      {
        path: '**',
        redirectTo: 'new'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
