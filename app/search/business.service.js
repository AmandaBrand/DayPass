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
var logger_service_1 = require("../core/logger.service");
var business_1 = require('./business');
var mock_businesses_1 = require('./mock-businesses');
var BusinessService = (function () {
    function BusinessService(logger) {
        this.logger = logger;
        this.list = [];
    }
    /* Add a business */
    BusinessService.prototype.add = function (place) {
        var newPlace = new business_1.Business(place);
        this.list.push(newPlace);
    };
    /* Get all business (load the dummy data) */
    BusinessService.prototype.getBusinesses = function () {
        return Promise.resolve(mock_businesses_1.BUSINESSES);
    };
    /* Get a specific business */
    BusinessService.prototype.getBusiness = function (id) {
        // getBusiness(id: number): Promise<Business> {
        this.logger.log('BusinessService.getBusiness( ' + id + ' )');
        this.list = mock_businesses_1.BUSINESSES;
        this.selected = this.list.find(function (business) { return business.id === id; });
        return this.selected;
        // return this.getBusinesses()
        //     .then( businesses => businesses.find(business => business.id === id));
    };
    BusinessService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [logger_service_1.LoggerService])
    ], BusinessService);
    return BusinessService;
}());
exports.BusinessService = BusinessService;
