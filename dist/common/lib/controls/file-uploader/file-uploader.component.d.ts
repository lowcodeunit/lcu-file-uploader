import { OnInit, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ImageMessage } from '../models/image-message.model';
export declare class FileUploaderComponent implements OnInit {
    FileUploader: FileUploader;
    SelectedFiles: Array<ImageMessage>;
    protected _URL: any;
    protected URL: string;
    FilesToUpload: EventEmitter<Array<ImageMessage>>;
    constructor();
    ngOnInit(): void;
    getBase64(event: any): any;
    buildImageMessage(base64: any, file: File): void;
    onFileChanged(event: any): void;
}
