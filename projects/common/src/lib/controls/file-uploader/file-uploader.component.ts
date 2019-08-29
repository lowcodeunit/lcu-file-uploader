import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'lcu-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})

export class FileUploaderComponent implements OnInit {


public FileUploader: FileUploader; 

public SelectedFiles: Array<File>;

protected _URL;
@Input('url')
  protected set URL(value: string){
    this._URL = value;
  }

@Output('files-to-upload')
  public FilesToUpload: EventEmitter<Array<File>>;

  constructor() { 
    this.SelectedFiles = new Array<File>();
    this.FilesToUpload = new EventEmitter<Array<File>>();
  }

  ngOnInit() {
    this.FileUploader = new FileUploader({url: this._URL});
  }

  onFileChanged(event) {
    console.log("event = ", event.queue);
    if (this.SelectedFiles) {
      for (let i = 0; i < event.queue.length; i++) {
        console.log("pushing: ", event.queue[i].file.rawFile);
        this.SelectedFiles.push(event.queue[i].file.rawFile);
      }
    }
    console.log("file uploaded = ", this.SelectedFiles);
    this.FilesToUpload.emit(this.SelectedFiles);
  }

}
 