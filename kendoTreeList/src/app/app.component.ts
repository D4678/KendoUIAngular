import { Component, OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KENDO_TREELIST } from '@progress/kendo-angular-treelist';

import { HttpClientModule, HttpClientJsonpModule, HttpClient } from "@angular/common/http";
import { TreeListModule } from "@progress/kendo-angular-treelist";
import { CommonModule } from "@angular/common";
import { Observable } from 'rxjs';
import { Employee, employees } from './employee';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
     KENDO_TREELIST,
     CommonModule,
     HttpClientModule,
     HttpClientJsonpModule,
     TreeListModule,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent  {
  title = 'kendoTreeList';

  //1
//   public data: unknown[] = [
//     { id: 1, name: 'Daryl Sweeney', title: 'CEO', phone: '482-345-7925', managerId: null },
//     { id: 2, name: 'Guy Wooten', title: 'Chief Technical Officer', phone: '309-543-7814', managerId: 1 },
//     { id: 3, name: 'Priscilla Frank', title: 'Chief Operations Officer', phone: '175-298-9077', managerId: 1 },
//     { id: 4, name: 'Ursula Holmes', title: 'EVP, Product Strategy', phone: '121-292-2766', managerId: 3 }
// ];

// public rootData!: Observable<Employee[]>;
// private serviceUrl =
//   "https://demos.telerik.com/kendo-ui/service/EmployeeDirectory";

// constructor(private http: HttpClient) {}

// public ngOnInit(): void {
//   this.rootData = this.query();
// }

// public fetchChildren = (item: Employee): Observable<Employee[]> => {
//   return this.query(item.EmployeeId);
// };

// public hasChildren = (item: Employee): boolean => {
//   return item.hasChildren ?? false;
// };

// public query(reportsTo: number | null = null): Observable<Employee[]> {
//   return this.http.jsonp<Employee[]>(
//     `${this.serviceUrl}?id=${reportsTo ?? ''}`,
//     "callback"
//   );
// }
public data: Employee[] = employees;
}
