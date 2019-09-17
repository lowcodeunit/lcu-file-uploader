/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ImageMessage } from '../models/image-message.model';
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
        function () {
            //console.log(reader.result);
            // me.base64 = reader.result.toString();
            me.buildImageMessage(reader.result.toString(), file);
        });
        reader.onerror = (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            console.log('Error: ', error);
        });
    }
    /**
     * @param {?} base64
     * @param {?} file
     * @return {?}
     */
    buildImageMessage(base64, file) {
        /** @type {?} */
        let header = "filename=" + file.name;
        /** @type {?} */
        let tempIM = new ImageMessage(base64, header);
        //console.log("tempIm = ",tempIM);
        this.SelectedFiles.push(tempIM);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFileChanged(event) {
        // console.log("event = ", event);
        // console.log("event.queue = ", event.queue);
        if (this.SelectedFiles) {
            for (let i = 0; i < event.queue.length; i++) {
                this.getBase64(event.queue[i].file.rawFile);
            }
        }
        console.log("file(s) uploaded = ", this.SelectedFiles);
        this.FilesToUpload.emit(this.SelectedFiles);
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
    /**
     * @type {?}
     * @protected
     */
    FileUploaderComponent.prototype._URL;
    /** @type {?} */
    FileUploaderComponent.prototype.FilesToUpload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbG93Y29kZXVuaXQvbGN1LWZpbGUtdXBsb2FkZXItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQVE3RCxNQUFNLE9BQU8scUJBQXFCO0lBa0JoQztRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxLQUFLLEVBQWdCLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBdUIsQ0FBQztJQUMvRCxDQUFDOzs7Ozs7SUFYSCxJQUNnQixHQUFHLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBVUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFQyxTQUFTLENBQUMsS0FBSzs7WUFDVCxJQUFJLEdBQUcsS0FBSzs7WUFDWixFQUFFLEdBQUcsSUFBSTs7WUFDVCxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7UUFDN0IsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixNQUFNLENBQUMsTUFBTTs7O1FBQUc7WUFDZCw2QkFBNkI7WUFDN0Isd0NBQXdDO1lBQ3hDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQSxDQUFDO1FBQ0YsTUFBTSxDQUFDLE9BQU87Ozs7UUFBRyxVQUFVLEtBQUs7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFBLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxNQUFXLEVBQUUsSUFBVTs7WUFDbkMsTUFBTSxHQUFHLFdBQVcsR0FBQyxJQUFJLENBQUMsSUFBSTs7WUFDOUIsTUFBTSxHQUFpQixJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQzVELGtDQUFrQztRQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVqQyxDQUFDOzs7OztJQUdGLGFBQWEsQ0FBQyxLQUFLO1FBQ2pCLGtDQUFrQztRQUNuQyw4Q0FBOEM7UUFDN0MsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM3QztTQUNGO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7OztZQW5FRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsOGVBQTZDOzthQUU5Qzs7Ozs7a0JBWUEsS0FBSyxTQUFDLEtBQUs7NEJBS1gsTUFBTSxTQUFDLGlCQUFpQjs7OztJQVp6Qiw2Q0FBa0M7O0lBRWxDLDhDQUEwQzs7Ozs7SUFJMUMscUNBQWU7O0lBTWYsOENBQzBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkZXIgfSBmcm9tICduZzItZmlsZS11cGxvYWQvbmcyLWZpbGUtdXBsb2FkJztcclxuaW1wb3J0IHsgSW1hZ2VNZXNzYWdlIH0gZnJvbSAnLi4vbW9kZWxzL2ltYWdlLW1lc3NhZ2UubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsY3UtZmlsZS11cGxvYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxucHVibGljIEZpbGVVcGxvYWRlcjogRmlsZVVwbG9hZGVyOyBcclxuXHJcbnB1YmxpYyBTZWxlY3RlZEZpbGVzOiBBcnJheTxJbWFnZU1lc3NhZ2U+O1xyXG5cclxuLy8gcHVibGljIGJhc2U2NDogc3RyaW5nO1xyXG5cclxucHJvdGVjdGVkIF9VUkw7XHJcbkBJbnB1dCgndXJsJylcclxuICBwcm90ZWN0ZWQgc2V0IFVSTCh2YWx1ZTogc3RyaW5nKXtcclxuICAgIHRoaXMuX1VSTCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbkBPdXRwdXQoJ2ZpbGVzLXRvLXVwbG9hZCcpXHJcbiAgcHVibGljIEZpbGVzVG9VcGxvYWQ6IEV2ZW50RW1pdHRlcjxBcnJheTxJbWFnZU1lc3NhZ2U+PjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IFxyXG4gICAgdGhpcy5TZWxlY3RlZEZpbGVzID0gbmV3IEFycmF5PEltYWdlTWVzc2FnZT4oKTtcclxuICAgIHRoaXMuRmlsZXNUb1VwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8SW1hZ2VNZXNzYWdlPj4oKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5GaWxlVXBsb2FkZXIgPSBuZXcgRmlsZVVwbG9hZGVyKHt1cmw6IHRoaXMuX1VSTH0pO1xyXG4gIH1cclxuXHJcbiAgICBnZXRCYXNlNjQoZXZlbnQpOiBhbnkge1xyXG4gICAgICBsZXQgZmlsZSA9IGV2ZW50O1xyXG4gICAgICBsZXQgbWUgPSB0aGlzO1xyXG4gICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZWFkZXIucmVzdWx0KTtcclxuICAgICAgICAvLyBtZS5iYXNlNjQgPSByZWFkZXIucmVzdWx0LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbWUuYnVpbGRJbWFnZU1lc3NhZ2UocmVhZGVyLnJlc3VsdC50b1N0cmluZygpLCBmaWxlKTtcclxuICAgICAgfTtcclxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKTtcclxuICAgICAgfTtcclxuICAgfVxyXG4gIFxyXG4gICBidWlsZEltYWdlTWVzc2FnZShiYXNlNjQ6IGFueSwgZmlsZTogRmlsZSl7XHJcbiAgICAgbGV0IGhlYWRlciA9IFwiZmlsZW5hbWU9XCIrZmlsZS5uYW1lO1xyXG4gICAgIGxldCB0ZW1wSU06IEltYWdlTWVzc2FnZSA9IG5ldyBJbWFnZU1lc3NhZ2UoYmFzZTY0LCBoZWFkZXIpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcInRlbXBJbSA9IFwiLHRlbXBJTSk7XHJcbiAgICB0aGlzLlNlbGVjdGVkRmlsZXMucHVzaCh0ZW1wSU0pO1xyXG5cclxuICAgfVxyXG5cclxuXHJcbiAgb25GaWxlQ2hhbmdlZChldmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJldmVudCA9IFwiLCBldmVudCk7XHJcbiAgIC8vIGNvbnNvbGUubG9nKFwiZXZlbnQucXVldWUgPSBcIiwgZXZlbnQucXVldWUpO1xyXG4gICAgaWYgKHRoaXMuU2VsZWN0ZWRGaWxlcykge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LnF1ZXVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5nZXRCYXNlNjQoZXZlbnQucXVldWVbaV0uZmlsZS5yYXdGaWxlKTsgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJmaWxlKHMpIHVwbG9hZGVkID0gXCIsIHRoaXMuU2VsZWN0ZWRGaWxlcyk7XHJcbiAgICB0aGlzLkZpbGVzVG9VcGxvYWQuZW1pdCh0aGlzLlNlbGVjdGVkRmlsZXMpO1xyXG4gIH1cclxuXHJcbn1cclxuICJdfQ==