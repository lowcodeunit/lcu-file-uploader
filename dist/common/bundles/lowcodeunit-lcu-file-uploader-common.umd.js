(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ng2-file-upload/ng2-file-upload'), require('@lcu-ide/common'), require('ng2-file-upload')) :
    typeof define === 'function' && define.amd ? define('@lowcodeunit/lcu-file-uploader-common', ['exports', '@angular/core', '@angular/common', 'ng2-file-upload/ng2-file-upload', '@lcu-ide/common', 'ng2-file-upload'], factory) :
    (global = global || self, factory((global.lowcodeunit = global.lowcodeunit || {}, global.lowcodeunit['lcu-file-uploader-common'] = {}), global.ng.core, global.ng.common, global.ng2FileUpload, global.common$1, global.ng2FileUpload$1));
}(this, function (exports, core, common, ng2FileUpload, common$1, ng2FileUpload$1) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
<<<<<<< HEAD
         * Build the image message
         *
         * @param base64 base 64 string for the image
         *
         * @param file file data
         */
        /**
         * Build the image message
         *
         * @protected
         * @param {?} base64 base 64 string for the image
         *
         * @param {?} file file data
         * @return {?}
         */
        FileUploaderComponent.prototype.buildImageMessage = /**
         * Build the image message
         *
         * @protected
         * @param {?} base64 base 64 string for the image
         *
         * @param {?} file file data
=======
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
>>>>>>> 68236b45d821528a3242f446e9eb5bf1ce9968e0
         * @return {?}
         */
        function (base64, file) {
            /** @type {?} */
            var header = 'filename=' + file.name;
            /** @type {?} */
            var tempIM = new ImageMessage(base64, header);
            this.SelectedFiles.push(tempIM);
            console.log('selected files', this.SelectedFiles);
        };
<<<<<<< HEAD
        /**
         * When a file is selected
         *
         * @param event need to figure out what the type is
         */
        /**
         * When a file is selected
         *
         * @param {?} event need to figure out what the type is
         * @return {?}
         */
        FileUploaderComponent.prototype.OnFileChanged = /**
         * When a file is selected
         *
         * @param {?} event need to figure out what the type is
         * @return {?}
         */
        function (event) {
            var _this = this;
            var e_1, _a;
            if (this.SelectedFiles) {
                try {
                    for (var _b = __values(event.queue), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var itm = _c.value;
                        common$1.ConvertToBase64Util.GetBase64(itm.file.rawFile)
                            .subscribe((/**
                         * @param {?} result
                         * @return {?}
                         */
                        function (result) {
                            _this.buildImageMessage(result.Blob, result.File);
                        }));
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        };
=======
>>>>>>> 68236b45d821528a3242f446e9eb5bf1ce9968e0
        FileUploaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lcu-file-uploader',
                        template: "<input  style=\"display: none\" type=\"file\"  (change)=\"OnFileChanged(FileUploader)\" ng2FileSelect [uploader]=\"FileUploader\" multiple #fileInput/>\r\n<button mat-raised-button class=\"button\" (click)=\"fileInput.click()\">Select File(s)</button>\r\n\r\n<!-- <input (change)=\"onFileChanged($event)\"> -->\r\n<!-- <input type=\"file\" (change)=\"onUpload($event)\" #file />\r\n<button mat-raised-button class=\"button\" (click)=\"file.click()\">Select File</button> -->\r\n\r\n",
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
