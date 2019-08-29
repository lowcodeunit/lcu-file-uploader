import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'lcu-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})

export class FileUploaderComponent implements OnInit {

protected URL = '/api/';
public FileUploader: FileUploader = new FileUploader({url: this.URL});

public SelectedFiles: Array<File>;


@Output('files-to-upload')
  public FilesToUpload: EventEmitter<Array<File>>;

  constructor() { 
    this.SelectedFiles = new Array<File>();
    this.FilesToUpload = new EventEmitter<Array<File>>();
  }

  ngOnInit() {
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
 