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
var core_1 = require("@angular/core");
var ionic_angular_1 = require('ionic-angular');
var logger_service_1 = require("../core/logger.service");
var business_service_1 = require("./business.service");
var listing_component_1 = require('../listing/listing.component');
var SearchComponent = (function () {
    function SearchComponent(businessService, logger, nav, navParams) {
        this.businessService = businessService;
        this.logger = logger;
        this.nav = nav;
        this.navParams = navParams;
        this.results = [];
        this.logClass = "SearchComponent";
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.loadResults();
    };
    SearchComponent.prototype.loadResults = function () {
        var _this = this;
        this.logger.log(this.logClass + '.loadResults()');
        this.businessService.getBusinesses()
            .then(function (businesses) { return _this.results = businesses; });
    };
    SearchComponent.prototype.showListing = function (id) {
        var _this = this;
        this.logger.log(this.logClass + '.showListing( ' + id + ' )');
        this.businessService.getBusiness(+id)
            .then(function (business) { return _this.selectedBusiness = business; });
        this.logger.log(this.selectedBusiness.name);
        this.nav.push(listing_component_1.ListingComponent, {
            listing: this.selectedBusiness
        });
    };
    SearchComponent = __decorate([
        core_1.Component({
            templateUrl: 'pages/search/search.html',
            providers: [business_service_1.BusinessService, logger_service_1.LoggerService]
        }), 
        __metadata('design:paramtypes', [business_service_1.BusinessService, logger_service_1.LoggerService, ionic_angular_1.NavController, ionic_angular_1.NavParams])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;