/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ImageMessage } from '../models/image-message.model';
import { ConvertToBase64Util } from '@lcu-ide/common';
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
        console.log('selected files', this.SelectedFiles);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbG93Y29kZXVuaXQvbGN1LWZpbGUtdXBsb2FkZXItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQWUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVFuRSxNQUFNLE9BQU8scUJBQXFCO0lBa0JoQztRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxLQUFLLEVBQWdCLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBdUIsQ0FBQztJQUMvRCxDQUFDOzs7Ozs7SUFYRCxJQUNjLEdBQUcsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFVRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7Ozs7O0lBU1UsaUJBQWlCLENBQUMsTUFBYyxFQUFFLElBQVU7O2NBQzlDLE1BQU0sR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUk7O2NBQ2hDLE1BQU0sR0FBaUIsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUM3RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7Ozs7O0lBUUssYUFBYSxDQUFDLEtBQVU7UUFDN0IsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLEtBQUssTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDN0IsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3FCQUM5QyxTQUFTOzs7O2dCQUFDLENBQUMsTUFBbUIsRUFBRSxFQUFFO29CQUNoQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25ELENBQUMsRUFBQyxDQUFDO2FBQ0o7U0FDRjtJQUNILENBQUM7OztZQTlERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsOGVBQTZDOzthQUU5Qzs7Ozs7a0JBWUUsS0FBSyxTQUFDLEtBQUs7NEJBS1gsTUFBTSxTQUFDLGlCQUFpQjs7OztJQVp6Qiw2Q0FBa0M7O0lBRWxDLDhDQUEwQzs7SUFFMUMsdUNBQXNCOzs7OztJQUV0QixxQ0FBZTs7SUFNZiw4Q0FDd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRlciB9IGZyb20gJ25nMi1maWxlLXVwbG9hZC9uZzItZmlsZS11cGxvYWQnO1xyXG5pbXBvcnQgeyBJbWFnZU1lc3NhZ2UgfSBmcm9tICcuLi9tb2RlbHMvaW1hZ2UtbWVzc2FnZS5tb2RlbCc7XHJcbmltcG9ydCB7IEJhc2U2NE1vZGVsLCBDb252ZXJ0VG9CYXNlNjRVdGlsIH0gZnJvbSAnQGxjdS1pZGUvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGN1LWZpbGUtdXBsb2FkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLXVwbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9maWxlLXVwbG9hZGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlVXBsb2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgcHVibGljIEZpbGVVcGxvYWRlcjogRmlsZVVwbG9hZGVyO1xyXG5cclxuICBwdWJsaWMgU2VsZWN0ZWRGaWxlczogQXJyYXk8SW1hZ2VNZXNzYWdlPjtcclxuXHJcbiAgcHVibGljIGJhc2U2NDogc3RyaW5nO1xyXG5cclxuICBwcm90ZWN0ZWQgX1VSTDtcclxuICBASW5wdXQoJ3VybCcpXHJcbiAgcHJvdGVjdGVkIHNldCBVUkwodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fVVJMID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCdmaWxlcy10by11cGxvYWQnKVxyXG4gIHB1YmxpYyBGaWxlc1RvVXBsb2FkOiBFdmVudEVtaXR0ZXI8QXJyYXk8SW1hZ2VNZXNzYWdlPj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5TZWxlY3RlZEZpbGVzID0gbmV3IEFycmF5PEltYWdlTWVzc2FnZT4oKTtcclxuICAgIHRoaXMuRmlsZXNUb1VwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8SW1hZ2VNZXNzYWdlPj4oKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5GaWxlVXBsb2FkZXIgPSBuZXcgRmlsZVVwbG9hZGVyKHsgdXJsOiB0aGlzLl9VUkwgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCdWlsZCB0aGUgaW1hZ2UgbWVzc2FnZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGJhc2U2NCBiYXNlIDY0IHN0cmluZyBmb3IgdGhlIGltYWdlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZmlsZSBmaWxlIGRhdGFcclxuICAgKi9cclxuICAgcHJvdGVjdGVkIGJ1aWxkSW1hZ2VNZXNzYWdlKGJhc2U2NDogc3RyaW5nLCBmaWxlOiBGaWxlKXtcclxuICAgICBjb25zdCBoZWFkZXIgPSAnZmlsZW5hbWU9JyArIGZpbGUubmFtZTtcclxuICAgICBjb25zdCB0ZW1wSU06IEltYWdlTWVzc2FnZSA9IG5ldyBJbWFnZU1lc3NhZ2UoYmFzZTY0LCBoZWFkZXIpO1xyXG4gICAgIHRoaXMuU2VsZWN0ZWRGaWxlcy5wdXNoKHRlbXBJTSk7XHJcbiAgICAgY29uc29sZS5sb2coJ3NlbGVjdGVkIGZpbGVzJywgdGhpcy5TZWxlY3RlZEZpbGVzKTtcclxuICAgfVxyXG5cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBXaGVuIGEgZmlsZSBpcyBzZWxlY3RlZFxyXG4gICAgKlxyXG4gICAgKiBAcGFyYW0gZXZlbnQgbmVlZCB0byBmaWd1cmUgb3V0IHdoYXQgdGhlIHR5cGUgaXNcclxuICAgICovXHJcbiAgcHVibGljIE9uRmlsZUNoYW5nZWQoZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKHRoaXMuU2VsZWN0ZWRGaWxlcykge1xyXG4gICAgIGZvciAoY29uc3QgaXRtIG9mIGV2ZW50LnF1ZXVlKSB7XHJcbiAgICAgICBDb252ZXJ0VG9CYXNlNjRVdGlsLkdldEJhc2U2NChpdG0uZmlsZS5yYXdGaWxlKVxyXG4gICAgICAgLnN1YnNjcmliZSgocmVzdWx0OiBCYXNlNjRNb2RlbCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5idWlsZEltYWdlTWVzc2FnZShyZXN1bHQuQmxvYiwgcmVzdWx0LkZpbGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==