import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { Productcategory } from 'src/app/common/productcategory';
import { ProductmanagementService } from 'src/app/services/productmanagement.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-proform',
  templateUrl: './proform.component.html',
  styleUrls: ['./proform.component.css']
})
export class ProformComponent implements OnInit {

  product : Product = new Product(0,"","","",0,"",0,new Date,new Date,0)
  productcategories : Productcategory[]
  constructor(private service : ProductmanagementService,
    private route : Router) { }

  ngOnInit(): void {
    this.listOfCategory
  }

  listOfCategory(){
    this.service.getAllProductCategory().subscribe(data => {
      this.productcategories = data
    })
  }

  onSubmit(): void{
    this.service.saveProduct(this.product).subscribe(() =>{
      this.route.navigateByUrl("/shop")
    })
  }

  gotoHome(){
    this.route.navigateByUrl("/")
  }
  viewProduct(){
    this.route.navigateByUrl("/shop")
  }

}
