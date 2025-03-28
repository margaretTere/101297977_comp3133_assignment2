import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees = this.employeeService.employees;
  }
}
