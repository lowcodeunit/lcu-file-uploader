/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
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
        console.log("event = ", event.queue);
        if (this.SelectedFiles) {
            for (var i = 0; i < event.queue.length; i++) {
                console.log("pushing: ", event.queue[i].file.rawFile);
                this.SelectedFiles.push(event.queue[i].file.rawFile);
            }
        }
        console.log("file uploaded = ", this.SelectedFiles);
        this.FilesToUpload.emit(this.SelectedFiles);
    };
    FileUploaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lcu-file-uploader',
                    template: "<input  style=\"display: none\" type=\"file\"  (change)=\"onFileChanged(FileUploader)\" ng2FileSelect [uploader]=\"FileUploader\" multiple #fileInput/>\r\n<!-- <input (change)=\"onFileChanged($event)\"> -->\r\n<button mat-raised-button color=\"primary\" (click)=\"fileInput.click()\">Select File</button>\r\n",
                    styles: [""]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbG93Y29kZXVuaXQvbGN1LWZpbGUtdXBsb2FkZXItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DO0lBc0JFO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEtBQUssRUFBUSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztJQUN2RCxDQUFDO0lBWEgsc0JBQ2dCLHNDQUFHOzs7Ozs7UUFEbkIsVUFDb0IsS0FBYTtZQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTs7OztJQVVELHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCw2Q0FBYTs7OztJQUFiLFVBQWMsS0FBSztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3REO1NBQ0Y7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Z0JBekNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixnVUFBNkM7O2lCQUU5Qzs7Ozs7c0JBVUEsS0FBSyxTQUFDLEtBQUs7Z0NBS1gsTUFBTSxTQUFDLGlCQUFpQjs7SUF3QnpCLDRCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0FyQ1kscUJBQXFCOzs7SUFHbEMsNkNBQWtDOztJQUVsQyw4Q0FBa0M7Ozs7O0lBRWxDLHFDQUFlOztJQU1mLDhDQUNrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZGVyIH0gZnJvbSAnbmcyLWZpbGUtdXBsb2FkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGN1LWZpbGUtdXBsb2FkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLXVwbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9maWxlLXVwbG9hZGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlVXBsb2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbnB1YmxpYyBGaWxlVXBsb2FkZXI6IEZpbGVVcGxvYWRlcjsgXHJcblxyXG5wdWJsaWMgU2VsZWN0ZWRGaWxlczogQXJyYXk8RmlsZT47XHJcblxyXG5wcm90ZWN0ZWQgX1VSTDtcclxuQElucHV0KCd1cmwnKVxyXG4gIHByb3RlY3RlZCBzZXQgVVJMKHZhbHVlOiBzdHJpbmcpe1xyXG4gICAgdGhpcy5fVVJMID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuQE91dHB1dCgnZmlsZXMtdG8tdXBsb2FkJylcclxuICBwdWJsaWMgRmlsZXNUb1VwbG9hZDogRXZlbnRFbWl0dGVyPEFycmF5PEZpbGU+PjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IFxyXG4gICAgdGhpcy5TZWxlY3RlZEZpbGVzID0gbmV3IEFycmF5PEZpbGU+KCk7XHJcbiAgICB0aGlzLkZpbGVzVG9VcGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PEZpbGU+PigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLkZpbGVVcGxvYWRlciA9IG5ldyBGaWxlVXBsb2FkZXIoe3VybDogdGhpcy5fVVJMfSk7XHJcbiAgfVxyXG5cclxuICBvbkZpbGVDaGFuZ2VkKGV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImV2ZW50ID0gXCIsIGV2ZW50LnF1ZXVlKTtcclxuICAgIGlmICh0aGlzLlNlbGVjdGVkRmlsZXMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC5xdWV1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicHVzaGluZzogXCIsIGV2ZW50LnF1ZXVlW2ldLmZpbGUucmF3RmlsZSk7XHJcbiAgICAgICAgdGhpcy5TZWxlY3RlZEZpbGVzLnB1c2goZXZlbnQucXVldWVbaV0uZmlsZS5yYXdGaWxlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJmaWxlIHVwbG9hZGVkID0gXCIsIHRoaXMuU2VsZWN0ZWRGaWxlcyk7XHJcbiAgICB0aGlzLkZpbGVzVG9VcGxvYWQuZW1pdCh0aGlzLlNlbGVjdGVkRmlsZXMpO1xyXG4gIH1cclxuXHJcbn1cclxuICJdfQ==