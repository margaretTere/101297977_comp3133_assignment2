import { Injectable } from '@angular/core';

export type Employee = {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  designation: string;
  salary: number;
  date_of_joining: string;
  department: string;
  employee_photo: string;
  created_at: string;
  updated_at: string;
};
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [
    {
      _id: '1kwod',
      first_name: "David",
      last_name: "Huffman",
      email: "david@huf@gmail.com",
      gender: "F",
      designation: "manager",
      salary: 180000,
      date_of_joining: '19970107',
      department: "computers",
      employee_photo: "dh.jpg",
      created_at: "20250303",
      updated_at: "20250303"
    },
    {
      _id: '1k9od',
      first_name: "Maddie",
      last_name: "Huffman",
      email: "madie@huf@gmail.com",
      gender: "M",
      designation: "reception",
      salary: 2000,
      date_of_joining: '19920107',
      department: "computers",
      employee_photo: "mh.jpg",
      created_at: "20200203",
      updated_at: "20220203"
    },
    {
      _id: '1p9od',
      first_name: "Eugene",
      last_name: "Tere",
      email: "eu@te@gmail.com",
      gender: "M",
      designation: "programmer",
      salary: 1000,
      date_of_joining: '20050109',
      department: "computers",
      employee_photo: "et.jpg",
      created_at: "20240903",
      updated_at: "20250203"
    }

  ];

  constructor() { }
}
