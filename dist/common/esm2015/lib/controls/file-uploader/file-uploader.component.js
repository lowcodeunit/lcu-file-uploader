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
        /** @type {?} */
        const header = 'filename=' + file.name;
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
        if (this.SelectedFiles) {
            for (const itm of event.queue) {
                ConvertToBase64Util.GetBase64(itm.file.rawFile)
                    .subscribe((/**
                 * @param {?} result
                 * @return {?}
                 */
                (result) => {
                    this.buildImageMessage(result.Blob, result.File);
                }), (/**
                 * @param {?} err
                 * @return {?}
                 */
                err => console.log('error')), (/**
                 * @return {?}
                 */
                () => {
                    console.log('complete');
                    this.FilesToUpload.emit(this.SelectedFiles);
                }));
            }
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbG93Y29kZXVuaXQvbGN1LWZpbGUtdXBsb2FkZXItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQWUsbUJBQW1CLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFRL0QsTUFBTSxPQUFPLHFCQUFxQjtJQWtCaEM7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksS0FBSyxFQUFnQixDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7SUFDL0QsQ0FBQzs7Ozs7O0lBWEQsSUFDYyxHQUFHLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBVUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7Ozs7OztJQVNVLGlCQUFpQixDQUFDLE1BQWMsRUFBRSxJQUFVOztjQUM5QyxNQUFNLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJOztjQUNoQyxNQUFNLEdBQWlCLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDN0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFakMsc0RBQXNEO0lBQ3ZELENBQUM7Ozs7Ozs7SUFRTyxhQUFhLENBQUMsS0FBVTtRQUM3QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsS0FBSyxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUM3QixtQkFBbUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7cUJBQzlDLFNBQVM7Ozs7Z0JBQ1IsQ0FBQyxNQUFtQixFQUFFLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakQsQ0FBQzs7OztnQkFDRCxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDOzs7Z0JBQzNCLEdBQUcsRUFBRTtvQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2hELENBQUMsRUFBQyxDQUFDO2FBQ0o7U0FDRjtJQUNILENBQUM7OztZQXJFSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsOGVBQTZDOzthQUU5Qzs7Ozs7a0JBWUUsS0FBSyxTQUFDLEtBQUs7NEJBS1gsTUFBTSxTQUFDLGlCQUFpQjs7OztJQVp6Qiw2Q0FBa0M7O0lBRWxDLDhDQUEwQzs7SUFFMUMsdUNBQXNCOzs7OztJQUV0QixxQ0FBZTs7SUFNZiw4Q0FDd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRlciB9IGZyb20gJ25nMi1maWxlLXVwbG9hZC9uZzItZmlsZS11cGxvYWQnO1xyXG5pbXBvcnQgeyBJbWFnZU1lc3NhZ2UgfSBmcm9tICcuLi9tb2RlbHMvaW1hZ2UtbWVzc2FnZS5tb2RlbCc7XHJcbmltcG9ydCB7IEJhc2U2NE1vZGVsLCBDb252ZXJ0VG9CYXNlNjRVdGlsIH0gZnJvbSAnQGxjdS9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsY3UtZmlsZS11cGxvYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICBwdWJsaWMgRmlsZVVwbG9hZGVyOiBGaWxlVXBsb2FkZXI7XHJcblxyXG4gIHB1YmxpYyBTZWxlY3RlZEZpbGVzOiBBcnJheTxJbWFnZU1lc3NhZ2U+O1xyXG5cclxuICBwdWJsaWMgYmFzZTY0OiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCBfVVJMO1xyXG4gIEBJbnB1dCgndXJsJylcclxuICBwcm90ZWN0ZWQgc2V0IFVSTCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9VUkwgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoJ2ZpbGVzLXRvLXVwbG9hZCcpXHJcbiAgcHVibGljIEZpbGVzVG9VcGxvYWQ6IEV2ZW50RW1pdHRlcjxBcnJheTxJbWFnZU1lc3NhZ2U+PjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLlNlbGVjdGVkRmlsZXMgPSBuZXcgQXJyYXk8SW1hZ2VNZXNzYWdlPigpO1xyXG4gICAgdGhpcy5GaWxlc1RvVXBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxJbWFnZU1lc3NhZ2U+PigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLkZpbGVVcGxvYWRlciA9IG5ldyBGaWxlVXBsb2FkZXIoeyB1cmw6IHRoaXMuX1VSTCB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJ1aWxkIHRoZSBpbWFnZSBtZXNzYWdlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYmFzZTY0IGJhc2UgNjQgc3RyaW5nIGZvciB0aGUgaW1hZ2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSBmaWxlIGZpbGUgZGF0YVxyXG4gICAqL1xyXG4gICBwcm90ZWN0ZWQgYnVpbGRJbWFnZU1lc3NhZ2UoYmFzZTY0OiBzdHJpbmcsIGZpbGU6IEZpbGUpe1xyXG4gICAgIGNvbnN0IGhlYWRlciA9ICdmaWxlbmFtZT0nICsgZmlsZS5uYW1lO1xyXG4gICAgIGNvbnN0IHRlbXBJTTogSW1hZ2VNZXNzYWdlID0gbmV3IEltYWdlTWVzc2FnZShiYXNlNjQsIGhlYWRlcik7XHJcbiAgICAgdGhpcy5TZWxlY3RlZEZpbGVzLnB1c2godGVtcElNKTtcclxuXHJcbiAgICAvLyAgY29uc29sZS5sb2coJ3NlbGVjdGVkIGZpbGVzJywgdGhpcy5TZWxlY3RlZEZpbGVzKTtcclxuICAgfVxyXG5cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBXaGVuIGEgZmlsZSBpcyBzZWxlY3RlZFxyXG4gICAgKlxyXG4gICAgKiBAcGFyYW0gZXZlbnQgbmVlZCB0byBmaWd1cmUgb3V0IHdoYXQgdGhlIHR5cGUgaXNcclxuICAgICovXHJcbiAgICBwdWJsaWMgT25GaWxlQ2hhbmdlZChldmVudDogYW55KSB7XHJcbiAgICAgIGlmICh0aGlzLlNlbGVjdGVkRmlsZXMpIHtcclxuICAgICAgIGZvciAoY29uc3QgaXRtIG9mIGV2ZW50LnF1ZXVlKSB7XHJcbiAgICAgICAgIENvbnZlcnRUb0Jhc2U2NFV0aWwuR2V0QmFzZTY0KGl0bS5maWxlLnJhd0ZpbGUpXHJcbiAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgKHJlc3VsdDogQmFzZTY0TW9kZWwpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5idWlsZEltYWdlTWVzc2FnZShyZXN1bHQuQmxvYiwgcmVzdWx0LkZpbGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coJ2Vycm9yJyksXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29tcGxldGUnKTtcclxuICAgICAgICAgICAgICB0aGlzLkZpbGVzVG9VcGxvYWQuZW1pdCh0aGlzLlNlbGVjdGVkRmlsZXMpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19