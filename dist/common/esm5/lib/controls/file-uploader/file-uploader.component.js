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
        //  console.log("event.queue ", event.queue)
        this.SelectedFiles = [];
        ConvertToBase64Util.GetBase64(event.queue)
            .subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            var e_1, _a;
            try {
                for (var result_1 = tslib_1.__values(result), result_1_1 = result_1.next(); !result_1_1.done; result_1_1 = result_1.next()) {
                    var itm = result_1_1.value;
                    _this.buildImageMessage(itm.Blob, itm.File);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (result_1_1 && !result_1_1.done && (_a = result_1.return)) _a.call(result_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            //  console.log("Selected Files = ", this.SelectedFiles);
            _this.FilesToUpload.emit(_this.SelectedFiles);
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbG93Y29kZXVuaXQvbGN1LWZpbGUtdXBsb2FkZXItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFlLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRS9EO0lBd0JFO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEtBQUssRUFBZ0IsQ0FBQztRQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO0lBQy9ELENBQUM7SUFYRCxzQkFDYyxzQ0FBRzs7Ozs7O1FBRGpCLFVBQ2tCLEtBQWE7WUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7Ozs7SUFVRCx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7Ozs7SUFDUSxpREFBaUI7Ozs7Ozs7OztJQUEzQixVQUE0QixNQUFjLEVBQUUsSUFBVTs7WUFDOUMsTUFBTSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSTs7WUFDaEMsTUFBTSxHQUFpQixJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQzdELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWpDLHNEQUFzRDtJQUN2RCxDQUFDO0lBR0Q7Ozs7T0FJRzs7Ozs7OztJQUNJLDZDQUFhOzs7Ozs7SUFBcEIsVUFBcUIsS0FBVTtRQUEvQixpQkFhQTtRQVpDLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixtQkFBbUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUN0QyxTQUFTOzs7O1FBQ1IsVUFBQyxNQUEwQjs7O2dCQUN6QixLQUFrQixJQUFBLFdBQUEsaUJBQUEsTUFBTSxDQUFBLDhCQUFBLGtEQUFFO29CQUFyQixJQUFNLEdBQUcsbUJBQUE7b0JBQ2IsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUMzQzs7Ozs7Ozs7O1lBQ0YseURBQXlEO1lBQ3hELEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQ0gsQ0FBQztJQUNOLENBQUM7O2dCQW5FRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsOGVBQTZDOztpQkFFOUM7Ozs7O3NCQVlFLEtBQUssU0FBQyxLQUFLO2dDQUtYLE1BQU0sU0FBQyxpQkFBaUI7O0lBK0MzQiw0QkFBQztDQUFBLEFBcEVELElBb0VDO1NBOURZLHFCQUFxQjs7O0lBR2hDLDZDQUFrQzs7SUFFbEMsOENBQTBDOztJQUUxQyx1Q0FBc0I7Ozs7O0lBRXRCLHFDQUFlOztJQU1mLDhDQUN3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZGVyIH0gZnJvbSAnbmcyLWZpbGUtdXBsb2FkL25nMi1maWxlLXVwbG9hZCc7XHJcbmltcG9ydCB7IEltYWdlTWVzc2FnZSB9IGZyb20gJy4uL21vZGVscy9pbWFnZS1tZXNzYWdlLm1vZGVsJztcclxuaW1wb3J0IHsgQmFzZTY0TW9kZWwsIENvbnZlcnRUb0Jhc2U2NFV0aWwgfSBmcm9tICdAbGN1L2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xjdS1maWxlLXVwbG9hZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS11cGxvYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS11cGxvYWRlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG4gIHB1YmxpYyBGaWxlVXBsb2FkZXI6IEZpbGVVcGxvYWRlcjtcclxuXHJcbiAgcHVibGljIFNlbGVjdGVkRmlsZXM6IEFycmF5PEltYWdlTWVzc2FnZT47XHJcblxyXG4gIHB1YmxpYyBiYXNlNjQ6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIF9VUkw7XHJcbiAgQElucHV0KCd1cmwnKVxyXG4gIHByb3RlY3RlZCBzZXQgVVJMKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX1VSTCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgnZmlsZXMtdG8tdXBsb2FkJylcclxuICBwdWJsaWMgRmlsZXNUb1VwbG9hZDogRXZlbnRFbWl0dGVyPEFycmF5PEltYWdlTWVzc2FnZT4+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuU2VsZWN0ZWRGaWxlcyA9IG5ldyBBcnJheTxJbWFnZU1lc3NhZ2U+KCk7XHJcbiAgICB0aGlzLkZpbGVzVG9VcGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PEltYWdlTWVzc2FnZT4+KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuRmlsZVVwbG9hZGVyID0gbmV3IEZpbGVVcGxvYWRlcih7IHVybDogdGhpcy5fVVJMIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQnVpbGQgdGhlIGltYWdlIG1lc3NhZ2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSBiYXNlNjQgYmFzZSA2NCBzdHJpbmcgZm9yIHRoZSBpbWFnZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGZpbGUgZmlsZSBkYXRhXHJcbiAgICovXHJcbiAgIHByb3RlY3RlZCBidWlsZEltYWdlTWVzc2FnZShiYXNlNjQ6IHN0cmluZywgZmlsZTogRmlsZSl7XHJcbiAgICAgY29uc3QgaGVhZGVyID0gJ2ZpbGVuYW1lPScgKyBmaWxlLm5hbWU7XHJcbiAgICAgY29uc3QgdGVtcElNOiBJbWFnZU1lc3NhZ2UgPSBuZXcgSW1hZ2VNZXNzYWdlKGJhc2U2NCwgaGVhZGVyKTtcclxuICAgICB0aGlzLlNlbGVjdGVkRmlsZXMucHVzaCh0ZW1wSU0pO1xyXG5cclxuICAgIC8vICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgZmlsZXMnLCB0aGlzLlNlbGVjdGVkRmlsZXMpO1xyXG4gICB9XHJcblxyXG5cclxuICAgLyoqXHJcbiAgICAqIFdoZW4gYSBmaWxlIGlzIHNlbGVjdGVkXHJcbiAgICAqXHJcbiAgICAqIEBwYXJhbSBldmVudCBuZWVkIHRvIGZpZ3VyZSBvdXQgd2hhdCB0aGUgdHlwZSBpc1xyXG4gICAgKi9cclxuICAgcHVibGljIE9uRmlsZUNoYW5nZWQoZXZlbnQ6IGFueSkge1xyXG4gICAgLy8gIGNvbnNvbGUubG9nKFwiZXZlbnQucXVldWUgXCIsIGV2ZW50LnF1ZXVlKVxyXG4gICAgdGhpcy5TZWxlY3RlZEZpbGVzID0gW107XHJcbiAgICBDb252ZXJ0VG9CYXNlNjRVdGlsLkdldEJhc2U2NChldmVudC5xdWV1ZSlcclxuICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgIChyZXN1bHQ6IEFycmF5PEJhc2U2NE1vZGVsPikgPT4ge1xyXG4gICAgICAgICAgIGZvciAoY29uc3QgaXRtIG9mIHJlc3VsdCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkSW1hZ2VNZXNzYWdlKGl0bS5CbG9iLCBpdG0uRmlsZSk7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgRmlsZXMgPSBcIiwgdGhpcy5TZWxlY3RlZEZpbGVzKTtcclxuICAgICAgICAgICB0aGlzLkZpbGVzVG9VcGxvYWQuZW1pdCh0aGlzLlNlbGVjdGVkRmlsZXMpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==