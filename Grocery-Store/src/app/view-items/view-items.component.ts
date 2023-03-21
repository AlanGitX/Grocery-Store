import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit{
  routerSub:any
  id:any
  product:any=[]
  content:boolean=false
  msg:string=''
  constructor(private route: ActivatedRoute, private api: ApiService){}
  ngOnInit(): void {
    this.routerSub = this.route.params.subscribe((params) => {
      console.log(params);
      this.id = params['id']
  });
  this.api.viewProducts(this.id).subscribe((result: any) => {
    console.log(result);
    this.product = result.product
    console.log(this.product);
    

  })
}

AddToWishlist(product:any){
  this.api.AdditemWishlist(product).subscribe((value:any)=>{
    console.log(value.message);
    this.msg=value.message
    this.content = true

    
  },
  (value:any)=>{
    console.log(value.error.message);
    this.msg=value.error.message
    this.content = true


    
  })
  setTimeout(() => {
    this.content = false
    
  }, 4000);
  
}


AddToCart(product:any){
  this.api.AdditemCart(product).subscribe((value:any)=>{
    console.log(value.message);
    this.msg=value.message
    this.content = true

    
  },
  (value:any)=>{
    console.log(value.error.message);
    this.msg=value.error.message
    this.content = true


    
  })
  setTimeout(() => {
    this.content = false
    
  }, 4000);

}
}
