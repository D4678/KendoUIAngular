import { Component } from '@angular/core';
import { Observable } from 'rxjs'; // Import Observable
import { CommonModule } from '@angular/common';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns'; 
import { Category,categories } from './data.categories';
import { provideAnimations } from '@angular/platform-browser/animations'; 
import { GridDataResult } from '@progress/kendo-angular-grid'; // Import GridDataResult
import { ProductService } from './product.service';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { GridModule } from '@progress/kendo-angular-grid';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DateInputsModule, GridModule, CommonModule, DropDownsModule],
  providers: [ProductService, provideAnimations()],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected styleUrls
})
export class AppComponent {
  public dropDownItems: Category[] = categories;
  public defaultItem: Category = { text: "Filter by Category", value: null };

  title = 'kendo-angular-app';
  public gridItems: Observable<GridDataResult> | undefined;
  public pageSize: number = 10;
  public skip: number = 0;
  public sortDescriptor: any[] = [];
  public filterTerm: number | null = null;

  constructor(private service: ProductService) {
    this.loadGridItems();
  }

  public pageChange(event: any): void {
    this.skip = event.skip;
    this.loadGridItems();
  }

  public handleSortChange(descriptor: any[]): void {
    this.sortDescriptor = descriptor;
    this.loadGridItems();
  }

  private loadGridItems(): void {
    this.gridItems = this.service.getProducts(this.skip, this.pageSize, this.sortDescriptor, this.filterTerm);
  }
}
