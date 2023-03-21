import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllItemsComponent } from './all-items/all-items.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewItemsComponent } from './view-items/view-items.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path:'', component:AllItemsComponent
  },
  {
    path:'items', component:AllItemsComponent
  },
  {
    path:'view/:id', component:ViewItemsComponent
  },
  {
    path:'wishlist', component:WishlistComponent
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path:'**', component:PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
