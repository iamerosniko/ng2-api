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
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var ng2_file_upload_1 = require('ng2-file-upload');
var forms_1 = require('@angular/forms');
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { DownloadMemoryService }  from './download-memory.service';
//import { InMemoryDataService }  from '../cars/in-memory-data.service';
var upload_component_1 = require('./upload/upload.component');
var upload_multiple_component_1 = require('./upload/upload-multiple.component');
var upload_single_component_1 = require('./upload/upload-single.component');
var upload_queue_component_1 = require('./upload/upload-queue.component');
var download_component_1 = require('./download.component');
var download_service_1 = require('./download.service');
var file_routing_1 = require('./file.routing');
var FileModule = (function () {
    function FileModule() {
    }
    FileModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                //InMemoryWebApiModule.forRoot(DownloadMemoryService),
                //InMemoryWebApiModule.forRoot(InMemoryDataService),
                file_routing_1.FileRouting
            ],
            declarations: [
                ng2_file_upload_1.FileSelectDirective,
                ng2_file_upload_1.FileDropDirective,
                upload_component_1.UploadComponent,
                download_component_1.DownloadComponent,
                upload_multiple_component_1.UploadMultipleComponent,
                upload_single_component_1.UploadSingleComponent,
                upload_queue_component_1.UploadQueueComponent,
            ],
            providers: [
                download_service_1.DownloadService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], FileModule);
    return FileModule;
}());
exports.FileModule = FileModule;
