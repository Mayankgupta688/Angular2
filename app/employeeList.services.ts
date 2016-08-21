import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable()
export class EmployeeList {
	getList(): Employee[] {
		return [
		  	{ name: "Mayank", designation: 'Mr. Nice' },
		  	{ name: "Ankit", designation: 'Narco' },
		  	{ name: "Anshul", designation: 'Bombasto' },
		  	{ name: "Meha", designation: 'Celeritas' },
		  	{ name: "Aakash", designation: 'Magneta' },
		  	{ name: "Aniket", designation: 'RubberMan' },
		]
	}
}