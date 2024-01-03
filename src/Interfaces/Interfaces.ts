export interface Category {
  id: number;
  name: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  status: string;
  by: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface Product {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  unidades: number;
  imagen: string;
}

export interface ProductInCart {
  id: number;
  nombre: string;
  categoria: string;
  cantidad: number;
  imagen: string;
  descripcion: string;
  precio: number;
}

export interface ProductCart {
  id: number;
  userId: number;
  title: string;
  description: string;
  brand: string;
  price: string;
  quantity: number;
  categoryId: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  productsInCart: {
    id: number;
    cartId: number;
    productId: number;
    quantity: number;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface SetProductGlobalAction {
  type: 'SET_PRODUCT_GLOBAL';
  payload: any; // Ajusta el tipo según la forma de tu estado
}

export interface InitialState {
  products: Product[]
}

export interface Compras {
  direccion: string;
  fechaComprada: Date,
  id: number,
  producto: Product,
  cantidad: number
}