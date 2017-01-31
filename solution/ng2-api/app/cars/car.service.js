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
var CarService = (function () {
    function CarService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        //private carsUrl = 'api/cars';  // testing
        this.carsUrl = 'http://localhost:59916/api/ng2_cars';
    }
    ;
    CarService.prototype.postCar = function (newCar) {
        return this.http
            .post(this.carsUrl, JSON.stringify(newCar), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); }) // live
            .catch(this.handleError);
    };
    CarService.prototype.getCars = function () {
        return this.http
            .get(this.carsUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); }) // live
            .catch(this.handleError);
    };
    CarService.prototype.getCar = function (id) {
        var url = this.carsUrl + "/" + id;
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response.json(); }) // live
            .catch(this.handleError);
    };
    CarService.prototype.putCar = function (car) {
        var url = this.carsUrl + "/" + car.id;
        return this.http
            .put(url, JSON.stringify(car), { headers: this.headers })
            .toPromise()
            .then(function () { return car; })
            .catch(this.handleError);
    };
    CarService.prototype.deleteCar = function (id) {
        var url = this.carsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    CarService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CarService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CarService);
    return CarService;
}());
exports.CarService = CarService;
