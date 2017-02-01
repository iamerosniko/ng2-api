"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var ng2_file_upload_1 = require('ng2-file-upload');
var upload_component_1 = require('./upload.component');
var file_routing_1 = require('./file.routing');
var FileModule = (function () {
    function FileModule() {
    }
    FileModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                file_routing_1.FileRouting
            ],
            declarations: [ng2_file_upload_1.FileSelectDirective, ng2_file_upload_1.FileDropDirective,
                upload_component_1.UploadComponent
            ],
            bootstrap: [upload_component_1.UploadComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], FileModule);
    return FileModule;
}());
exports.FileModule = FileModule;
