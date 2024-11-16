
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [];

  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }

  addEmployee(employee: Employee): void {
    employee.id = this.employees.length + 1;
    this.employees.push(employee);
  }

  updateEmployee(employee: Employee): void {
    const index = this.employees.findIndex(e => e.id === employee.id);
    if (index > -1) {
      this.employees[index] = employee;
    }
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter(e => e.id !== id);
  }
}
