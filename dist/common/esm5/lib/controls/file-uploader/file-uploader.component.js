/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ImageMessage } from '../models/image-message.model';
import { ConvertToBase64Util } from '@lcu-ide/common';
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
     * Build the image message
     *
     * @param base64 base 64 string for the image
     *
     * @param file file data
     */
    /**
     * Build the image message
     *
     * @protected
     * @param {?} base64 base 64 string for the image
     *
     * @param {?} file file data
     * @return {?}
     */
    FileUploaderComponent.prototype.buildImageMessage = /**
     * Build the image message
     *
     * @protected
     * @param {?} base64 base 64 string for the image
     *
     * @param {?} file file data
     * @return {?}
     */
    function (base64, file) {
        /** @type {?} */
        var header = 'filename=' + file.name;
        /** @type {?} */
        var tempIM = new ImageMessage(base64, header);
        this.SelectedFiles.push(tempIM);
        //  console.log('selected files', this.SelectedFiles);
    };
    /**
     * When a file is selected
     *
     * @param event need to figure out what the type is
     */
    /**
     * When a file is selected
     *
     * @param {?} event need to figure out what the type is
     * @return {?}
     */
    FileUploaderComponent.prototype.OnFileChanged = /**
     * When a file is selected
     *
     * @param {?} event need to figure out what the type is
     * @return {?}
     */
    function (event) {
        var _this = this;
        var e_1, _a;
        if (this.SelectedFiles) {
            try {
                for (var _b = tslib_1.__values(event.queue), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var itm = _c.value;
                    ConvertToBase64Util.GetBase64(itm.file.rawFile)
                        .subscribe((/**
                     * @param {?} result
                     * @return {?}
                     */
                    function (result) {
                        _this.buildImageMessage(result.Blob, result.File);
                    }));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.FilesToUpload.emit(this.SelectedFiles);
        }
    };
    FileUploaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lcu-file-uploader',
                    template: "<input  style=\"display: none\" type=\"file\"  (change)=\"OnFileChanged(FileUploader)\" ng2FileSelect [uploader]=\"FileUploader\" multiple #fileInput/>\r\n<button mat-raised-button class=\"button\" (click)=\"fileInput.click()\">Select File(s)</button>\r\n\r\n<!-- <input (change)=\"onFileChanged($event)\"> -->\r\n<!-- <input type=\"file\" (change)=\"onUpload($event)\" #file />\r\n<button mat-raised-button class=\"button\" (click)=\"file.click()\">Select File</button> -->\r\n\r\n",
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
export { FileUploaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbG93Y29kZXVuaXQvbGN1LWZpbGUtdXBsb2FkZXItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFlLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbkU7SUF3QkU7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksS0FBSyxFQUFnQixDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7SUFDL0QsQ0FBQztJQVhELHNCQUNjLHNDQUFHOzs7Ozs7UUFEakIsVUFDa0IsS0FBYTtZQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTs7OztJQVVELHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7Ozs7T0FNRzs7Ozs7Ozs7OztJQUNRLGlEQUFpQjs7Ozs7Ozs7O0lBQTNCLFVBQTRCLE1BQWMsRUFBRSxJQUFVOztZQUM5QyxNQUFNLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJOztZQUNoQyxNQUFNLEdBQWlCLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDN0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFakMsc0RBQXNEO0lBQ3ZELENBQUM7SUFHRDs7OztPQUlHOzs7Ozs7O0lBQ0csNkNBQWE7Ozs7OztJQUFwQixVQUFxQixLQUFVO1FBQS9CLGlCQVVDOztRQVRDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTs7Z0JBQ3ZCLEtBQWtCLElBQUEsS0FBQSxpQkFBQSxLQUFLLENBQUMsS0FBSyxDQUFBLGdCQUFBLDRCQUFFO29CQUExQixJQUFNLEdBQUcsV0FBQTtvQkFDWixtQkFBbUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7eUJBQzlDLFNBQVM7Ozs7b0JBQUMsVUFBQyxNQUFtQjt3QkFDNUIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNuRCxDQUFDLEVBQUMsQ0FBQztpQkFDSjs7Ozs7Ozs7O1lBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7Z0JBaEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qiw4ZUFBNkM7O2lCQUU5Qzs7Ozs7c0JBWUUsS0FBSyxTQUFDLEtBQUs7Z0NBS1gsTUFBTSxTQUFDLGlCQUFpQjs7SUE0QzNCLDRCQUFDO0NBQUEsQUFqRUQsSUFpRUM7U0EzRFkscUJBQXFCOzs7SUFHaEMsNkNBQWtDOztJQUVsQyw4Q0FBMEM7O0lBRTFDLHVDQUFzQjs7Ozs7SUFFdEIscUNBQWU7O0lBTWYsOENBQ3dEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkZXIgfSBmcm9tICduZzItZmlsZS11cGxvYWQvbmcyLWZpbGUtdXBsb2FkJztcclxuaW1wb3J0IHsgSW1hZ2VNZXNzYWdlIH0gZnJvbSAnLi4vbW9kZWxzL2ltYWdlLW1lc3NhZ2UubW9kZWwnO1xyXG5pbXBvcnQgeyBCYXNlNjRNb2RlbCwgQ29udmVydFRvQmFzZTY0VXRpbCB9IGZyb20gJ0BsY3UtaWRlL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xjdS1maWxlLXVwbG9hZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS11cGxvYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS11cGxvYWRlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG4gIHB1YmxpYyBGaWxlVXBsb2FkZXI6IEZpbGVVcGxvYWRlcjtcclxuXHJcbiAgcHVibGljIFNlbGVjdGVkRmlsZXM6IEFycmF5PEltYWdlTWVzc2FnZT47XHJcblxyXG4gIHB1YmxpYyBiYXNlNjQ6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIF9VUkw7XHJcbiAgQElucHV0KCd1cmwnKVxyXG4gIHByb3RlY3RlZCBzZXQgVVJMKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX1VSTCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgnZmlsZXMtdG8tdXBsb2FkJylcclxuICBwdWJsaWMgRmlsZXNUb1VwbG9hZDogRXZlbnRFbWl0dGVyPEFycmF5PEltYWdlTWVzc2FnZT4+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuU2VsZWN0ZWRGaWxlcyA9IG5ldyBBcnJheTxJbWFnZU1lc3NhZ2U+KCk7XHJcbiAgICB0aGlzLkZpbGVzVG9VcGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PEltYWdlTWVzc2FnZT4+KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuRmlsZVVwbG9hZGVyID0gbmV3IEZpbGVVcGxvYWRlcih7IHVybDogdGhpcy5fVVJMIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQnVpbGQgdGhlIGltYWdlIG1lc3NhZ2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSBiYXNlNjQgYmFzZSA2NCBzdHJpbmcgZm9yIHRoZSBpbWFnZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGZpbGUgZmlsZSBkYXRhXHJcbiAgICovXHJcbiAgIHByb3RlY3RlZCBidWlsZEltYWdlTWVzc2FnZShiYXNlNjQ6IHN0cmluZywgZmlsZTogRmlsZSl7XHJcbiAgICAgY29uc3QgaGVhZGVyID0gJ2ZpbGVuYW1lPScgKyBmaWxlLm5hbWU7XHJcbiAgICAgY29uc3QgdGVtcElNOiBJbWFnZU1lc3NhZ2UgPSBuZXcgSW1hZ2VNZXNzYWdlKGJhc2U2NCwgaGVhZGVyKTtcclxuICAgICB0aGlzLlNlbGVjdGVkRmlsZXMucHVzaCh0ZW1wSU0pO1xyXG5cclxuICAgIC8vICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgZmlsZXMnLCB0aGlzLlNlbGVjdGVkRmlsZXMpO1xyXG4gICB9XHJcblxyXG5cclxuICAgLyoqXHJcbiAgICAqIFdoZW4gYSBmaWxlIGlzIHNlbGVjdGVkXHJcbiAgICAqXHJcbiAgICAqIEBwYXJhbSBldmVudCBuZWVkIHRvIGZpZ3VyZSBvdXQgd2hhdCB0aGUgdHlwZSBpc1xyXG4gICAgKi9cclxuICBwdWJsaWMgT25GaWxlQ2hhbmdlZChldmVudDogYW55KSB7XHJcbiAgICBpZiAodGhpcy5TZWxlY3RlZEZpbGVzKSB7XHJcbiAgICAgZm9yIChjb25zdCBpdG0gb2YgZXZlbnQucXVldWUpIHtcclxuICAgICAgIENvbnZlcnRUb0Jhc2U2NFV0aWwuR2V0QmFzZTY0KGl0bS5maWxlLnJhd0ZpbGUpXHJcbiAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQ6IEJhc2U2NE1vZGVsKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmJ1aWxkSW1hZ2VNZXNzYWdlKHJlc3VsdC5CbG9iLCByZXN1bHQuRmlsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5GaWxlc1RvVXBsb2FkLmVtaXQodGhpcy5TZWxlY3RlZEZpbGVzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19