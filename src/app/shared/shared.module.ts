import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
