import { Component } from '@angular/core';

export class Employee {
  name: string;
  designation: string;
}

@Component({
  selector: 'show-details',
  template: `<h1>{{title}}</h1>
  	<h2><label>Employee Name: </label>{{employee.name}}</h2>
	<h2><label>Employee Designation: </label>{{employee.designation}}</h2>
	`
})

export class AppComponent {
	title = 'Employee Details';
	employee: Employee = {
		name: 'Mayank Gupta',
		designation: 'Senior Software Developer'
	}
}