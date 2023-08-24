import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  dataList = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'price', 'action']

  constructor(private produsctService: ProductService) { }

  ngOnInit(): void {
    this.produsctService.read().subscribe(products => {
      // this.products = products
      // console.log(products)
      this.dataList.data = products
    }, error => {
      console.log(error())
    })
    
  }

}
