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
        console.log('selected files', this.SelectedFiles);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbG93Y29kZXVuaXQvbGN1LWZpbGUtdXBsb2FkZXItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFlLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbkU7SUF3QkU7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksS0FBSyxFQUFnQixDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7SUFDL0QsQ0FBQztJQVhELHNCQUNjLHNDQUFHOzs7Ozs7UUFEakIsVUFDa0IsS0FBYTtZQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTs7OztJQVVELHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7Ozs7T0FNRzs7Ozs7Ozs7OztJQUNRLGlEQUFpQjs7Ozs7Ozs7O0lBQTNCLFVBQTRCLE1BQWMsRUFBRSxJQUFVOztZQUM5QyxNQUFNLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJOztZQUNoQyxNQUFNLEdBQWlCLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDN0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUdEOzs7O09BSUc7Ozs7Ozs7SUFDRyw2Q0FBYTs7Ozs7O0lBQXBCLFVBQXFCLEtBQVU7UUFBL0IsaUJBU0M7O1FBUkMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFOztnQkFDdkIsS0FBa0IsSUFBQSxLQUFBLGlCQUFBLEtBQUssQ0FBQyxLQUFLLENBQUEsZ0JBQUEsNEJBQUU7b0JBQTFCLElBQU0sR0FBRyxXQUFBO29CQUNaLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzt5QkFDOUMsU0FBUzs7OztvQkFBQyxVQUFDLE1BQW1CO3dCQUM1QixLQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ25ELENBQUMsRUFBQyxDQUFDO2lCQUNKOzs7Ozs7Ozs7U0FDRjtJQUNILENBQUM7O2dCQTlERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsOGVBQTZDOztpQkFFOUM7Ozs7O3NCQVlFLEtBQUssU0FBQyxLQUFLO2dDQUtYLE1BQU0sU0FBQyxpQkFBaUI7O0lBMEMzQiw0QkFBQztDQUFBLEFBL0RELElBK0RDO1NBekRZLHFCQUFxQjs7O0lBR2hDLDZDQUFrQzs7SUFFbEMsOENBQTBDOztJQUUxQyx1Q0FBc0I7Ozs7O0lBRXRCLHFDQUFlOztJQU1mLDhDQUN3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZGVyIH0gZnJvbSAnbmcyLWZpbGUtdXBsb2FkL25nMi1maWxlLXVwbG9hZCc7XHJcbmltcG9ydCB7IEltYWdlTWVzc2FnZSB9IGZyb20gJy4uL21vZGVscy9pbWFnZS1tZXNzYWdlLm1vZGVsJztcclxuaW1wb3J0IHsgQmFzZTY0TW9kZWwsIENvbnZlcnRUb0Jhc2U2NFV0aWwgfSBmcm9tICdAbGN1LWlkZS9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsY3UtZmlsZS11cGxvYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICBwdWJsaWMgRmlsZVVwbG9hZGVyOiBGaWxlVXBsb2FkZXI7XHJcblxyXG4gIHB1YmxpYyBTZWxlY3RlZEZpbGVzOiBBcnJheTxJbWFnZU1lc3NhZ2U+O1xyXG5cclxuICBwdWJsaWMgYmFzZTY0OiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCBfVVJMO1xyXG4gIEBJbnB1dCgndXJsJylcclxuICBwcm90ZWN0ZWQgc2V0IFVSTCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9VUkwgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoJ2ZpbGVzLXRvLXVwbG9hZCcpXHJcbiAgcHVibGljIEZpbGVzVG9VcGxvYWQ6IEV2ZW50RW1pdHRlcjxBcnJheTxJbWFnZU1lc3NhZ2U+PjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLlNlbGVjdGVkRmlsZXMgPSBuZXcgQXJyYXk8SW1hZ2VNZXNzYWdlPigpO1xyXG4gICAgdGhpcy5GaWxlc1RvVXBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxJbWFnZU1lc3NhZ2U+PigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLkZpbGVVcGxvYWRlciA9IG5ldyBGaWxlVXBsb2FkZXIoeyB1cmw6IHRoaXMuX1VSTCB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJ1aWxkIHRoZSBpbWFnZSBtZXNzYWdlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYmFzZTY0IGJhc2UgNjQgc3RyaW5nIGZvciB0aGUgaW1hZ2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSBmaWxlIGZpbGUgZGF0YVxyXG4gICAqL1xyXG4gICBwcm90ZWN0ZWQgYnVpbGRJbWFnZU1lc3NhZ2UoYmFzZTY0OiBzdHJpbmcsIGZpbGU6IEZpbGUpe1xyXG4gICAgIGNvbnN0IGhlYWRlciA9ICdmaWxlbmFtZT0nICsgZmlsZS5uYW1lO1xyXG4gICAgIGNvbnN0IHRlbXBJTTogSW1hZ2VNZXNzYWdlID0gbmV3IEltYWdlTWVzc2FnZShiYXNlNjQsIGhlYWRlcik7XHJcbiAgICAgdGhpcy5TZWxlY3RlZEZpbGVzLnB1c2godGVtcElNKTtcclxuICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgZmlsZXMnLCB0aGlzLlNlbGVjdGVkRmlsZXMpO1xyXG4gICB9XHJcblxyXG5cclxuICAgLyoqXHJcbiAgICAqIFdoZW4gYSBmaWxlIGlzIHNlbGVjdGVkXHJcbiAgICAqXHJcbiAgICAqIEBwYXJhbSBldmVudCBuZWVkIHRvIGZpZ3VyZSBvdXQgd2hhdCB0aGUgdHlwZSBpc1xyXG4gICAgKi9cclxuICBwdWJsaWMgT25GaWxlQ2hhbmdlZChldmVudDogYW55KSB7XHJcbiAgICBpZiAodGhpcy5TZWxlY3RlZEZpbGVzKSB7XHJcbiAgICAgZm9yIChjb25zdCBpdG0gb2YgZXZlbnQucXVldWUpIHtcclxuICAgICAgIENvbnZlcnRUb0Jhc2U2NFV0aWwuR2V0QmFzZTY0KGl0bS5maWxlLnJhd0ZpbGUpXHJcbiAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQ6IEJhc2U2NE1vZGVsKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmJ1aWxkSW1hZ2VNZXNzYWdlKHJlc3VsdC5CbG9iLCByZXN1bHQuRmlsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19