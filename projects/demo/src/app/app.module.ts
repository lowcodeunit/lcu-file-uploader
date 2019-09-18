import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FathymSharedModule, MaterialModule } from '@lcu-ide/common';
import { LcuFileUploaderModule } from '@lowcodeunit/lcu-file-uploader-common';
<<<<<<< HEAD

// import { FileUploaderComponent } from 'projects/common/src/lcu.api';
=======
>>>>>>> 68236b45d821528a3242f446e9eb5bf1ce9968e0



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    FathymSharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LcuFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
  entryComponents: []
})
export class AppModule { }
