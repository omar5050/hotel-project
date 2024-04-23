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
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TranslateModule } from '@ngx-translate/core';
import { LandingComponent } from './component/landing/landing.component';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  
    DeleteComponent,
        LandingComponent
  ],
 
  imports: [
    CommonModule,
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
    MatSelectModule,
    NgMultiSelectDropDownModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TranslateModule

  ],
  exports: [
    
LandingComponent,
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
    MatSelectModule,
    NgMultiSelectDropDownModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TranslateModule
  ]
 
})
export class SharedModule { }
