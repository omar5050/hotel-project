import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { SharedComponent } from './shared.component';


@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class SharedModule { }
