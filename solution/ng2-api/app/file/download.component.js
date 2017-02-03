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
var router_1 = require('@angular/router');
var download_service_1 = require('./download.service');
var DownloadComponent = (function () {
    function DownloadComponent(router, downloadService) {
        this.router = router;
        this.downloadService = downloadService;
    }
    DownloadComponent.prototype.getFiles = function () {
        var _this = this;
        this.downloadService.getFiles().then(function (files) { return _this.files = files; });
    };
    DownloadComponent.prototype.ngOnInit = function () {
        this.getFiles();
    };
    DownloadComponent.prototype.onSelect = function (file) {
        //this.router.navigate(['/download', file.filename]);
        this.downloadService.getFile(file.filename);
    };
    DownloadComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "download.components.html"
        }), 
        __metadata('design:paramtypes', [router_1.Router, download_service_1.DownloadService])
    ], DownloadComponent);
    return DownloadComponent;
}());
exports.DownloadComponent = DownloadComponent;
