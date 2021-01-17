import { IProduct } from "../product/product.interface";

export interface ICompany {
  id: string;
  name: string;
  product: IProduct;
}
