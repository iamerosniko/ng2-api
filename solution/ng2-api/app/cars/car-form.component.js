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
var car_1 = require('./car');
var car_service_1 = require('./car.service');
var CarFormComponent = (function () {
    function CarFormComponent(carService, router) {
        this.carService = carService;
        this.router = router;
        this.submitted = false;
        this.carsCount = 0;
        this.fuelTypes = [
            'Petrol',
            'Diesel',
            'Hybrid',
            'Electric'
        ];
        this.bodyStyle = [
            'Convertibles',
            'Coupes',
            'Hatchbacks',
            'Vans',
            'Sedans',
            'Suvs',
            'Trucks',
            'Wagons'
        ];
        this.model = new car_1.Car(0, '', '');
    }
    CarFormComponent.prototype.getAllCar = function () {
        var _this = this;
        this.carService.getCars().then(function (cars) { return _this.cars = cars; });
    };
    CarFormComponent.prototype.ngOnInit = function () {
        this.getAllCar();
    };
    CarFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.model.id = this.cars.length + 1;
        this.submitted = true;
        this.carService.postCar(this.model);
        setTimeout(function () {
            _this.router.navigate(['/cars']);
        }, 2000);
    };
    Object.defineProperty(CarFormComponent.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    CarFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'car-form.component.html'
        }), 
        __metadata('design:paramtypes', [car_service_1.CarService, router_1.Router])
    ], CarFormComponent);
    return CarFormComponent;
}());
exports.CarFormComponent = CarFormComponent;
