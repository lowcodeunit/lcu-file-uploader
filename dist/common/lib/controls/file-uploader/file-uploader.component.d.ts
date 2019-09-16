import { OnInit, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
export declare class FileUploaderComponent implements OnInit {
    FileUploader: FileUploader;
    SelectedFiles: Array<File>;
    protected _URL: any;
    protected URL: string;
    FilesToUpload: EventEmitter<Array<File>>;
    constructor();
    ngOnInit(): void;
    onFileChanged(event: any): void;
}
