/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ImageMessage } from '../models/image-message.model';
// import { ConvertToBase64Util } from '@lcu-ide/common';
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
    FileUploaderComponent.prototype.onFileChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.SelectedFiles) {
            for (var i = 0; i < event.queue.length; i++) {
                this.getBase64(event.queue[i].file.rawFile);
                // console.log("Object = ",ConvertToBase64Util.GetBase64(event.queue[i].file.rawFile));     
            }
        }
        console.log("file(s) uploaded = ", this.SelectedFiles);
        this.FilesToUpload.emit(this.SelectedFiles);
    };
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    FileUploaderComponent.prototype.getBase64 = /**
     * @protected
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
            me.base64 = reader.result.toString();
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
     * @protected
     * @param {?} base64
     * @param {?} file
     * @return {?}
     */
    FileUploaderComponent.prototype.buildImageMessage = /**
     * @protected
     * @param {?} base64
     * @param {?} file
     * @return {?}
     */
    function (base64, file) {
        /** @type {?} */
        var header = "filename=" + file.name;
        /** @type {?} */
        var tempIM = new ImageMessage(base64, header);
        this.SelectedFiles.push(tempIM);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbG93Y29kZXVuaXQvbGN1LWZpbGUtdXBsb2FkZXItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHN0Q7SUF3QkU7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksS0FBSyxFQUFnQixDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7SUFDL0QsQ0FBQztJQVhELHNCQUNjLHNDQUFHOzs7Ozs7UUFEakIsVUFDa0IsS0FBYTtZQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTs7OztJQVVELHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFFTSw2Q0FBYTs7OztJQUFwQixVQUFxQixLQUFLO1FBQ3hCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzVDLDRGQUE0RjthQUM3RjtTQUNGO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUVTLHlDQUFTOzs7OztJQUFuQixVQUFvQixLQUFLOztZQUNuQixJQUFJLEdBQUcsS0FBSzs7WUFDWixFQUFFLEdBQUcsSUFBSTs7WUFDVCxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7UUFDN0IsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixNQUFNLENBQUMsTUFBTTs7O1FBQUc7WUFDZCw2QkFBNkI7WUFDN0IsRUFBRSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQSxDQUFDO1FBQ0YsTUFBTSxDQUFDLE9BQU87Ozs7UUFBRyxVQUFDLEtBQUs7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFBLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRVMsaURBQWlCOzs7Ozs7SUFBM0IsVUFBNEIsTUFBVyxFQUFFLElBQVU7O1lBQzdDLE1BQU0sR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUk7O1lBQ2hDLE1BQU0sR0FBaUIsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUMzRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkEvREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLDhlQUE2Qzs7aUJBRTlDOzs7OztzQkFZRSxLQUFLLFNBQUMsS0FBSztnQ0FLWCxNQUFNLFNBQUMsaUJBQWlCOztJQTRDM0IsNEJBQUM7Q0FBQSxBQWpFRCxJQWlFQztTQTNEWSxxQkFBcUI7OztJQUdoQyw2Q0FBa0M7O0lBRWxDLDhDQUEwQzs7SUFFMUMsdUNBQXNCOzs7OztJQUV0QixxQ0FBZTs7SUFNZiw4Q0FDd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRlciB9IGZyb20gJ25nMi1maWxlLXVwbG9hZC9uZzItZmlsZS11cGxvYWQnO1xyXG5pbXBvcnQgeyBJbWFnZU1lc3NhZ2UgfSBmcm9tICcuLi9tb2RlbHMvaW1hZ2UtbWVzc2FnZS5tb2RlbCc7XHJcbi8vIGltcG9ydCB7IENvbnZlcnRUb0Jhc2U2NFV0aWwgfSBmcm9tICdAbGN1LWlkZS9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsY3UtZmlsZS11cGxvYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICBwdWJsaWMgRmlsZVVwbG9hZGVyOiBGaWxlVXBsb2FkZXI7XHJcblxyXG4gIHB1YmxpYyBTZWxlY3RlZEZpbGVzOiBBcnJheTxJbWFnZU1lc3NhZ2U+O1xyXG5cclxuICBwdWJsaWMgYmFzZTY0OiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCBfVVJMO1xyXG4gIEBJbnB1dCgndXJsJylcclxuICBwcm90ZWN0ZWQgc2V0IFVSTCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9VUkwgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoJ2ZpbGVzLXRvLXVwbG9hZCcpXHJcbiAgcHVibGljIEZpbGVzVG9VcGxvYWQ6IEV2ZW50RW1pdHRlcjxBcnJheTxJbWFnZU1lc3NhZ2U+PjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLlNlbGVjdGVkRmlsZXMgPSBuZXcgQXJyYXk8SW1hZ2VNZXNzYWdlPigpO1xyXG4gICAgdGhpcy5GaWxlc1RvVXBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxJbWFnZU1lc3NhZ2U+PigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLkZpbGVVcGxvYWRlciA9IG5ldyBGaWxlVXBsb2FkZXIoeyB1cmw6IHRoaXMuX1VSTCB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkZpbGVDaGFuZ2VkKGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5TZWxlY3RlZEZpbGVzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnQucXVldWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmdldEJhc2U2NChldmVudC5xdWV1ZVtpXS5maWxlLnJhd0ZpbGUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiT2JqZWN0ID0gXCIsQ29udmVydFRvQmFzZTY0VXRpbC5HZXRCYXNlNjQoZXZlbnQucXVldWVbaV0uZmlsZS5yYXdGaWxlKSk7ICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJmaWxlKHMpIHVwbG9hZGVkID0gXCIsIHRoaXMuU2VsZWN0ZWRGaWxlcyk7XHJcbiAgICB0aGlzLkZpbGVzVG9VcGxvYWQuZW1pdCh0aGlzLlNlbGVjdGVkRmlsZXMpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldEJhc2U2NChldmVudCk6IGFueSB7XHJcbiAgICBsZXQgZmlsZSA9IGV2ZW50O1xyXG4gICAgbGV0IG1lID0gdGhpcztcclxuICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICBtZS5iYXNlNjQgPSByZWFkZXIucmVzdWx0LnRvU3RyaW5nKCk7XHJcbiAgICAgIG1lLmJ1aWxkSW1hZ2VNZXNzYWdlKHJlYWRlci5yZXN1bHQudG9TdHJpbmcoKSwgZmlsZSk7XHJcbiAgICB9O1xyXG4gICAgcmVhZGVyLm9uZXJyb3IgPSAoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcik7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGJ1aWxkSW1hZ2VNZXNzYWdlKGJhc2U2NDogYW55LCBmaWxlOiBGaWxlKSB7XHJcbiAgICBsZXQgaGVhZGVyID0gXCJmaWxlbmFtZT1cIiArIGZpbGUubmFtZTtcclxuICAgIGxldCB0ZW1wSU06IEltYWdlTWVzc2FnZSA9IG5ldyBJbWFnZU1lc3NhZ2UoYmFzZTY0LCBoZWFkZXIpO1xyXG4gICAgdGhpcy5TZWxlY3RlZEZpbGVzLnB1c2godGVtcElNKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==