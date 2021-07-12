import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewCategoryComponent } from './new-category.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, 
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: NewCategoryComponent,
      }
    ])],
  declarations: [NewCategoryComponent],
  exports: [NewCategoryComponent]
})
export class NewCategoryComponentModule {}