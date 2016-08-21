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
var employeeList_services_1 = require('./employeeList.services');
var AppComponent = (function () {
    function AppComponent(empListService) {
        this.empListService = empListService;
        this.title = 'Team Details';
        this.manager = {
            name: 'Mayank Gupta',
            designation: 'Senior Software Developer'
        };
        this.employeeList = null;
        this.selectedEmployee = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.employeeList = this.empListService.getList();
    };
    AppComponent.prototype.onSelect = function (showEmployee) {
        this.selectedEmployee = showEmployee;
        console.log(this.selectedEmployee);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'show-details',
            template: "<h1>{{title}}</h1>\n\t  \t<div class=\"managerDetails\">\n\t  \t\t<h2>Manager Details: </h2>\n\t  \t\t<div>\n\t\t  \t\t<h4><label>Employee Name: </label>{{manager.name}}</h4>\n\t\t\t\t<h4><label>Employee Designation: </label>{{manager.designation}}</h4>\n\t\t\t\t<label>Update Designation: </label><input type=\"text\" [(ngModel)]=\"manager.designation\" placeholder=\"name\">\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"employeeList\">\n\t\t\t<h2>Team Member List</h2>\n\t\t\t<div *ngFor=\"let employee of employeeList\">\n\t  \t\t\t<h4>Employee Name: {{employee.name}}</h4>\n\t  \t\t\t<h4>Employee Designation: {{employee.designation}}</h4>\n\t  \t\t\t<input type=\"button\" value=\"Show Details\" (click)=\"onSelect(employee)\" />\n\t\t\t</div>\n\t\t</div>\n\n\t\t<employee-details [selectedEmployee]=\"selectedEmployee\"></employee-details>\n\t",
            providers: [employeeList_services_1.EmployeeList]
        }), 
        __metadata('design:paramtypes', [employeeList_services_1.EmployeeList])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map