import { Component, Input } from '@angular/core';
import { Employee } from './employee';

@Component({
  	selector: 'employee-details',
  	template: `
		<div class="selected-employee">
			<div *ngIf="selectedEmployee">
				<h2>Team Member List</h2>
				<h4>Employee Name: {{selectedEmployee.name}}</h4>
				<h4>Employee Name: {{selectedEmployee.designation}}</h4>
			</div>
		</div>
	`
})
export class EmployeeDetailComponent {

	@Input()
	selectedEmployee: Employee = null;
}