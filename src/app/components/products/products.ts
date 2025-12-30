import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCard } from '../product-card/product-card';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

@Component({
  selector: 'app-products',
  imports: [RouterLink, ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  activeFilter = 'all';

  products: Product[] = [
    {
      id: 1,
      name: 'Sari Banarasi Rouge',
      price: 289,
      category: 'saris',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop',
      isNew: true,
    },
    {
      id: 2,
      name: 'Kurta Homme Brodé',
      price: 145,
      originalPrice: 175,
      category: 'kurtas',
      image: 'https://images.pexels.com/photos/13624143/pexels-photo-13624143.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
      isSale: true,
    },
    {
      id: 3,
      name: 'Lehenga Choli Doré',
      price: 459,
      category: 'lehengas',
      image: 'https://images.pexels.com/photos/35327109/pexels-photo-35327109.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    },
    {
      id: 4,
      name: 'Lehenga Mariage Rose',
      price: 599,
      originalPrice: 699,
      category: 'lehengas',
      image: 'https://images.pexels.com/photos/12796883/pexels-photo-12796883.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
      isSale: true,
    },
    {
      id: 5,
      name: 'Collier Opale Blanche',
      price: 125,
      category: 'accessoires',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop',
    },
  ];

  get filteredProducts(): Product[] {
    if (this.activeFilter === 'all') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.activeFilter);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}
