/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ImageMessage } from '../models/image-message.model';
import { ConvertToBase64Util } from '@lcu/common';
export class FileUploaderComponent {
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
     * Build the image message
     *
     * @protected
     * @param {?} base64 base 64 string for the image
     *
     * @param {?} file file data
     * @return {?}
     */
    buildImageMessage(base64, file) {
        //  console.log("filename = ", file.file.name)
        /** @type {?} */
        const header = 'filename=' + file.file.name;
        /** @type {?} */
        const tempIM = new ImageMessage(base64, header);
        this.SelectedFiles.push(tempIM);
        //  console.log('selected files', this.SelectedFiles);
    }
    /**
     * When a file is selected
     *
     * @param {?} event need to figure out what the type is
     * @return {?}
     */
    OnFileChanged(event) {
        //  console.log("event.queue ", event.queue)
        this.SelectedFiles = [];
        ConvertToBase64Util.GetBase64(event.queue)
            .subscribe((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            for (const itm of result) {
                this.buildImageMessage(itm.Blob, itm.File);
            }
            console.log("Selected Files = ", this.SelectedFiles);
            this.FilesToUpload.emit(this.SelectedFiles);
        }));
    }
}
FileUploaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'lcu-file-uploader',
                template: "<input  style=\"display: none\" type=\"file\"  (change)=\"OnFileChanged(FileUploader)\" ng2FileSelect [uploader]=\"FileUploader\" multiple #fileInput/>\r\n<button mat-raised-button class=\"button\" (click)=\"fileInput.click()\">Select File(s)</button>\r\n\r\n<!-- <input (change)=\"onFileChanged($event)\"> -->\r\n<!-- <input type=\"file\" (change)=\"onUpload($event)\" #file />\r\n<button mat-raised-button class=\"button\" (click)=\"file.click()\">Select File</button> -->\r\n\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbG93Y29kZXVuaXQvbGN1LWZpbGUtdXBsb2FkZXItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQWUsbUJBQW1CLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFRL0QsTUFBTSxPQUFPLHFCQUFxQjtJQWtCaEM7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksS0FBSyxFQUFnQixDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7SUFDL0QsQ0FBQzs7Ozs7O0lBWEQsSUFDYyxHQUFHLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBVUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7Ozs7OztJQVNVLGlCQUFpQixDQUFDLE1BQWMsRUFBRSxJQUFTOzs7Y0FFN0MsTUFBTSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7O2NBQ3JDLE1BQU0sR0FBaUIsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUM3RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVqQyxzREFBc0Q7SUFDdkQsQ0FBQzs7Ozs7OztJQVFNLGFBQWEsQ0FBQyxLQUFVO1FBQzlCLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixtQkFBbUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUN0QyxTQUFTOzs7O1FBQ1IsQ0FBQyxNQUEwQixFQUFFLEVBQUU7WUFDN0IsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQ0gsQ0FBQztJQUNOLENBQUM7OztZQXBFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsOGVBQTZDOzthQUU5Qzs7Ozs7a0JBWUUsS0FBSyxTQUFDLEtBQUs7NEJBS1gsTUFBTSxTQUFDLGlCQUFpQjs7OztJQVp6Qiw2Q0FBa0M7O0lBRWxDLDhDQUEwQzs7SUFFMUMsdUNBQXNCOzs7OztJQUV0QixxQ0FBZTs7SUFNZiw4Q0FDd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRlciB9IGZyb20gJ25nMi1maWxlLXVwbG9hZC9uZzItZmlsZS11cGxvYWQnO1xyXG5pbXBvcnQgeyBJbWFnZU1lc3NhZ2UgfSBmcm9tICcuLi9tb2RlbHMvaW1hZ2UtbWVzc2FnZS5tb2RlbCc7XHJcbmltcG9ydCB7IEJhc2U2NE1vZGVsLCBDb252ZXJ0VG9CYXNlNjRVdGlsIH0gZnJvbSAnQGxjdS9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsY3UtZmlsZS11cGxvYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICBwdWJsaWMgRmlsZVVwbG9hZGVyOiBGaWxlVXBsb2FkZXI7XHJcblxyXG4gIHB1YmxpYyBTZWxlY3RlZEZpbGVzOiBBcnJheTxJbWFnZU1lc3NhZ2U+O1xyXG5cclxuICBwdWJsaWMgYmFzZTY0OiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCBfVVJMO1xyXG4gIEBJbnB1dCgndXJsJylcclxuICBwcm90ZWN0ZWQgc2V0IFVSTCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9VUkwgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoJ2ZpbGVzLXRvLXVwbG9hZCcpXHJcbiAgcHVibGljIEZpbGVzVG9VcGxvYWQ6IEV2ZW50RW1pdHRlcjxBcnJheTxJbWFnZU1lc3NhZ2U+PjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLlNlbGVjdGVkRmlsZXMgPSBuZXcgQXJyYXk8SW1hZ2VNZXNzYWdlPigpO1xyXG4gICAgdGhpcy5GaWxlc1RvVXBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxJbWFnZU1lc3NhZ2U+PigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLkZpbGVVcGxvYWRlciA9IG5ldyBGaWxlVXBsb2FkZXIoeyB1cmw6IHRoaXMuX1VSTCB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJ1aWxkIHRoZSBpbWFnZSBtZXNzYWdlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYmFzZTY0IGJhc2UgNjQgc3RyaW5nIGZvciB0aGUgaW1hZ2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSBmaWxlIGZpbGUgZGF0YVxyXG4gICAqL1xyXG4gICBwcm90ZWN0ZWQgYnVpbGRJbWFnZU1lc3NhZ2UoYmFzZTY0OiBzdHJpbmcsIGZpbGU6IGFueSl7XHJcbiAgICAvLyAgY29uc29sZS5sb2coXCJmaWxlbmFtZSA9IFwiLCBmaWxlLmZpbGUubmFtZSlcclxuICAgICBjb25zdCBoZWFkZXIgPSAnZmlsZW5hbWU9JyArIGZpbGUuZmlsZS5uYW1lO1xyXG4gICAgIGNvbnN0IHRlbXBJTTogSW1hZ2VNZXNzYWdlID0gbmV3IEltYWdlTWVzc2FnZShiYXNlNjQsIGhlYWRlcik7XHJcbiAgICAgdGhpcy5TZWxlY3RlZEZpbGVzLnB1c2godGVtcElNKTtcclxuXHJcbiAgICAvLyAgY29uc29sZS5sb2coJ3NlbGVjdGVkIGZpbGVzJywgdGhpcy5TZWxlY3RlZEZpbGVzKTtcclxuICAgfVxyXG5cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBXaGVuIGEgZmlsZSBpcyBzZWxlY3RlZFxyXG4gICAgKlxyXG4gICAgKiBAcGFyYW0gZXZlbnQgbmVlZCB0byBmaWd1cmUgb3V0IHdoYXQgdGhlIHR5cGUgaXNcclxuICAgICovXHJcbiAgIHB1YmxpYyBPbkZpbGVDaGFuZ2VkKGV2ZW50OiBhbnkpIHtcclxuICAgIC8vICBjb25zb2xlLmxvZyhcImV2ZW50LnF1ZXVlIFwiLCBldmVudC5xdWV1ZSlcclxuICAgIHRoaXMuU2VsZWN0ZWRGaWxlcyA9IFtdO1xyXG4gICAgQ29udmVydFRvQmFzZTY0VXRpbC5HZXRCYXNlNjQoZXZlbnQucXVldWUpXHJcbiAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAocmVzdWx0OiBBcnJheTxCYXNlNjRNb2RlbD4pID0+IHtcclxuICAgICAgICAgICBmb3IgKGNvbnN0IGl0bSBvZiByZXN1bHQpIHtcclxuICAgICAgICAgICAgdGhpcy5idWlsZEltYWdlTWVzc2FnZShpdG0uQmxvYiwgaXRtLkZpbGUpO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIEZpbGVzID0gXCIsIHRoaXMuU2VsZWN0ZWRGaWxlcyk7XHJcbiAgICAgICAgICAgdGhpcy5GaWxlc1RvVXBsb2FkLmVtaXQodGhpcy5TZWxlY3RlZEZpbGVzKTtcclxuICAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=