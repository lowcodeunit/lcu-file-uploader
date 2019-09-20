import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ImageMessage } from '../models/image-message.model';
import { Base64Model, ConvertToBase64Util } from '@lcu/common';

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

  /**
   * Build the image message
   *
   * @param base64 base 64 string for the image
   *
   * @param file file data
   */
   protected buildImageMessage(base64: string, file: File){
     const header = 'filename=' + file.name;
     const tempIM: ImageMessage = new ImageMessage(base64, header);
     this.SelectedFiles.push(tempIM);

    //  console.log('selected files', this.SelectedFiles);
   }


   /**
    * When a file is selected
    *
    * @param event need to figure out what the type is
    */
   public OnFileChanged(event: any) {
    this.SelectedFiles = [];
    ConvertToBase64Util.GetBase64(event.queue)
       .subscribe(
         (result: Array<Base64Model>) => {
           for (const itm of result) {
            this.buildImageMessage(itm.Blob, itm.File);
           }
           this.FilesToUpload.emit(this.SelectedFiles);
         }
      );
  }
}
