import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Searchdata = new BehaviorSubject('')


  constructor(private http:HttpClient) { }


  getAllProducts(){
    return  this.http.get('http://localhost:3000/all-items')
  
    //get items on view items. 
  
    
    }

    viewProducts(id:any){
      return  this.http.get('http://localhost:3000/view/'+id)
    }

    AdditemWishlist(product:any){
      return  this.http.post('http://localhost:3000/add-to-wishlist',product) 
    }

    getWishlist(){
      return  this.http.get('http://localhost:3000/get-wishlist')
    }

    removeitemfromWishlist(productId:any){
      return  this.http.delete('http://localhost:3000/remove-item-wishlist/'+productId)

    }

    getCart(){
      return  this.http.get('http://localhost:3000/get-cart')
    }

    AdditemCart(product:any){
      return  this.http.post('http://localhost:3000/add-to-cart',product) 
    }

    removeitemfromCart(productId:any){
      return  this.http.delete('http://localhost:3000/remove-item-cart/'+productId)

    }
}
