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
require('rxjs/add/operator/toPromise');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var DownloadService = (function () {
    function DownloadService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        //private downloadUrl = 'api/download';  // testing
        this.downloadUrl = 'http://localhost:59916/api/download';
    }
    ;
    DownloadService.prototype.getFiles = function () {
        return this.http
            .get(this.downloadUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); }) // live
            .catch(this.handleError);
    };
    DownloadService.prototype.getFile = function (fName) {
        var url = this.downloadUrl + "/?filename=" + fName;
        var win = window.open(url);
    };
    DownloadService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    DownloadService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DownloadService);
    return DownloadService;
}());
exports.DownloadService = DownloadService;
