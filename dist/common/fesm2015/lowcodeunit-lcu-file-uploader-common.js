import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploader, FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
export { FileDropDirective, FileItem, FileLikeObject, FileSelectDirective, FileUploadModule, FileUploader } from 'ng2-file-upload';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageMessage {
    /**
     * @param {?} data
     * @param {?} headers
     */
    constructor(data, headers) {
        this.Data = data;
        this.Headers = headers;
    }
}
if (false) {
    /** @type {?} */
    ImageMessage.prototype.Data;
    /** @type {?} */
    ImageMessage.prototype.Headers;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { ConvertToBase64Util } from '@lcu-ide/common';
class FileUploaderComponent {
    constructor() {
        this.SelectedFiles = new Array();
        this.FilesToUpload = new EventEmitter();
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    set URL(value) {
        this._URL = value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.FileUploader = new FileUploader({ url: this._URL });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFileChanged(event) {
        if (this.SelectedFiles) {
            for (let i = 0; i < event.queue.length; i++) {
                this.getBase64(event.queue[i].file.rawFile);
                // console.log("Object = ",ConvertToBase64Util.GetBase64(event.queue[i].file.rawFile));     
            }
        }
        console.log("file(s) uploaded = ", this.SelectedFiles);
        this.FilesToUpload.emit(this.SelectedFiles);
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    getBase64(event) {
        /** @type {?} */
        let file = event;
        /** @type {?} */
        let me = this;
        /** @type {?} */
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (/**
         * @return {?}
         */
        () => {
            //console.log(reader.result);
            me.base64 = reader.result.toString();
            me.buildImageMessage(reader.result.toString(), file);
        });
        reader.onerror = (/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            console.log('Error: ', error);
        });
    }
    /**
     * @protected
     * @param {?} base64
     * @param {?} file
     * @return {?}
     */
    buildImageMessage(base64, file) {
        /** @type {?} */
        let header = "filename=" + file.name;
        /** @type {?} */
        let tempIM = new ImageMessage(base64, header);
        this.SelectedFiles.push(tempIM);
    }
}
FileUploaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'lcu-file-uploader',
                template: "<input  style=\"display: none\" type=\"file\"  (change)=\"onFileChanged(FileUploader)\" ng2FileSelect [uploader]=\"FileUploader\" multiple #fileInput/>\r\n<button mat-raised-button class=\"button\" (click)=\"fileInput.click()\">Select File(s)</button>\r\n\r\n<!-- <input (change)=\"onFileChanged($event)\"> -->\r\n<!-- <input type=\"file\" (change)=\"onUpload($event)\" #file />\r\n<button mat-raised-button class=\"button\" (click)=\"file.click()\">Select File</button> -->\r\n\r\n",
                styles: [".button{background-color:#3f51b5;color:#fff;border-color:#3f51b5;border-radius:4px;font-family:Arial;font-size:13.3333px;padding:6px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important}"]
            }] }
];
/** @nocollapse */
FileUploaderComponent.ctorParameters = () => [];
FileUploaderComponent.propDecorators = {
    URL: [{ type: Input, args: ['url',] }],
    FilesToUpload: [{ type: Output, args: ['files-to-upload',] }]
};
if (false) {
    /** @type {?} */
    FileUploaderComponent.prototype.FileUploader;
    /** @type {?} */
    FileUploaderComponent.prototype.SelectedFiles;
    /** @type {?} */
    FileUploaderComponent.prototype.base64;
    /**
     * @type {?}
     * @protected
     */
    FileUploaderComponent.prototype._URL;
    /** @type {?} */
    FileUploaderComponent.prototype.FilesToUpload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LcuFileUploaderModule {
}
LcuFileUploaderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FileUploaderComponent
                ],
                imports: [
                    CommonModule,
                    FileUploadModule
                ],
                exports: [FileUploaderComponent, FileUploadModule],
                entryComponents: [FileUploaderComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FileUploaderComponent, ImageMessage, LcuFileUploaderModule };
//# sourceMappingURL=lowcodeunit-lcu-file-uploader-common.js.map
