(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ng2-file-upload/ng2-file-upload'), require('ng2-file-upload')) :
    typeof define === 'function' && define.amd ? define('@lowcodeunit/lcu-file-uploader-common', ['exports', '@angular/core', '@angular/common', 'ng2-file-upload/ng2-file-upload', 'ng2-file-upload'], factory) :
    (global = global || self, factory((global.lowcodeunit = global.lowcodeunit || {}, global.lowcodeunit['lcu-file-uploader-common'] = {}), global.ng.core, global.ng.common, global.ng2FileUpload, global.ng2FileUpload$1));
}(this, function (exports, core, common, ng2FileUpload, ng2FileUpload$1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ImageMessage = /** @class */ (function () {
        function ImageMessage(data, headers) {
            this.Data = data;
            this.Headers = headers;
        }
        return ImageMessage;
    }());
    if (false) {
        /** @type {?} */
        ImageMessage.prototype.Data;
        /** @type {?} */
        ImageMessage.prototype.Headers;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import { ConvertToBase64Util } from '@lcu-ide/common';
    var FileUploaderComponent = /** @class */ (function () {
        function FileUploaderComponent() {
            this.SelectedFiles = new Array();
            this.FilesToUpload = new core.EventEmitter();
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
            this.FileUploader = new ng2FileUpload.FileUploader({ url: this._URL });
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
            { type: core.Component, args: [{
                        selector: 'lcu-file-uploader',
                        template: "<input  style=\"display: none\" type=\"file\"  (change)=\"onFileChanged(FileUploader)\" ng2FileSelect [uploader]=\"FileUploader\" multiple #fileInput/>\r\n<button mat-raised-button class=\"button\" (click)=\"fileInput.click()\">Select File(s)</button>\r\n\r\n<!-- <input (change)=\"onFileChanged($event)\"> -->\r\n<!-- <input type=\"file\" (change)=\"onUpload($event)\" #file />\r\n<button mat-raised-button class=\"button\" (click)=\"file.click()\">Select File</button> -->\r\n\r\n",
                        styles: [".button{background-color:#3f51b5;color:#fff;border-color:#3f51b5;border-radius:4px;font-family:Arial;font-size:13.3333px;padding:6px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important}"]
                    }] }
        ];
        /** @nocollapse */
        FileUploaderComponent.ctorParameters = function () { return []; };
        FileUploaderComponent.propDecorators = {
            URL: [{ type: core.Input, args: ['url',] }],
            FilesToUpload: [{ type: core.Output, args: ['files-to-upload',] }]
        };
        return FileUploaderComponent;
    }());
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LcuFileUploaderModule = /** @class */ (function () {
        function LcuFileUploaderModule() {
        }
        LcuFileUploaderModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            FileUploaderComponent
                        ],
                        imports: [
                            common.CommonModule,
                            ng2FileUpload.FileUploadModule
                        ],
                        exports: [FileUploaderComponent, ng2FileUpload.FileUploadModule],
                        entryComponents: [FileUploaderComponent]
                    },] }
        ];
        return LcuFileUploaderModule;
    }());

    Object.defineProperty(exports, 'FileDropDirective', {
        enumerable: true,
        get: function () {
            return ng2FileUpload$1.FileDropDirective;
        }
    });
    Object.defineProperty(exports, 'FileItem', {
        enumerable: true,
        get: function () {
            return ng2FileUpload$1.FileItem;
        }
    });
    Object.defineProperty(exports, 'FileLikeObject', {
        enumerable: true,
        get: function () {
            return ng2FileUpload$1.FileLikeObject;
        }
    });
    Object.defineProperty(exports, 'FileSelectDirective', {
        enumerable: true,
        get: function () {
            return ng2FileUpload$1.FileSelectDirective;
        }
    });
    Object.defineProperty(exports, 'FileUploadModule', {
        enumerable: true,
        get: function () {
            return ng2FileUpload$1.FileUploadModule;
        }
    });
    Object.defineProperty(exports, 'FileUploader', {
        enumerable: true,
        get: function () {
            return ng2FileUpload$1.FileUploader;
        }
    });
    exports.FileUploaderComponent = FileUploaderComponent;
    exports.ImageMessage = ImageMessage;
    exports.LcuFileUploaderModule = LcuFileUploaderModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=lowcodeunit-lcu-file-uploader-common.umd.js.map
