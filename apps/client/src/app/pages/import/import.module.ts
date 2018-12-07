import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportComponent } from './import/import.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ListModule } from '../../modules/list/list.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CoreModule } from '../../core/core.module';
import { PageLoaderModule } from '../../modules/page-loader/page-loader.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ItemIconModule } from '../../modules/item-icon/item-icon.module';
import { PipesModule } from '../../pipes/pipes.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: ':importString',
    component: ImportComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    RouterModule.forChild(routes),
    TranslateModule,
    ListModule,
    NgZorroAntdModule,
    FlexLayoutModule,
    ItemIconModule,
    PipesModule,

    PageLoaderModule
  ],
  declarations: [ImportComponent]
})
export class ImportModule {
}
