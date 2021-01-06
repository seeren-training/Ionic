import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupCreatorComponent } from './group-creator/group-creator.component';
import { GroupDiscussionComponent } from './group-discussion/group-discussion.component';
import { GroupsComponent } from './groups.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GroupsComponent,
    GroupCreatorComponent,
    GroupDiscussionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GroupsRoutingModule
  ]
})
export class GroupsModule { }
