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
var car_service_1 = require('./car.service');
var CarsListComponent = (function () {
    function CarsListComponent(router, carService) {
        this.router = router;
        this.carService = carService;
    }
    CarsListComponent.prototype.getCars = function () {
        var _this = this;
        this.carService.getCars().then(function (cars) { return _this.cars = cars; });
    };
    CarsListComponent.prototype.ngOnInit = function () {
        this.getCars();
    };
    CarsListComponent.prototype.onSelect = function (car) {
        this.router.navigate(['/car', car.id]);
    };
    CarsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'cars-list.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, car_service_1.CarService])
    ], CarsListComponent);
    return CarsListComponent;
}());
exports.CarsListComponent = CarsListComponent;
