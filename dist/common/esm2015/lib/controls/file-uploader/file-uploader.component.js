/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ImageMessage } from '../models/image-message.model';
// import { ConvertToBase64Util } from '@lcu-ide/common';
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
        if (this.SelectedFiles) {
            for (let i = 0; i < event.queue.length; i++) {
                this.getBase64(event.queue[i].file.rawFile);
                // console.log("Object = ",ConvertToBase64Util.GetBase64(event.queue[i].file.rawFile));     
            }
        }
        console.log("file(s) uploaded = ", this.SelectedFiles);
        this.FilesToUpload.emit(this.SelectedFiles);
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    getBase64(event) {
        /** @type {?} */
        let file = event;
        /** @type {?} */
        let me = this;
        /** @type {?} */
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (/**
         * @return {?}
         */
        () => {
            //console.log(reader.result);
            me.base64 = reader.result.toString();
            me.buildImageMessage(reader.result.toString(), file);
        });
        reader.onerror = (/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            console.log('Error: ', error);
        });
    }
    /**
     * @protected
     * @param {?} base64
     * @param {?} file
     * @return {?}
     */
    buildImageMessage(base64, file) {
        /** @type {?} */
        let header = "filename=" + file.name;
        /** @type {?} */
        let tempIM = new ImageMessage(base64, header);
        this.SelectedFiles.push(tempIM);
    }
}
FileUploaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'lcu-file-uploader',
                template: "<input  style=\"display: none\" type=\"file\"  (change)=\"onFileChanged(FileUploader)\" ng2FileSelect [uploader]=\"FileUploader\" multiple #fileInput/>\r\n<button mat-raised-button class=\"button\" (click)=\"fileInput.click()\">Select File(s)</button>\r\n\r\n<!-- <input (change)=\"onFileChanged($event)\"> -->\r\n<!-- <input type=\"file\" (change)=\"onUpload($event)\" #file />\r\n<button mat-raised-button class=\"button\" (click)=\"file.click()\">Select File</button> -->\r\n\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbG93Y29kZXVuaXQvbGN1LWZpbGUtdXBsb2FkZXItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFTN0QsTUFBTSxPQUFPLHFCQUFxQjtJQWtCaEM7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksS0FBSyxFQUFnQixDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7SUFDL0QsQ0FBQzs7Ozs7O0lBWEQsSUFDYyxHQUFHLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBVUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFFTSxhQUFhLENBQUMsS0FBSztRQUN4QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1Qyw0RkFBNEY7YUFDN0Y7U0FDRjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFFUyxTQUFTLENBQUMsS0FBSzs7WUFDbkIsSUFBSSxHQUFHLEtBQUs7O1lBQ1osRUFBRSxHQUFHLElBQUk7O1lBQ1QsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO1FBQzdCLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFDLE1BQU07OztRQUFHLEdBQUcsRUFBRTtZQUNuQiw2QkFBNkI7WUFDN0IsRUFBRSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQSxDQUFDO1FBQ0YsTUFBTSxDQUFDLE9BQU87Ozs7UUFBRyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQSxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVTLGlCQUFpQixDQUFDLE1BQVcsRUFBRSxJQUFVOztZQUM3QyxNQUFNLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJOztZQUNoQyxNQUFNLEdBQWlCLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDM0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBL0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qiw4ZUFBNkM7O2FBRTlDOzs7OztrQkFZRSxLQUFLLFNBQUMsS0FBSzs0QkFLWCxNQUFNLFNBQUMsaUJBQWlCOzs7O0lBWnpCLDZDQUFrQzs7SUFFbEMsOENBQTBDOztJQUUxQyx1Q0FBc0I7Ozs7O0lBRXRCLHFDQUFlOztJQU1mLDhDQUN3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZGVyIH0gZnJvbSAnbmcyLWZpbGUtdXBsb2FkL25nMi1maWxlLXVwbG9hZCc7XHJcbmltcG9ydCB7IEltYWdlTWVzc2FnZSB9IGZyb20gJy4uL21vZGVscy9pbWFnZS1tZXNzYWdlLm1vZGVsJztcclxuLy8gaW1wb3J0IHsgQ29udmVydFRvQmFzZTY0VXRpbCB9IGZyb20gJ0BsY3UtaWRlL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xjdS1maWxlLXVwbG9hZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS11cGxvYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS11cGxvYWRlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG4gIHB1YmxpYyBGaWxlVXBsb2FkZXI6IEZpbGVVcGxvYWRlcjtcclxuXHJcbiAgcHVibGljIFNlbGVjdGVkRmlsZXM6IEFycmF5PEltYWdlTWVzc2FnZT47XHJcblxyXG4gIHB1YmxpYyBiYXNlNjQ6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIF9VUkw7XHJcbiAgQElucHV0KCd1cmwnKVxyXG4gIHByb3RlY3RlZCBzZXQgVVJMKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX1VSTCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgnZmlsZXMtdG8tdXBsb2FkJylcclxuICBwdWJsaWMgRmlsZXNUb1VwbG9hZDogRXZlbnRFbWl0dGVyPEFycmF5PEltYWdlTWVzc2FnZT4+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuU2VsZWN0ZWRGaWxlcyA9IG5ldyBBcnJheTxJbWFnZU1lc3NhZ2U+KCk7XHJcbiAgICB0aGlzLkZpbGVzVG9VcGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PEltYWdlTWVzc2FnZT4+KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuRmlsZVVwbG9hZGVyID0gbmV3IEZpbGVVcGxvYWRlcih7IHVybDogdGhpcy5fVVJMIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uRmlsZUNoYW5nZWQoZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLlNlbGVjdGVkRmlsZXMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC5xdWV1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuZ2V0QmFzZTY0KGV2ZW50LnF1ZXVlW2ldLmZpbGUucmF3RmlsZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJPYmplY3QgPSBcIixDb252ZXJ0VG9CYXNlNjRVdGlsLkdldEJhc2U2NChldmVudC5xdWV1ZVtpXS5maWxlLnJhd0ZpbGUpKTsgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcImZpbGUocykgdXBsb2FkZWQgPSBcIiwgdGhpcy5TZWxlY3RlZEZpbGVzKTtcclxuICAgIHRoaXMuRmlsZXNUb1VwbG9hZC5lbWl0KHRoaXMuU2VsZWN0ZWRGaWxlcyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0QmFzZTY0KGV2ZW50KTogYW55IHtcclxuICAgIGxldCBmaWxlID0gZXZlbnQ7XHJcbiAgICBsZXQgbWUgPSB0aGlzO1xyXG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIC8vY29uc29sZS5sb2cocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgIG1lLmJhc2U2NCA9IHJlYWRlci5yZXN1bHQudG9TdHJpbmcoKTtcclxuICAgICAgbWUuYnVpbGRJbWFnZU1lc3NhZ2UocmVhZGVyLnJlc3VsdC50b1N0cmluZygpLCBmaWxlKTtcclxuICAgIH07XHJcbiAgICByZWFkZXIub25lcnJvciA9IChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYnVpbGRJbWFnZU1lc3NhZ2UoYmFzZTY0OiBhbnksIGZpbGU6IEZpbGUpIHtcclxuICAgIGxldCBoZWFkZXIgPSBcImZpbGVuYW1lPVwiICsgZmlsZS5uYW1lO1xyXG4gICAgbGV0IHRlbXBJTTogSW1hZ2VNZXNzYWdlID0gbmV3IEltYWdlTWVzc2FnZShiYXNlNjQsIGhlYWRlcik7XHJcbiAgICB0aGlzLlNlbGVjdGVkRmlsZXMucHVzaCh0ZW1wSU0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19