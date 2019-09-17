import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ImageMessage } from '../models/image-message.model';
// import { ConvertToBase64Util } from '@lcu-ide/common';

@Component({
  selector: 'lcu-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})

export class FileUploaderComponent implements OnInit {


  public FileUploader: FileUploader;

  public SelectedFiles: Array<ImageMessage>;

  public base64: string;

  protected _URL;
  @Input('url')
  protected set URL(value: string) {
    this._URL = value;
  }

  @Output('files-to-upload')
  public FilesToUpload: EventEmitter<Array<ImageMessage>>;

  constructor() {
    this.SelectedFiles = new Array<ImageMessage>();
    this.FilesToUpload = new EventEmitter<Array<ImageMessage>>();
  }

  ngOnInit() {
    this.FileUploader = new FileUploader({ url: this._URL });
  }

  public onFileChanged(event) {
    if (this.SelectedFiles) {
      for (let i = 0; i < event.queue.length; i++) {
        this.getBase64(event.queue[i].file.rawFile);
        // console.log("Object = ",ConvertToBase64Util.GetBase64(event.queue[i].file.rawFile));     
      }
    }
    console.log("file(s) uploaded = ", this.SelectedFiles);
    this.FilesToUpload.emit(this.SelectedFiles);
  }

  protected getBase64(event): any {
    let file = event;
    let me = this;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      //console.log(reader.result);
      me.base64 = reader.result.toString();
      me.buildImageMessage(reader.result.toString(), file);
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }

  protected buildImageMessage(base64: any, file: File) {
    let header = "filename=" + file.name;
    let tempIM: ImageMessage = new ImageMessage(base64, header);
    this.SelectedFiles.push(tempIM);
  }

}
