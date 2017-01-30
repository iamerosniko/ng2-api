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
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var car_1 = require('./car');
var car_service_1 = require('./car.service');
var CarEditComponent = (function () {
    function CarEditComponent(carService, route, router) {
        this.carService = carService;
        this.route = route;
        this.router = router;
        this.model = new car_1.Car(0, '', '');
        this.submitted = false;
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
    }
    CarEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.carService.getCar(+params['id']); }) //the + value will convert id to number type
            .subscribe(function (car) { return _this.model = car; });
    };
    CarEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.carService.putCar(this.model);
        setTimeout(function () {
            _this.router.navigate(['/cars']);
        }, 2000);
    };
    CarEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'car-form.component.html'
        }), 
        __metadata('design:paramtypes', [car_service_1.CarService, router_1.ActivatedRoute, router_1.Router])
    ], CarEditComponent);
    return CarEditComponent;
}());
exports.CarEditComponent = CarEditComponent;
