"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
var main_component_1 = require("./main.component");
var app_routes_1 = require("./common/app.routes");
var admin_module_1 = require("./admin/admin.module");
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            material_1.MaterialModule.forRoot(),
            admin_module_1.AdminModule,
            app_routes_1.appRoutes
        ],
        declarations: [
            main_component_1.MainComponent
        ],
        providers: [
            app_routes_1.appRoutingProviders
        ],
        bootstrap: [
            main_component_1.MainComponent
        ]
    })
], MainModule);
exports.MainModule = MainModule;
//# sourceMappingURL=main.module.js.map