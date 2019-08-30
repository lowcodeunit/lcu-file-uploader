import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploader, FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
export { FileDropDirective, FileItem, FileLikeObject, FileSelectDirective, FileUploadModule, FileUploader } from 'ng2-file-upload';

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
    FileUploaderComponent.prototype.onFileChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log("event = ", event.queue);
        if (this.SelectedFiles) {
            for (var i = 0; i < event.queue.length; i++) {
                console.log("pushing: ", event.queue[i].file.rawFile);
                this.SelectedFiles.push(event.queue[i].file.rawFile);
            }
        }
        console.log("file uploaded = ", this.SelectedFiles);
        this.FilesToUpload.emit(this.SelectedFiles);
    };
    FileUploaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lcu-file-uploader',
                    template: "<input  style=\"display: none\" type=\"file\"  (change)=\"onFileChanged(FileUploader)\" ng2FileSelect [uploader]=\"FileUploader\" multiple #fileInput/>\r\n<!-- <input (change)=\"onFileChanged($event)\"> -->\r\n<button mat-raised-button color=\"primary\" (click)=\"fileInput.click()\">Select File</button>\r\n",
                    styles: [""]
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

export { FileUploaderComponent, LcuFileUploaderModule };
//# sourceMappingURL=lowcodeunit-lcu-file-uploader-common.js.map
