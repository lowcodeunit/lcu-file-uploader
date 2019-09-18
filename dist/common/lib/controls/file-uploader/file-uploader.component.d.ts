import { OnInit, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ImageMessage } from '../models/image-message.model';
export declare class FileUploaderComponent implements OnInit {
    FileUploader: FileUploader;
    SelectedFiles: Array<ImageMessage>;
    base64: string;
    protected _URL: any;
    protected URL: string;
    FilesToUpload: EventEmitter<Array<ImageMessage>>;
    constructor();
    ngOnInit(): void;
<<<<<<< HEAD
    /**
     * Build the image message
     *
     * @param base64 base 64 string for the image
     *
     * @param file file data
     */
    protected buildImageMessage(base64: string, file: File): void;
    /**
     * When a file is selected
     *
     * @param event need to figure out what the type is
     */
    OnFileChanged(event: any): void;
=======
    onFileChanged(event: any): void;
    protected getBase64(event: any): any;
    protected buildImageMessage(base64: any, file: File): void;
>>>>>>> 68236b45d821528a3242f446e9eb5bf1ce9968e0
}
