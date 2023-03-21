import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:any=[]
  len:number=0;
  GrandTotal:any = 0
  total:any=0

  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.getCart().subscribe((result:any)=>{
      console.log(result);
      this.cart = result.Cart
      console.log(this.cart);
      this.getTotal()
      this.total=this.getTotal()
      this.GrandTotal = this.getTotal()+5
      this.len=this.cart.length

      
      
    })
  }

  removeFromWishlist(id:any){
    this.api.removeitemfromCart(id).subscribe((result:any)=>{
      console.log(result);
      this.cart=result.Cart;
      this.getTotal()
      this.total=this.getTotal()
      this.GrandTotal = this.getTotal()+5
      this.len=this.cart.length

      
    })
  }


  getTotal(){
    let total = 0;
    console.log(this.cart);
    this.cart.map((item:any)=>{
      total += item.price
      console.log(total);
      
    })
    return total;
    
  
  }

}
