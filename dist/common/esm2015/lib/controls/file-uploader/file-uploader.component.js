/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
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
     * @param {?} event
     * @return {?}
     */
    onFileChanged(event) {
        console.log("event = ", event.queue);
        if (this.SelectedFiles) {
            for (let i = 0; i < event.queue.length; i++) {
                console.log("pushing: ", event.queue[i].file.rawFile);
                this.SelectedFiles.push(event.queue[i].file.rawFile);
            }
        }
        console.log("file uploaded = ", this.SelectedFiles);
        this.FilesToUpload.emit(this.SelectedFiles);
    }
}
FileUploaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'lcu-file-uploader',
                template: "<input  style=\"display: none\" type=\"file\"  (change)=\"onFileChanged(FileUploader)\" ng2FileSelect [uploader]=\"FileUploader\" multiple #fileInput/>\r\n<!-- <input (change)=\"onFileChanged($event)\"> -->\r\n<button mat-raised-button color=\"primary\" (click)=\"fileInput.click()\">Select File</button>\r\n",
                styles: [""]
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
    /**
     * @type {?}
     * @protected
     */
    FileUploaderComponent.prototype._URL;
    /** @type {?} */
    FileUploaderComponent.prototype.FilesToUpload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbG93Y29kZXVuaXQvbGN1LWZpbGUtdXBsb2FkZXItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBUS9ELE1BQU0sT0FBTyxxQkFBcUI7SUFnQmhDO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEtBQUssRUFBUSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7SUFYSCxJQUNnQixHQUFHLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBVUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBSztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3REO1NBQ0Y7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixnVUFBNkM7O2FBRTlDOzs7OztrQkFVQSxLQUFLLFNBQUMsS0FBSzs0QkFLWCxNQUFNLFNBQUMsaUJBQWlCOzs7O0lBVnpCLDZDQUFrQzs7SUFFbEMsOENBQWtDOzs7OztJQUVsQyxxQ0FBZTs7SUFNZiw4Q0FDa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRlciB9IGZyb20gJ25nMi1maWxlLXVwbG9hZC9uZzItZmlsZS11cGxvYWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsY3UtZmlsZS11cGxvYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxucHVibGljIEZpbGVVcGxvYWRlcjogRmlsZVVwbG9hZGVyOyBcclxuXHJcbnB1YmxpYyBTZWxlY3RlZEZpbGVzOiBBcnJheTxGaWxlPjtcclxuXHJcbnByb3RlY3RlZCBfVVJMO1xyXG5ASW5wdXQoJ3VybCcpXHJcbiAgcHJvdGVjdGVkIHNldCBVUkwodmFsdWU6IHN0cmluZyl7XHJcbiAgICB0aGlzLl9VUkwgPSB2YWx1ZTtcclxuICB9XHJcblxyXG5AT3V0cHV0KCdmaWxlcy10by11cGxvYWQnKVxyXG4gIHB1YmxpYyBGaWxlc1RvVXBsb2FkOiBFdmVudEVtaXR0ZXI8QXJyYXk8RmlsZT4+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICB0aGlzLlNlbGVjdGVkRmlsZXMgPSBuZXcgQXJyYXk8RmlsZT4oKTtcclxuICAgIHRoaXMuRmlsZXNUb1VwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8RmlsZT4+KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuRmlsZVVwbG9hZGVyID0gbmV3IEZpbGVVcGxvYWRlcih7dXJsOiB0aGlzLl9VUkx9KTtcclxuICB9XHJcblxyXG4gIG9uRmlsZUNoYW5nZWQoZXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZXZlbnQgPSBcIiwgZXZlbnQucXVldWUpO1xyXG4gICAgaWYgKHRoaXMuU2VsZWN0ZWRGaWxlcykge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LnF1ZXVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwdXNoaW5nOiBcIiwgZXZlbnQucXVldWVbaV0uZmlsZS5yYXdGaWxlKTtcclxuICAgICAgICB0aGlzLlNlbGVjdGVkRmlsZXMucHVzaChldmVudC5xdWV1ZVtpXS5maWxlLnJhd0ZpbGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcImZpbGUgdXBsb2FkZWQgPSBcIiwgdGhpcy5TZWxlY3RlZEZpbGVzKTtcclxuICAgIHRoaXMuRmlsZXNUb1VwbG9hZC5lbWl0KHRoaXMuU2VsZWN0ZWRGaWxlcyk7XHJcbiAgfVxyXG5cclxufVxyXG4gIl19