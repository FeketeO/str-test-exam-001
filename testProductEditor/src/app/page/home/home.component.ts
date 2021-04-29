import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list$: Observable<Product[]> = this.productService.getAll();

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }



  onDelete(product: Product): void {
    // tslint:disable-next-line: deprecation
    this.productService.delete(product.id).subscribe(
      product => this.list$ = this.productService.getAll()
    );
  }



}
