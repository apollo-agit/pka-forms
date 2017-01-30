/*
* Service for local storage
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
var angular2_uuid_1 = require("angular2-uuid");
var LocalStorageService = (function (_super) {
    __extends(LocalStorageService, _super);
    function LocalStorageService() {
        return _super.apply(this, arguments) || this;
    }
    LocalStorageService.prototype.read = function (url) {
        return rxjs_1.Observable.create(function (observer) {
            try {
                var value = JSON.parse(localStorage.getItem(url));
                observer.next(value);
            }
            catch (exception) {
                observer.error(exception);
            }
        });
    };
    LocalStorageService.prototype.create = function (url, obj) {
        return rxjs_1.Observable.create(function (observer) {
            try {
                obj.id = angular2_uuid_1.UUID.UUID();
                var value = JSON.parse(localStorage.getItem(url));
                if (!value)
                    value = new Array();
                value.push(obj);
                localStorage.setItem(url, JSON.stringify(value));
                observer.next(obj);
            }
            catch (exception) {
                observer.error(exception);
            }
        });
    };
    LocalStorageService.prototype.update = function (url, obj) {
        return rxjs_1.Observable.create(function (observer) {
            try {
                var value = JSON.parse(localStorage.getItem(url));
                var indx = value.findIndex(function (single) {
                    return single.id == obj.id;
                });
                value[indx] = obj;
                localStorage.setItem(url, JSON.stringify(value));
                observer.next(obj);
            }
            catch (exception) {
                observer.error(exception);
            }
        });
    };
    LocalStorageService.prototype.delete = function (url, obj) {
        return rxjs_1.Observable.create(function (observer) {
            try {
                var value = JSON.parse(localStorage.getItem(url));
                var indx = value.findIndex(function (single) {
                    return single.id == obj.id;
                });
                value.splice(indx, 1);
                localStorage.setItem(url, JSON.stringify(value));
                observer.next(obj);
            }
            catch (exception) {
                observer.error(exception);
            }
        });
    };
    return LocalStorageService;
}(abstract_backend_service_1.AbstractBackendService));
LocalStorageService = __decorate([
    core_1.Injectable()
], LocalStorageService);
exports.LocalStorageService = LocalStorageService;
//# sourceMappingURL=localstorage.service.js.map