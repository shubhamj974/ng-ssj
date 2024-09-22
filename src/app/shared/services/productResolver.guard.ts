import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { ProductService } from './product.service';
import { Iproduct } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductResolverGuard implements Resolve<Iproduct> {
  constructor(private _ProductServices: ProductService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let productId = route.params['productID'];
    return this._ProductServices.getSingleProduct(productId);
  }
}
