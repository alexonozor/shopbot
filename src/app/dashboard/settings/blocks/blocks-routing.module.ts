import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBlocksComponent } from './create-blocks/create-blocks.component';
import { EditBlocksComponent } from './edit-blocks/edit-blocks.component';
import { ListBlocksComponent } from './list-blocks/list-blocks.component';
import { BlocksResolver } from '../../../shared/resolvers/settings.resolver';


const routes: Routes = [
  {
    path: '',
    component: ListBlocksComponent,
    resolve: { blocks: BlocksResolver }
  },
  {
    path: 'create',
    component: CreateBlocksComponent,
  },
  {
    path: ':id/edit',
    component: EditBlocksComponent,
    resolve: { block: BlocksResolver }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class BlockRoutingModule { }
