// import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { DeleteComponent } from './delete/delete.component';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
  
    DeleteComponent
  ],
  imports: [
    
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule


  ],
  exports: [
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule

  ]
 
})
export class SharedModule { }
