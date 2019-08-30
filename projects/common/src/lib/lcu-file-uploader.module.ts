import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from './controls/file-uploader/file-uploader.component';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';



@NgModule({
  declarations: [
    FileUploaderComponent
  ],
  imports: [
    CommonModule,
    FileUploadModule
  ],
  exports: [FileUploaderComponent],
  entryComponents: [FileUploaderComponent]
})
export class LcuFileUploaderModule { }
