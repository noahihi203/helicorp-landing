'use client';
import { useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const STORAGE_KEY = 'pawcam_cart';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setItems(JSON.parse(saved));
    } catch {}
  }, []);

  const save = (newItems: CartItem[]) => {
    setItems(newItems);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems)); } catch {}
  };

  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    const existing = items.find(i => i.id === item.id);
    if (existing) {
      save(items.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      save([...items, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (id: string) => save(items.filter(i => i.id !== id));
  
  const clearCart = () => save([]);
  
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return { items, addItem, removeItem, clearCart, total };
}
