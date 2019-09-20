/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ImageMessage } from '../models/image-message.model';
import { ConvertToBase64Util } from '@lcu/common';
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
                    }), (/**
                     * @param {?} err
                     * @return {?}
                     */
                    function (err) { return console.log('error'); }), (/**
                     * @return {?}
                     */
                    function () {
                        console.log('complete');
                        _this.FilesToUpload.emit(_this.SelectedFiles);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbG93Y29kZXVuaXQvbGN1LWZpbGUtdXBsb2FkZXItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFlLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRS9EO0lBd0JFO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEtBQUssRUFBZ0IsQ0FBQztRQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO0lBQy9ELENBQUM7SUFYRCxzQkFDYyxzQ0FBRzs7Ozs7O1FBRGpCLFVBQ2tCLEtBQWE7WUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7Ozs7SUFVRCx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7Ozs7SUFDUSxpREFBaUI7Ozs7Ozs7OztJQUEzQixVQUE0QixNQUFjLEVBQUUsSUFBVTs7WUFDOUMsTUFBTSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSTs7WUFDaEMsTUFBTSxHQUFpQixJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQzdELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWpDLHNEQUFzRDtJQUN2RCxDQUFDO0lBR0Q7Ozs7T0FJRzs7Ozs7OztJQUNLLDZDQUFhOzs7Ozs7SUFBcEIsVUFBcUIsS0FBVTtRQUEvQixpQkFlQzs7UUFkQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7O2dCQUN2QixLQUFrQixJQUFBLEtBQUEsaUJBQUEsS0FBSyxDQUFDLEtBQUssQ0FBQSxnQkFBQSw0QkFBRTtvQkFBMUIsSUFBTSxHQUFHLFdBQUE7b0JBQ1osbUJBQW1CLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3lCQUM5QyxTQUFTOzs7O29CQUNSLFVBQUMsTUFBbUI7d0JBQ25CLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDakQsQ0FBQzs7OztvQkFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQXBCLENBQW9COzs7b0JBQzNCO3dCQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ3hCLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDaEQsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7Ozs7Ozs7OztTQUNGO0lBQ0gsQ0FBQzs7Z0JBckVKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qiw4ZUFBNkM7O2lCQUU5Qzs7Ozs7c0JBWUUsS0FBSyxTQUFDLEtBQUs7Z0NBS1gsTUFBTSxTQUFDLGlCQUFpQjs7SUFpRDNCLDRCQUFDO0NBQUEsQUF0RUQsSUFzRUM7U0FoRVkscUJBQXFCOzs7SUFHaEMsNkNBQWtDOztJQUVsQyw4Q0FBMEM7O0lBRTFDLHVDQUFzQjs7Ozs7SUFFdEIscUNBQWU7O0lBTWYsOENBQ3dEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkZXIgfSBmcm9tICduZzItZmlsZS11cGxvYWQvbmcyLWZpbGUtdXBsb2FkJztcclxuaW1wb3J0IHsgSW1hZ2VNZXNzYWdlIH0gZnJvbSAnLi4vbW9kZWxzL2ltYWdlLW1lc3NhZ2UubW9kZWwnO1xyXG5pbXBvcnQgeyBCYXNlNjRNb2RlbCwgQ29udmVydFRvQmFzZTY0VXRpbCB9IGZyb20gJ0BsY3UvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGN1LWZpbGUtdXBsb2FkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLXVwbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9maWxlLXVwbG9hZGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlVXBsb2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgcHVibGljIEZpbGVVcGxvYWRlcjogRmlsZVVwbG9hZGVyO1xyXG5cclxuICBwdWJsaWMgU2VsZWN0ZWRGaWxlczogQXJyYXk8SW1hZ2VNZXNzYWdlPjtcclxuXHJcbiAgcHVibGljIGJhc2U2NDogc3RyaW5nO1xyXG5cclxuICBwcm90ZWN0ZWQgX1VSTDtcclxuICBASW5wdXQoJ3VybCcpXHJcbiAgcHJvdGVjdGVkIHNldCBVUkwodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fVVJMID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCdmaWxlcy10by11cGxvYWQnKVxyXG4gIHB1YmxpYyBGaWxlc1RvVXBsb2FkOiBFdmVudEVtaXR0ZXI8QXJyYXk8SW1hZ2VNZXNzYWdlPj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5TZWxlY3RlZEZpbGVzID0gbmV3IEFycmF5PEltYWdlTWVzc2FnZT4oKTtcclxuICAgIHRoaXMuRmlsZXNUb1VwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8SW1hZ2VNZXNzYWdlPj4oKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5GaWxlVXBsb2FkZXIgPSBuZXcgRmlsZVVwbG9hZGVyKHsgdXJsOiB0aGlzLl9VUkwgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCdWlsZCB0aGUgaW1hZ2UgbWVzc2FnZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGJhc2U2NCBiYXNlIDY0IHN0cmluZyBmb3IgdGhlIGltYWdlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZmlsZSBmaWxlIGRhdGFcclxuICAgKi9cclxuICAgcHJvdGVjdGVkIGJ1aWxkSW1hZ2VNZXNzYWdlKGJhc2U2NDogc3RyaW5nLCBmaWxlOiBGaWxlKXtcclxuICAgICBjb25zdCBoZWFkZXIgPSAnZmlsZW5hbWU9JyArIGZpbGUubmFtZTtcclxuICAgICBjb25zdCB0ZW1wSU06IEltYWdlTWVzc2FnZSA9IG5ldyBJbWFnZU1lc3NhZ2UoYmFzZTY0LCBoZWFkZXIpO1xyXG4gICAgIHRoaXMuU2VsZWN0ZWRGaWxlcy5wdXNoKHRlbXBJTSk7XHJcblxyXG4gICAgLy8gIGNvbnNvbGUubG9nKCdzZWxlY3RlZCBmaWxlcycsIHRoaXMuU2VsZWN0ZWRGaWxlcyk7XHJcbiAgIH1cclxuXHJcblxyXG4gICAvKipcclxuICAgICogV2hlbiBhIGZpbGUgaXMgc2VsZWN0ZWRcclxuICAgICpcclxuICAgICogQHBhcmFtIGV2ZW50IG5lZWQgdG8gZmlndXJlIG91dCB3aGF0IHRoZSB0eXBlIGlzXHJcbiAgICAqL1xyXG4gICAgcHVibGljIE9uRmlsZUNoYW5nZWQoZXZlbnQ6IGFueSkge1xyXG4gICAgICBpZiAodGhpcy5TZWxlY3RlZEZpbGVzKSB7XHJcbiAgICAgICBmb3IgKGNvbnN0IGl0bSBvZiBldmVudC5xdWV1ZSkge1xyXG4gICAgICAgICBDb252ZXJ0VG9CYXNlNjRVdGlsLkdldEJhc2U2NChpdG0uZmlsZS5yYXdGaWxlKVxyXG4gICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgIChyZXN1bHQ6IEJhc2U2NE1vZGVsKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRJbWFnZU1lc3NhZ2UocmVzdWx0LkJsb2IsIHJlc3VsdC5GaWxlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKCdlcnJvcicpLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbXBsZXRlJyk7XHJcbiAgICAgICAgICAgICAgdGhpcy5GaWxlc1RvVXBsb2FkLmVtaXQodGhpcy5TZWxlY3RlZEZpbGVzKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==