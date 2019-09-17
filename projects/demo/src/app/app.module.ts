import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FathymSharedModule, MaterialModule } from '@lcu-ide/common';
import { LcuFileUploaderModule } from '@lowcodeunit/lcu-file-uploader-common';



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
