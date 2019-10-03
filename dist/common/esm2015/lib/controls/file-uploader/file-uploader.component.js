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
            //  console.log("Selected Files = ", this.SelectedFiles);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbG93Y29kZXVuaXQvbGN1LWZpbGUtdXBsb2FkZXItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQWUsbUJBQW1CLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFRL0QsTUFBTSxPQUFPLHFCQUFxQjtJQWtCaEM7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksS0FBSyxFQUFnQixDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7SUFDL0QsQ0FBQzs7Ozs7O0lBWEQsSUFDYyxHQUFHLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBVUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7Ozs7OztJQVNVLGlCQUFpQixDQUFDLE1BQWMsRUFBRSxJQUFTOzs7Y0FFN0MsTUFBTSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7O2NBQ3JDLE1BQU0sR0FBaUIsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUM3RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVqQyxzREFBc0Q7SUFDdkQsQ0FBQzs7Ozs7OztJQVFNLGFBQWEsQ0FBQyxLQUFVO1FBQzlCLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixtQkFBbUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUN0QyxTQUFTOzs7O1FBQ1IsQ0FBQyxNQUEwQixFQUFFLEVBQUU7WUFDN0IsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQztZQUNGLHlEQUF5RDtZQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxFQUNILENBQUM7SUFDTixDQUFDOzs7WUFwRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLDhlQUE2Qzs7YUFFOUM7Ozs7O2tCQVlFLEtBQUssU0FBQyxLQUFLOzRCQUtYLE1BQU0sU0FBQyxpQkFBaUI7Ozs7SUFaekIsNkNBQWtDOztJQUVsQyw4Q0FBMEM7O0lBRTFDLHVDQUFzQjs7Ozs7SUFFdEIscUNBQWU7O0lBTWYsOENBQ3dEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkZXIgfSBmcm9tICduZzItZmlsZS11cGxvYWQvbmcyLWZpbGUtdXBsb2FkJztcclxuaW1wb3J0IHsgSW1hZ2VNZXNzYWdlIH0gZnJvbSAnLi4vbW9kZWxzL2ltYWdlLW1lc3NhZ2UubW9kZWwnO1xyXG5pbXBvcnQgeyBCYXNlNjRNb2RlbCwgQ29udmVydFRvQmFzZTY0VXRpbCB9IGZyb20gJ0BsY3UvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGN1LWZpbGUtdXBsb2FkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLXVwbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9maWxlLXVwbG9hZGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlVXBsb2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgcHVibGljIEZpbGVVcGxvYWRlcjogRmlsZVVwbG9hZGVyO1xyXG5cclxuICBwdWJsaWMgU2VsZWN0ZWRGaWxlczogQXJyYXk8SW1hZ2VNZXNzYWdlPjtcclxuXHJcbiAgcHVibGljIGJhc2U2NDogc3RyaW5nO1xyXG5cclxuICBwcm90ZWN0ZWQgX1VSTDtcclxuICBASW5wdXQoJ3VybCcpXHJcbiAgcHJvdGVjdGVkIHNldCBVUkwodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fVVJMID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCdmaWxlcy10by11cGxvYWQnKVxyXG4gIHB1YmxpYyBGaWxlc1RvVXBsb2FkOiBFdmVudEVtaXR0ZXI8QXJyYXk8SW1hZ2VNZXNzYWdlPj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5TZWxlY3RlZEZpbGVzID0gbmV3IEFycmF5PEltYWdlTWVzc2FnZT4oKTtcclxuICAgIHRoaXMuRmlsZXNUb1VwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8SW1hZ2VNZXNzYWdlPj4oKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5GaWxlVXBsb2FkZXIgPSBuZXcgRmlsZVVwbG9hZGVyKHsgdXJsOiB0aGlzLl9VUkwgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCdWlsZCB0aGUgaW1hZ2UgbWVzc2FnZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGJhc2U2NCBiYXNlIDY0IHN0cmluZyBmb3IgdGhlIGltYWdlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZmlsZSBmaWxlIGRhdGFcclxuICAgKi9cclxuICAgcHJvdGVjdGVkIGJ1aWxkSW1hZ2VNZXNzYWdlKGJhc2U2NDogc3RyaW5nLCBmaWxlOiBhbnkpe1xyXG4gICAgLy8gIGNvbnNvbGUubG9nKFwiZmlsZW5hbWUgPSBcIiwgZmlsZS5maWxlLm5hbWUpXHJcbiAgICAgY29uc3QgaGVhZGVyID0gJ2ZpbGVuYW1lPScgKyBmaWxlLmZpbGUubmFtZTtcclxuICAgICBjb25zdCB0ZW1wSU06IEltYWdlTWVzc2FnZSA9IG5ldyBJbWFnZU1lc3NhZ2UoYmFzZTY0LCBoZWFkZXIpO1xyXG4gICAgIHRoaXMuU2VsZWN0ZWRGaWxlcy5wdXNoKHRlbXBJTSk7XHJcblxyXG4gICAgLy8gIGNvbnNvbGUubG9nKCdzZWxlY3RlZCBmaWxlcycsIHRoaXMuU2VsZWN0ZWRGaWxlcyk7XHJcbiAgIH1cclxuXHJcblxyXG4gICAvKipcclxuICAgICogV2hlbiBhIGZpbGUgaXMgc2VsZWN0ZWRcclxuICAgICpcclxuICAgICogQHBhcmFtIGV2ZW50IG5lZWQgdG8gZmlndXJlIG91dCB3aGF0IHRoZSB0eXBlIGlzXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgT25GaWxlQ2hhbmdlZChldmVudDogYW55KSB7XHJcbiAgICAvLyAgY29uc29sZS5sb2coXCJldmVudC5xdWV1ZSBcIiwgZXZlbnQucXVldWUpXHJcbiAgICB0aGlzLlNlbGVjdGVkRmlsZXMgPSBbXTtcclxuICAgIENvbnZlcnRUb0Jhc2U2NFV0aWwuR2V0QmFzZTY0KGV2ZW50LnF1ZXVlKVxyXG4gICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgKHJlc3VsdDogQXJyYXk8QmFzZTY0TW9kZWw+KSA9PiB7XHJcbiAgICAgICAgICAgZm9yIChjb25zdCBpdG0gb2YgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRJbWFnZU1lc3NhZ2UoaXRtLkJsb2IsIGl0bS5GaWxlKTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJTZWxlY3RlZCBGaWxlcyA9IFwiLCB0aGlzLlNlbGVjdGVkRmlsZXMpO1xyXG4gICAgICAgICAgIHRoaXMuRmlsZXNUb1VwbG9hZC5lbWl0KHRoaXMuU2VsZWN0ZWRGaWxlcyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuIl19