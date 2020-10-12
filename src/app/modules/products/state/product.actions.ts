import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Product, PaginatedResult } from '../resources/product';

/****************************************************************** */
/*****LOAD PRODUCTS ** */
/****************************************************************** */
export const loadProducts = createAction(
  '[Products Component] Load Products',
  props<{ url: string }>()
);

export const loadAdminProducts = createAction(
  '[Products List Component] Load Products',
  props<{ url: string }>()
);

export const loadProductsSuccess = createAction(
  '[Product Effect] Load Products Success',
  props<{ paginatedResult: PaginatedResult<Product[]> }>()
);

export const loadProductsFailure = createAction(
  '[Products Component] Load Products Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****LOAD INDIVIDUAL PRODUCT ** */
/****************************************************************** */

export const loadProduct = createAction(
  '[Product View Component] Load Product',
  props<{ id: string }>()
);

export const loadAdminProduct = createAction(
  '[Product Item Component] Load Product',
  props<{ id: string }>()
);

export const loadProductSuccess = createAction(
  '[Product Effect] Load Product Success',
  props<{ product: Product }>()
);

export const loadProductFailure = createAction(
  '[Product Effect] Load Product Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****ADD INDIVIDUAL PRODUCT ** */
/****************************************************************** */

export const addProduct = createAction(
  '[Product Add Component] Add Product',
  props<{ product: Product }>()
);

export const addProductSuccess = createAction(
  '[Product Effect] Add Product Success',
  props<{ product: Product }>()
);

export const addProductFailure = createAction(
  '[Product Effect] Add Product Failure',
  props<{ error: any }>()
);

export const upsertProduct = createAction(
  '[Product/API] Upsert Product',
  props<{ product: Product }>()
);

export const addProducts = createAction(
  '[Product/API] Add Products',
  props<{ products: Product[] }>()
);

export const upsertProducts = createAction(
  '[Product/API] Upsert Products',
  props<{ products: Product[] }>()
);

export const updateProduct = createAction(
  '[Product/API] Update Product',
  props<{ product: Update<Product> }>()
);

export const updateProducts = createAction(
  '[Product/API] Update Products',
  props<{ products: Update<Product>[] }>()
);

export const deleteProduct = createAction(
  '[Product/API] Delete Product',
  props<{ id: string }>()
);

export const deleteProducts = createAction(
  '[Product/API] Delete Products',
  props<{ ids: string[] }>()
);

export const clearProducts = createAction('[Product/API] Clear Products');
