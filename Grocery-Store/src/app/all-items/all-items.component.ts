import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit {
  allItems:any=[]
  searchTerm: string = '';

  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.getAllProducts().subscribe((result:any)=>{
      console.log(result);
      this.allItems = result.products


      
    })

    this.api.Searchdata.subscribe((result: any) => {
      console.log(result);
      console.log('ts');
      
      this.searchTerm = result;
    });
  }

}
