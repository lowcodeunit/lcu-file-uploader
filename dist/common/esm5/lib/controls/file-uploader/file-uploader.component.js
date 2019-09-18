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
    /**
     * @type {?}
     * @protected
     */
    FileUploaderComponent.prototype._URL;
    /** @type {?} */
    FileUploaderComponent.prototype.FilesToUpload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbG93Y29kZXVuaXQvbGN1LWZpbGUtdXBsb2FkZXItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFN0QsT0FBTyxFQUFlLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJbkU7SUF3QkU7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksS0FBSyxFQUFnQixDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7SUFDL0QsQ0FBQztJQVhILHNCQUNnQixzQ0FBRzs7Ozs7O1FBRG5CLFVBQ29CLEtBQWE7WUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7Ozs7SUFVRCx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7Ozs7SUFDUSxpREFBaUI7Ozs7Ozs7OztJQUEzQixVQUE0QixNQUFjLEVBQUUsSUFBVTs7WUFDOUMsTUFBTSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSTs7WUFDaEMsTUFBTSxHQUFpQixJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQzdELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFHRDs7OztPQUlHOzs7Ozs7O0lBQ0csNkNBQWE7Ozs7OztJQUFwQixVQUFxQixLQUFVO1FBQS9CLGlCQVNDOztRQVJDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTs7Z0JBQ3ZCLEtBQWtCLElBQUEsS0FBQSxpQkFBQSxLQUFLLENBQUMsS0FBSyxDQUFBLGdCQUFBLDRCQUFFO29CQUExQixJQUFNLEdBQUcsV0FBQTtvQkFDWixtQkFBbUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7eUJBQzlDLFNBQVM7Ozs7b0JBQUMsVUFBQyxNQUFtQjt3QkFDNUIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNuRCxDQUFDLEVBQUMsQ0FBQztpQkFDSjs7Ozs7Ozs7O1NBQ0Y7SUFDSCxDQUFDOztnQkE5REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLDhlQUE2Qzs7aUJBRTlDOzs7OztzQkFZQSxLQUFLLFNBQUMsS0FBSztnQ0FLWCxNQUFNLFNBQUMsaUJBQWlCOztJQTBDekIsNEJBQUM7Q0FBQSxBQS9ERCxJQStEQztTQXpEWSxxQkFBcUI7OztJQUdsQyw2Q0FBa0M7O0lBRWxDLDhDQUEwQzs7Ozs7SUFJMUMscUNBQWU7O0lBTWYsOENBQzBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkZXIgfSBmcm9tICduZzItZmlsZS11cGxvYWQvbmcyLWZpbGUtdXBsb2FkJztcclxuaW1wb3J0IHsgSW1hZ2VNZXNzYWdlIH0gZnJvbSAnLi4vbW9kZWxzL2ltYWdlLW1lc3NhZ2UubW9kZWwnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9pbnRlcm5hbC9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgQmFzZTY0TW9kZWwsIENvbnZlcnRUb0Jhc2U2NFV0aWwgfSBmcm9tICdAbGN1LWlkZS9jb21tb24nO1xyXG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAncnhqcy9pbnRlcm5hbC9TdWJzY3JpYmVyJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsY3UtZmlsZS11cGxvYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxucHVibGljIEZpbGVVcGxvYWRlcjogRmlsZVVwbG9hZGVyOyBcclxuXHJcbnB1YmxpYyBTZWxlY3RlZEZpbGVzOiBBcnJheTxJbWFnZU1lc3NhZ2U+O1xyXG5cclxuLy8gcHVibGljIGJhc2U2NDogc3RyaW5nO1xyXG5cclxucHJvdGVjdGVkIF9VUkw7XHJcbkBJbnB1dCgndXJsJylcclxuICBwcm90ZWN0ZWQgc2V0IFVSTCh2YWx1ZTogc3RyaW5nKXtcclxuICAgIHRoaXMuX1VSTCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbkBPdXRwdXQoJ2ZpbGVzLXRvLXVwbG9hZCcpXHJcbiAgcHVibGljIEZpbGVzVG9VcGxvYWQ6IEV2ZW50RW1pdHRlcjxBcnJheTxJbWFnZU1lc3NhZ2U+PjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IFxyXG4gICAgdGhpcy5TZWxlY3RlZEZpbGVzID0gbmV3IEFycmF5PEltYWdlTWVzc2FnZT4oKTtcclxuICAgIHRoaXMuRmlsZXNUb1VwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8SW1hZ2VNZXNzYWdlPj4oKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5GaWxlVXBsb2FkZXIgPSBuZXcgRmlsZVVwbG9hZGVyKHt1cmw6IHRoaXMuX1VSTH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQnVpbGQgdGhlIGltYWdlIG1lc3NhZ2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSBiYXNlNjQgYmFzZSA2NCBzdHJpbmcgZm9yIHRoZSBpbWFnZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGZpbGUgZmlsZSBkYXRhXHJcbiAgICovXHJcbiAgIHByb3RlY3RlZCBidWlsZEltYWdlTWVzc2FnZShiYXNlNjQ6IHN0cmluZywgZmlsZTogRmlsZSl7XHJcbiAgICAgY29uc3QgaGVhZGVyID0gJ2ZpbGVuYW1lPScgKyBmaWxlLm5hbWU7XHJcbiAgICAgY29uc3QgdGVtcElNOiBJbWFnZU1lc3NhZ2UgPSBuZXcgSW1hZ2VNZXNzYWdlKGJhc2U2NCwgaGVhZGVyKTtcclxuICAgICB0aGlzLlNlbGVjdGVkRmlsZXMucHVzaCh0ZW1wSU0pO1xyXG4gICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZCBmaWxlcycsIHRoaXMuU2VsZWN0ZWRGaWxlcyk7XHJcbiAgIH1cclxuXHJcblxyXG4gICAvKipcclxuICAgICogV2hlbiBhIGZpbGUgaXMgc2VsZWN0ZWRcclxuICAgICpcclxuICAgICogQHBhcmFtIGV2ZW50IG5lZWQgdG8gZmlndXJlIG91dCB3aGF0IHRoZSB0eXBlIGlzXHJcbiAgICAqL1xyXG4gIHB1YmxpYyBPbkZpbGVDaGFuZ2VkKGV2ZW50OiBhbnkpIHtcclxuICAgIGlmICh0aGlzLlNlbGVjdGVkRmlsZXMpIHtcclxuICAgICBmb3IgKGNvbnN0IGl0bSBvZiBldmVudC5xdWV1ZSkge1xyXG4gICAgICAgQ29udmVydFRvQmFzZTY0VXRpbC5HZXRCYXNlNjQoaXRtLmZpbGUucmF3RmlsZSlcclxuICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdDogQmFzZTY0TW9kZWwpID0+IHtcclxuICAgICAgICAgIHRoaXMuYnVpbGRJbWFnZU1lc3NhZ2UocmVzdWx0LkJsb2IsIHJlc3VsdC5GaWxlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=