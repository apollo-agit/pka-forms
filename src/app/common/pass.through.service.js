/*
* This is interesting. It's a pass through service so the
* flux reducer has the required side effect
*
*  NOT SURE THIS IS A GOOD PATTERN. NEED TO THINK ABOUT IT.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var abstract_backend_service_1 = require("./abstract.backend.service");
var PassThroughService = (function (_super) {
    __extends(PassThroughService, _super);
    function PassThroughService() {
        return _super.apply(this, arguments) || this;
    }
    PassThroughService.prototype.read = function (url) {
        return rxjs_1.Observable.create(function (observer) {
            try {
                observer.next(new Array());
            }
            catch (exception) {
                observer.error(exception);
            }
        });
    };
    PassThroughService.prototype.create = function (url, obj) {
        return rxjs_1.Observable.create(function (observer) {
            try {
                observer.next(obj);
            }
            catch (exception) {
                observer.error(exception);
            }
        });
    };
    PassThroughService.prototype.update = function (url, obj) {
        return rxjs_1.Observable.create(function (observer) {
            try {
                observer.next(obj);
            }
            catch (exception) {
                observer.error(exception);
            }
        });
    };
    PassThroughService.prototype.delete = function (url, obj) {
        return rxjs_1.Observable.create(function (observer) {
            try {
                observer.next(obj);
            }
            catch (exception) {
                observer.error(exception);
            }
        });
    };
    return PassThroughService;
}(abstract_backend_service_1.AbstractBackendService));
PassThroughService = __decorate([
    core_1.Injectable()
], PassThroughService);
exports.PassThroughService = PassThroughService;
//# sourceMappingURL=pass.through.service.js.map