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
      name: 'Collier Aurore Dorée',
      price: 189,
      category: 'colliers',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop',
      isNew: true,
    },
    {
      id: 2,
      name: 'Bague Éclat de Lune',
      price: 145,
      originalPrice: 175,
      category: 'bagues',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=500&fit=crop',
      isSale: true,
    },
    {
      id: 3,
      name: 'Bracelet Symphonie',
      price: 129,
      category: 'bracelets',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=500&fit=crop',
    },
    {
      id: 4,
      name: 'Boucles Étoile du Soir',
      price: 95,
      category: 'boucles',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop',
      isNew: true,
    },
    {
      id: 5,
      name: 'Collier Cascade Précieuse',
      price: 245,
      category: 'colliers',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop',
    },
    {
      id: 6,
      name: 'Bague Fleur Céleste',
      price: 165,
      category: 'bagues',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=500&fit=crop',
    },
    {
      id: 7,
      name: 'Bracelet Harmonie',
      price: 115,
      originalPrice: 140,
      category: 'bracelets',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=500&fit=crop',
      isSale: true,
    },
    {
      id: 8,
      name: 'Boucles Pétales d\'Or',
      price: 110,
      category: 'boucles',
      image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=500&fit=crop',
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
