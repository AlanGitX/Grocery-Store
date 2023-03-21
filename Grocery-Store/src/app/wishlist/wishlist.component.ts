import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  WishlistItems:any=[]
  len:number=0;
  msg:string = ''
  content:boolean=false
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.getWishlist().subscribe((result: any) => {
      console.log(result.wishlist);
      this.WishlistItems=result.wishlist;
      this.len=result.wishlist.length

    });
  }

  removeFromWishlist(id:any){
    this.api.removeitemfromWishlist(id).subscribe((result:any)=>{
      console.log(result);
      this.WishlistItems=result.wishlist;
      this.len=result.wishlist.length


      
    })
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
