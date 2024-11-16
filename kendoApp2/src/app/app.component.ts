import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from "./product.service";
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query'; 
import { categories, Category } from "./data.categories";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected styleUrls
  providers: [ProductService]
})
export class AppComponent {
  title = 'kendoApp2';
  public dropDownItems: Category[] = categories;
    public defaultItem: Category = { text: "Filter by Category", value: null };

    public handleFilterChange(item: Category): void {
      this.filterTerm = item.value;
      this.skip = 0;
      this.loadGridItems();
    }
  

  public gridItems: Observable<GridDataResult> | undefined;
  public pageSize: number = 10;
  public skip: number = 0;
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm: number | null = null;

  constructor(private service: ProductService) {
    this.loadGridItems();
  }

  public pageChange(event: PageChangeEvent): void {  // Ensure event is of type PageChangeEvent
    this.skip = event.skip;
    this.loadGridItems();
  }

  public handleSortChange(descriptor: SortDescriptor[]): void {
    this.sortDescriptor = descriptor;
    this.loadGridItems();
  }

  private loadGridItems(): void {
    this.gridItems = this.service.getProducts(
      this.skip,
      this.pageSize,
      this.sortDescriptor,
      this.filterTerm
    );
  }
}
