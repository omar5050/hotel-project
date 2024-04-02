import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxDropzoneModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxDropzoneModule
  ]
})
export class SharedModule { }
