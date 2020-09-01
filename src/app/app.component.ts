import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from './services/products.service';

/**
 * @title Table with filtering
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front';
  displayedColumns;
  ELEMENT_DATA;
  dataSource;
  constructor(private products: ProductsService) {
    this.table();
  }

  table() {
    this.displayedColumns = ['name', 'price', 'category'];

    this.products.getProducts().subscribe(
      (data) => {
        console.log(data);
        this.ELEMENT_DATA = data;
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
