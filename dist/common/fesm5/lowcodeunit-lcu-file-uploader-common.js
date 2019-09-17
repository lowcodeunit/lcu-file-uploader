import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploader, FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
export { FileDropDirective, FileItem, FileLikeObject, FileSelectDirective, FileUploadModule, FileUploader } from 'ng2-file-upload';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageMessage = /** @class */ (function () {
    function ImageMessage(data, headers) {
        this.Data = data;
        this.Headers = headers;
    }
    return ImageMessage;
}());
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
var FileUploaderComponent = /** @class */ (function () {
    function FileUploaderComponent() {
        this.SelectedFiles = new Array();
        this.FilesToUpload = new EventEmitter();
    }
    Object.defineProperty(FileUploaderComponent.prototype, "URL", {
        set: /**
         * @protected
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._URL = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FileUploaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.FileUploader = new FileUploader({ url: this._URL });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileUploaderComponent.prototype.getBase64 = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var file = event;
        /** @type {?} */
        var me = this;
        /** @type {?} */
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (/**
         * @return {?}
         */
        function () {
            //console.log(reader.result);
            // me.base64 = reader.result.toString();
            me.buildImageMessage(reader.result.toString(), file);
        });
        reader.onerror = (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            console.log('Error: ', error);
        });
    };
    /**
     * @param {?} base64
     * @param {?} file
     * @return {?}
     */
    FileUploaderComponent.prototype.buildImageMessage = /**
     * @param {?} base64
     * @param {?} file
     * @return {?}
     */
    function (base64, file) {
        /** @type {?} */
        var header = "filename=" + file.name;
        /** @type {?} */
        var tempIM = new ImageMessage(base64, header);
        //console.log("tempIm = ",tempIM);
        this.SelectedFiles.push(tempIM);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileUploaderComponent.prototype.onFileChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // console.log("event = ", event);
        // console.log("event.queue = ", event.queue);
        if (this.SelectedFiles) {
            for (var i = 0; i < event.queue.length; i++) {
                this.getBase64(event.queue[i].file.rawFile);
            }
        }
        console.log("file(s) uploaded = ", this.SelectedFiles);
        this.FilesToUpload.emit(this.SelectedFiles);
    };
    FileUploaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lcu-file-uploader',
                    template: "<input  style=\"display: none\" type=\"file\"  (change)=\"onFileChanged(FileUploader)\" ng2FileSelect [uploader]=\"FileUploader\" multiple #fileInput/>\r\n<button mat-raised-button class=\"button\" (click)=\"fileInput.click()\">Select File(s)</button>\r\n\r\n<!-- <input (change)=\"onFileChanged($event)\"> -->\r\n<!-- <input type=\"file\" (change)=\"onUpload($event)\" #file />\r\n<button mat-raised-button class=\"button\" (click)=\"file.click()\">Select File</button> -->\r\n\r\n",
                    styles: [".button{background-color:#3f51b5;color:#fff;border-color:#3f51b5;border-radius:4px;font-family:Arial;font-size:13.3333px;padding:6px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important}"]
                }] }
    ];
    /** @nocollapse */
    FileUploaderComponent.ctorParameters = function () { return []; };
    FileUploaderComponent.propDecorators = {
        URL: [{ type: Input, args: ['url',] }],
        FilesToUpload: [{ type: Output, args: ['files-to-upload',] }]
    };
    return FileUploaderComponent;
}());
if (false) {
    /** @type {?} */
    FileUploaderComponent.prototype.FileUploader;
    /** @type {?} */
    FileUploaderComponent.prototype.SelectedFiles;
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
var LcuFileUploaderModule = /** @class */ (function () {
    function LcuFileUploaderModule() {
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
    return LcuFileUploaderModule;
}());

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
