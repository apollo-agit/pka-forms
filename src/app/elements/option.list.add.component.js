"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _this = this;
var core_1 = require("@angular/core");
var flux_reducer_1 = require("../common/flux.reducer");
var base_element_component_1 = require("./base.element.component");
var OptionListAddComponent = (function () {
    function OptionListAddComponent() {
    }
    return OptionListAddComponent;
}());
OptionListAddComponent = __decorate([
    core_1.Component({
        selector: 'option-list-add',
        templateUrl: './option.list.add.component.html'
    })
], OptionListAddComponent);
exports.OptionListAddComponent = OptionListAddComponent;
inherits;
base_element_component_1.BaseElementComponent;
{
    constructor();
    _localStoragereducer: flux_reducer_1.FluxReducer();
    {
        this._localStoragereducer.backingObject.subscribe(function (data) {
            if (data) {
                _this._form = data;
            }
        });
    }
    onClickAddTextInput();
    {
        this._localStoragereducer.modify(this._form, function (value) {
            var comp = { label: "Text Input", type: "text_input", sequence: 1 };
            value.formComponents.push(comp);
            return value;
        });
    }
}
//# sourceMappingURL=option.list.add.component.js.map