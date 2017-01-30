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
var car_service_1 = require('./car.service');
var CarDetailComponent = (function () {
    function CarDetailComponent(carService, route, router) {
        this.carService = carService;
        this.route = route;
        this.router = router;
    }
    CarDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.carService.getCar(+params['id']); }) //the + value will convert id to number type
            .subscribe(function (car) { return _this.currentCar = car; });
    };
    CarDetailComponent.prototype.onDeleteCar = function (id) {
        this.carService.deleteCar(id);
        this.router.navigate(['/cars']);
    };
    CarDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'car-detail.component.html'
        }), 
        __metadata('design:paramtypes', [car_service_1.CarService, router_1.ActivatedRoute, router_1.Router])
    ], CarDetailComponent);
    return CarDetailComponent;
}());
exports.CarDetailComponent = CarDetailComponent;
