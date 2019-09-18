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
    /**
     * @type {?}
     * @protected
     */
    FileUploaderComponent.prototype._URL;
    /** @type {?} */
    FileUploaderComponent.prototype.FilesToUpload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbG93Y29kZXVuaXQvbGN1LWZpbGUtdXBsb2FkZXItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU3RCxPQUFPLEVBQWUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVVuRSxNQUFNLE9BQU8scUJBQXFCO0lBa0JoQztRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxLQUFLLEVBQWdCLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBdUIsQ0FBQztJQUMvRCxDQUFDOzs7Ozs7SUFYSCxJQUNnQixHQUFHLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBVUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7Ozs7OztJQVNVLGlCQUFpQixDQUFDLE1BQWMsRUFBRSxJQUFVOztjQUM5QyxNQUFNLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJOztjQUNoQyxNQUFNLEdBQWlCLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDN0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7OztJQVFLLGFBQWEsQ0FBQyxLQUFVO1FBQzdCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN2QixLQUFLLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQzdCLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFDOUMsU0FBUzs7OztnQkFBQyxDQUFDLE1BQW1CLEVBQUUsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuRCxDQUFDLEVBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDOzs7WUE5REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLDhlQUE2Qzs7YUFFOUM7Ozs7O2tCQVlBLEtBQUssU0FBQyxLQUFLOzRCQUtYLE1BQU0sU0FBQyxpQkFBaUI7Ozs7SUFaekIsNkNBQWtDOztJQUVsQyw4Q0FBMEM7Ozs7O0lBSTFDLHFDQUFlOztJQU1mLDhDQUMwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZGVyIH0gZnJvbSAnbmcyLWZpbGUtdXBsb2FkL25nMi1maWxlLXVwbG9hZCc7XHJcbmltcG9ydCB7IEltYWdlTWVzc2FnZSB9IGZyb20gJy4uL21vZGVscy9pbWFnZS1tZXNzYWdlLm1vZGVsJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvaW50ZXJuYWwvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEJhc2U2NE1vZGVsLCBDb252ZXJ0VG9CYXNlNjRVdGlsIH0gZnJvbSAnQGxjdS1pZGUvY29tbW9uJztcclxuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJ3J4anMvaW50ZXJuYWwvU3Vic2NyaWJlcic7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGN1LWZpbGUtdXBsb2FkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLXVwbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9maWxlLXVwbG9hZGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlVXBsb2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbnB1YmxpYyBGaWxlVXBsb2FkZXI6IEZpbGVVcGxvYWRlcjsgXHJcblxyXG5wdWJsaWMgU2VsZWN0ZWRGaWxlczogQXJyYXk8SW1hZ2VNZXNzYWdlPjtcclxuXHJcbi8vIHB1YmxpYyBiYXNlNjQ6IHN0cmluZztcclxuXHJcbnByb3RlY3RlZCBfVVJMO1xyXG5ASW5wdXQoJ3VybCcpXHJcbiAgcHJvdGVjdGVkIHNldCBVUkwodmFsdWU6IHN0cmluZyl7XHJcbiAgICB0aGlzLl9VUkwgPSB2YWx1ZTtcclxuICB9XHJcblxyXG5AT3V0cHV0KCdmaWxlcy10by11cGxvYWQnKVxyXG4gIHB1YmxpYyBGaWxlc1RvVXBsb2FkOiBFdmVudEVtaXR0ZXI8QXJyYXk8SW1hZ2VNZXNzYWdlPj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyBcclxuICAgIHRoaXMuU2VsZWN0ZWRGaWxlcyA9IG5ldyBBcnJheTxJbWFnZU1lc3NhZ2U+KCk7XHJcbiAgICB0aGlzLkZpbGVzVG9VcGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PEltYWdlTWVzc2FnZT4+KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuRmlsZVVwbG9hZGVyID0gbmV3IEZpbGVVcGxvYWRlcih7dXJsOiB0aGlzLl9VUkx9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJ1aWxkIHRoZSBpbWFnZSBtZXNzYWdlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYmFzZTY0IGJhc2UgNjQgc3RyaW5nIGZvciB0aGUgaW1hZ2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSBmaWxlIGZpbGUgZGF0YVxyXG4gICAqL1xyXG4gICBwcm90ZWN0ZWQgYnVpbGRJbWFnZU1lc3NhZ2UoYmFzZTY0OiBzdHJpbmcsIGZpbGU6IEZpbGUpe1xyXG4gICAgIGNvbnN0IGhlYWRlciA9ICdmaWxlbmFtZT0nICsgZmlsZS5uYW1lO1xyXG4gICAgIGNvbnN0IHRlbXBJTTogSW1hZ2VNZXNzYWdlID0gbmV3IEltYWdlTWVzc2FnZShiYXNlNjQsIGhlYWRlcik7XHJcbiAgICAgdGhpcy5TZWxlY3RlZEZpbGVzLnB1c2godGVtcElNKTtcclxuICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgZmlsZXMnLCB0aGlzLlNlbGVjdGVkRmlsZXMpO1xyXG4gICB9XHJcblxyXG5cclxuICAgLyoqXHJcbiAgICAqIFdoZW4gYSBmaWxlIGlzIHNlbGVjdGVkXHJcbiAgICAqXHJcbiAgICAqIEBwYXJhbSBldmVudCBuZWVkIHRvIGZpZ3VyZSBvdXQgd2hhdCB0aGUgdHlwZSBpc1xyXG4gICAgKi9cclxuICBwdWJsaWMgT25GaWxlQ2hhbmdlZChldmVudDogYW55KSB7XHJcbiAgICBpZiAodGhpcy5TZWxlY3RlZEZpbGVzKSB7XHJcbiAgICAgZm9yIChjb25zdCBpdG0gb2YgZXZlbnQucXVldWUpIHtcclxuICAgICAgIENvbnZlcnRUb0Jhc2U2NFV0aWwuR2V0QmFzZTY0KGl0bS5maWxlLnJhd0ZpbGUpXHJcbiAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQ6IEJhc2U2NE1vZGVsKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmJ1aWxkSW1hZ2VNZXNzYWdlKHJlc3VsdC5CbG9iLCByZXN1bHQuRmlsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19