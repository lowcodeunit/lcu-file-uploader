/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ImageMessage } from '../models/image-message.model';
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
     * @param {?} event
     * @return {?}
     */
    FileUploaderComponent.prototype.getBase64 = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var file = event;
        /** @type {?} */
        var me = this;
        /** @type {?} */
        var reader = new FileReader();
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
    };
    /**
     * @param {?} base64
     * @param {?} file
     * @return {?}
     */
    FileUploaderComponent.prototype.buildImageMessage = /**
     * @param {?} base64
     * @param {?} file
     * @return {?}
     */
    function (base64, file) {
        /** @type {?} */
        var header = "filename=" + file.name;
        /** @type {?} */
        var tempIM = new ImageMessage(base64, header);
        //console.log("tempIm = ",tempIM);
        this.SelectedFiles.push(tempIM);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileUploaderComponent.prototype.onFileChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // console.log("event = ", event);
        // console.log("event.queue = ", event.queue);
        if (this.SelectedFiles) {
            for (var i = 0; i < event.queue.length; i++) {
                this.getBase64(event.queue[i].file.rawFile);
            }
        }
        console.log("file(s) uploaded = ", this.SelectedFiles);
        this.FilesToUpload.emit(this.SelectedFiles);
    };
    FileUploaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lcu-file-uploader',
                    template: "<input  style=\"display: none\" type=\"file\"  (change)=\"onFileChanged(FileUploader)\" ng2FileSelect [uploader]=\"FileUploader\" multiple #fileInput/>\r\n<button mat-raised-button class=\"button\" (click)=\"fileInput.click()\">Select File(s)</button>\r\n\r\n<!-- <input (change)=\"onFileChanged($event)\"> -->\r\n<!-- <input type=\"file\" (change)=\"onUpload($event)\" #file />\r\n<button mat-raised-button class=\"button\" (click)=\"file.click()\">Select File</button> -->\r\n\r\n",
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
    /**
     * @type {?}
     * @protected
     */
    FileUploaderComponent.prototype._URL;
    /** @type {?} */
    FileUploaderComponent.prototype.FilesToUpload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbG93Y29kZXVuaXQvbGN1LWZpbGUtdXBsb2FkZXItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU3RDtJQXdCRTtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxLQUFLLEVBQWdCLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBdUIsQ0FBQztJQUMvRCxDQUFDO0lBWEgsc0JBQ2dCLHNDQUFHOzs7Ozs7UUFEbkIsVUFDb0IsS0FBYTtZQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTs7OztJQVVELHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFQyx5Q0FBUzs7OztJQUFULFVBQVUsS0FBSzs7WUFDVCxJQUFJLEdBQUcsS0FBSzs7WUFDWixFQUFFLEdBQUcsSUFBSTs7WUFDVCxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7UUFDN0IsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixNQUFNLENBQUMsTUFBTTs7O1FBQUc7WUFDZCw2QkFBNkI7WUFDN0Isd0NBQXdDO1lBQ3hDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQSxDQUFDO1FBQ0YsTUFBTSxDQUFDLE9BQU87Ozs7UUFBRyxVQUFVLEtBQUs7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFBLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxpREFBaUI7Ozs7O0lBQWpCLFVBQWtCLE1BQVcsRUFBRSxJQUFVOztZQUNuQyxNQUFNLEdBQUcsV0FBVyxHQUFDLElBQUksQ0FBQyxJQUFJOztZQUM5QixNQUFNLEdBQWlCLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDNUQsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRWpDLENBQUM7Ozs7O0lBR0YsNkNBQWE7Ozs7SUFBYixVQUFjLEtBQUs7UUFDakIsa0NBQWtDO1FBQ25DLDhDQUE4QztRQUM3QyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzdDO1NBQ0Y7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Z0JBbkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qiw4ZUFBNkM7O2lCQUU5Qzs7Ozs7c0JBWUEsS0FBSyxTQUFDLEtBQUs7Z0NBS1gsTUFBTSxTQUFDLGlCQUFpQjs7SUFnRHpCLDRCQUFDO0NBQUEsQUFyRUQsSUFxRUM7U0EvRFkscUJBQXFCOzs7SUFHbEMsNkNBQWtDOztJQUVsQyw4Q0FBMEM7Ozs7O0lBSTFDLHFDQUFlOztJQU1mLDhDQUMwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZGVyIH0gZnJvbSAnbmcyLWZpbGUtdXBsb2FkL25nMi1maWxlLXVwbG9hZCc7XHJcbmltcG9ydCB7IEltYWdlTWVzc2FnZSB9IGZyb20gJy4uL21vZGVscy9pbWFnZS1tZXNzYWdlLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGN1LWZpbGUtdXBsb2FkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLXVwbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9maWxlLXVwbG9hZGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlVXBsb2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbnB1YmxpYyBGaWxlVXBsb2FkZXI6IEZpbGVVcGxvYWRlcjsgXHJcblxyXG5wdWJsaWMgU2VsZWN0ZWRGaWxlczogQXJyYXk8SW1hZ2VNZXNzYWdlPjtcclxuXHJcbi8vIHB1YmxpYyBiYXNlNjQ6IHN0cmluZztcclxuXHJcbnByb3RlY3RlZCBfVVJMO1xyXG5ASW5wdXQoJ3VybCcpXHJcbiAgcHJvdGVjdGVkIHNldCBVUkwodmFsdWU6IHN0cmluZyl7XHJcbiAgICB0aGlzLl9VUkwgPSB2YWx1ZTtcclxuICB9XHJcblxyXG5AT3V0cHV0KCdmaWxlcy10by11cGxvYWQnKVxyXG4gIHB1YmxpYyBGaWxlc1RvVXBsb2FkOiBFdmVudEVtaXR0ZXI8QXJyYXk8SW1hZ2VNZXNzYWdlPj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyBcclxuICAgIHRoaXMuU2VsZWN0ZWRGaWxlcyA9IG5ldyBBcnJheTxJbWFnZU1lc3NhZ2U+KCk7XHJcbiAgICB0aGlzLkZpbGVzVG9VcGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PEltYWdlTWVzc2FnZT4+KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuRmlsZVVwbG9hZGVyID0gbmV3IEZpbGVVcGxvYWRlcih7dXJsOiB0aGlzLl9VUkx9KTtcclxuICB9XHJcblxyXG4gICAgZ2V0QmFzZTY0KGV2ZW50KTogYW55IHtcclxuICAgICAgbGV0IGZpbGUgPSBldmVudDtcclxuICAgICAgbGV0IG1lID0gdGhpcztcclxuICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgICAgLy8gbWUuYmFzZTY0ID0gcmVhZGVyLnJlc3VsdC50b1N0cmluZygpO1xyXG4gICAgICAgIG1lLmJ1aWxkSW1hZ2VNZXNzYWdlKHJlYWRlci5yZXN1bHQudG9TdHJpbmcoKSwgZmlsZSk7XHJcbiAgICAgIH07XHJcbiAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcik7XHJcbiAgICAgIH07XHJcbiAgIH1cclxuICBcclxuICAgYnVpbGRJbWFnZU1lc3NhZ2UoYmFzZTY0OiBhbnksIGZpbGU6IEZpbGUpe1xyXG4gICAgIGxldCBoZWFkZXIgPSBcImZpbGVuYW1lPVwiK2ZpbGUubmFtZTtcclxuICAgICBsZXQgdGVtcElNOiBJbWFnZU1lc3NhZ2UgPSBuZXcgSW1hZ2VNZXNzYWdlKGJhc2U2NCwgaGVhZGVyKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJ0ZW1wSW0gPSBcIix0ZW1wSU0pO1xyXG4gICAgdGhpcy5TZWxlY3RlZEZpbGVzLnB1c2godGVtcElNKTtcclxuXHJcbiAgIH1cclxuXHJcblxyXG4gIG9uRmlsZUNoYW5nZWQoZXZlbnQpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZXZlbnQgPSBcIiwgZXZlbnQpO1xyXG4gICAvLyBjb25zb2xlLmxvZyhcImV2ZW50LnF1ZXVlID0gXCIsIGV2ZW50LnF1ZXVlKTtcclxuICAgIGlmICh0aGlzLlNlbGVjdGVkRmlsZXMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC5xdWV1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuZ2V0QmFzZTY0KGV2ZW50LnF1ZXVlW2ldLmZpbGUucmF3RmlsZSk7ICAgICAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwiZmlsZShzKSB1cGxvYWRlZCA9IFwiLCB0aGlzLlNlbGVjdGVkRmlsZXMpO1xyXG4gICAgdGhpcy5GaWxlc1RvVXBsb2FkLmVtaXQodGhpcy5TZWxlY3RlZEZpbGVzKTtcclxuICB9XHJcblxyXG59XHJcbiAiXX0=