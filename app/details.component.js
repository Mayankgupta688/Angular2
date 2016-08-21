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
var employee_1 = require('./employee');
var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent() {
        this.selectedEmployee = null;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', employee_1.Employee)
    ], EmployeeDetailComponent.prototype, "selectedEmployee", void 0);
    EmployeeDetailComponent = __decorate([
        core_1.Component({
            selector: 'employee-details',
            template: "\n\t\t<div class=\"selected-employee\">\n\t\t\t<div *ngIf=\"selectedEmployee\">\n\t\t\t\t<h2>Team Member List</h2>\n\t\t\t\t<h4>Employee Name: {{selectedEmployee.name}}</h4>\n\t\t\t\t<h4>Employee Name: {{selectedEmployee.designation}}</h4>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
}());
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=details.component.js.map