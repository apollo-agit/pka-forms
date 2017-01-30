/*
* Generic reducer should cover most needs, backend store is injected
* for side effect storage and retrieval
*/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var Immutable = require("immutable");
var abstract_backend_service_1 = require("./abstract.backend.service");
var FluxReducer = (function () {
    function FluxReducer(_key, _backendService) {
        this._backendService = _backendService;
        this.key = _key;
        this._backingObject = new rxjs_1.Subject();
        this.backingObject = this._backingObject.asObservable();
        this._store = Immutable.Map();
    }
    FluxReducer.prototype.load = function () {
        var _this = this;
        this._backendService.read(this.key).subscribe(function (data) {
            _this.initialize(data);
        });
    };
    FluxReducer.prototype.initialize = function (data) {
        var _this = this;
        if (data) {
            data.forEach(function (model) {
                _this._store = _this._store.set(model.id, model);
            });
        }
        this._backingObject.next(this._store.toArray());
    };
    FluxReducer.prototype.add = function (obj) {
        var _this = this;
        this._backendService.create(this.key, obj).subscribe(function (single) {
            _this._store = _this._store.set(single.id, single);
            _this._backingObject.next(_this._store.toArray());
        });
    };
    // This method I do not like....it forces the callback which in turn makes two seperate 
    // methods of update for the store vs the side effect
    // need to think about this
    FluxReducer.prototype.modify = function (obj, callback) {
        var _this = this;
        this._backendService.update(this.key, obj).subscribe(function (mutant) {
            _this._store = _this._store.update(obj.id, function (value) { return callback(value); });
            _this._backingObject.next(_this._store.toArray());
        });
    };
    FluxReducer.prototype.remove = function (obj) {
        var _this = this;
        this._backendService.update(this.key, obj).subscribe(function (orphan) {
            _this._store = _this._store.remove(obj.id);
            localStorage.setItem(_this.key, JSON.stringify(_this._store.toArray()));
            _this._backingObject.next(_this._store.toArray());
        });
    };
    return FluxReducer;
}());
FluxReducer = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject('key')),
    __param(1, core_1.Inject('BackendService')),
    __metadata("design:paramtypes", [String, abstract_backend_service_1.AbstractBackendService])
], FluxReducer);
exports.FluxReducer = FluxReducer;
//# sourceMappingURL=flux.reducer.js.map