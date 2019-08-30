/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbG93Y29kZXVuaXQvbGN1LWZpbGUtdXBsb2FkZXItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUS9DLE1BQU0sT0FBTyxxQkFBcUI7SUFnQmhDO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEtBQUssRUFBUSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7SUFYSCxJQUNnQixHQUFHLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBVUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBSztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3REO1NBQ0Y7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixnVUFBNkM7O2FBRTlDOzs7OztrQkFVQSxLQUFLLFNBQUMsS0FBSzs0QkFLWCxNQUFNLFNBQUMsaUJBQWlCOzs7O0lBVnpCLDZDQUFrQzs7SUFFbEMsOENBQWtDOzs7OztJQUVsQyxxQ0FBZTs7SUFNZiw4Q0FDa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRlciB9IGZyb20gJ25nMi1maWxlLXVwbG9hZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xjdS1maWxlLXVwbG9hZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS11cGxvYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS11cGxvYWRlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG5wdWJsaWMgRmlsZVVwbG9hZGVyOiBGaWxlVXBsb2FkZXI7IFxyXG5cclxucHVibGljIFNlbGVjdGVkRmlsZXM6IEFycmF5PEZpbGU+O1xyXG5cclxucHJvdGVjdGVkIF9VUkw7XHJcbkBJbnB1dCgndXJsJylcclxuICBwcm90ZWN0ZWQgc2V0IFVSTCh2YWx1ZTogc3RyaW5nKXtcclxuICAgIHRoaXMuX1VSTCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbkBPdXRwdXQoJ2ZpbGVzLXRvLXVwbG9hZCcpXHJcbiAgcHVibGljIEZpbGVzVG9VcGxvYWQ6IEV2ZW50RW1pdHRlcjxBcnJheTxGaWxlPj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyBcclxuICAgIHRoaXMuU2VsZWN0ZWRGaWxlcyA9IG5ldyBBcnJheTxGaWxlPigpO1xyXG4gICAgdGhpcy5GaWxlc1RvVXBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxGaWxlPj4oKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5GaWxlVXBsb2FkZXIgPSBuZXcgRmlsZVVwbG9hZGVyKHt1cmw6IHRoaXMuX1VSTH0pO1xyXG4gIH1cclxuXHJcbiAgb25GaWxlQ2hhbmdlZChldmVudCkge1xyXG4gICAgY29uc29sZS5sb2coXCJldmVudCA9IFwiLCBldmVudC5xdWV1ZSk7XHJcbiAgICBpZiAodGhpcy5TZWxlY3RlZEZpbGVzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnQucXVldWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInB1c2hpbmc6IFwiLCBldmVudC5xdWV1ZVtpXS5maWxlLnJhd0ZpbGUpO1xyXG4gICAgICAgIHRoaXMuU2VsZWN0ZWRGaWxlcy5wdXNoKGV2ZW50LnF1ZXVlW2ldLmZpbGUucmF3RmlsZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwiZmlsZSB1cGxvYWRlZCA9IFwiLCB0aGlzLlNlbGVjdGVkRmlsZXMpO1xyXG4gICAgdGhpcy5GaWxlc1RvVXBsb2FkLmVtaXQodGhpcy5TZWxlY3RlZEZpbGVzKTtcclxuICB9XHJcblxyXG59XHJcbiAiXX0=