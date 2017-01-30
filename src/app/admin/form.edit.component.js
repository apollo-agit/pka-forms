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
var flux_reducer_1 = require("../common/flux.reducer");
var FormEditComponent = (function () {
    function FormEditComponent(_localStoragereducer, cd) {
        this._localStoragereducer = _localStoragereducer;
        this.cd = cd;
    }
    FormEditComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._localStoragereducer.backingObject.subscribe(function (data) {
            if (data) {
                _this.form = data[0];
                _this.cd.markForCheck();
            }
        });
        if (!this.form) {
            var newForm = { title: "New Form", description: "Description Here", formComponents: [] };
            this._localStoragereducer.add(newForm);
            this.cd.markForCheck();
        }
    };
    return FormEditComponent;
}());
FormEditComponent = __decorate([
    core_1.Component({
        selector: 'form-edit',
        templateUrl: './form.edit.component.html'
    }),
    __param(0, core_1.Inject('PKAFormStore')),
    __metadata("design:paramtypes", [flux_reducer_1.FluxReducer,
        core_1.ChangeDetectorRef])
], FormEditComponent);
exports.FormEditComponent = FormEditComponent;
//# sourceMappingURL=form.edit.component.js.map