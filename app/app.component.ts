import { Component } from '@angular/core';
import { Employee } from './employee';
import { EmployeeList } from './employeeList.services';

@Component({
  	selector: 'show-details',
  	template: `<h1>{{title}}</h1>
	  	<div class="managerDetails">
	  		<h2>Manager Details: </h2>
	  		<div>
		  		<h4><label>Employee Name: </label>{{manager.name}}</h4>
				<h4><label>Employee Designation: </label>{{manager.designation}}</h4>
				<label>Update Designation: </label><input type="text" [(ngModel)]="manager.designation" placeholder="name">
			</div>
		</div>

		<div class="employeeList">
			<h2>Team Member List</h2>
			<div *ngFor="let employee of employeeList">
	  			<h4>Employee Name: {{employee.name}}</h4>
	  			<h4>Employee Designation: {{employee.designation}}</h4>
	  			<input type="button" value="Show Details" (click)="onSelect(employee)" />
			</div>
		</div>

		<employee-details [selectedEmployee]="selectedEmployee"></employee-details>
	`,
	providers: [EmployeeList]
})

export class AppComponent {
	constructor(private empListService: EmployeeList) { }
	title = 'Team Details';
	manager: Employee = {
		name: 'Mayank Gupta',
		designation: 'Senior Software Developer'
	};
	employeeList = null;
	selectedEmployee: Employee = null;

	ngOnInit(): void {
	    this.employeeList = this.empListService.getList();
	}
	onSelect(showEmployee: Employee): void {
		this.selectedEmployee = showEmployee;
		console.log(this.selectedEmployee);
	}

}