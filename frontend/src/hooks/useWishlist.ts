'use client';
import { useState, useEffect } from 'react';

const KEY = 'pawcam_wishlist';

export function useWishlist() {
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved) setWishlist(JSON.parse(saved));
    } catch {}
  }, []);

  const save = (items: string[]) => {
    setWishlist(items);
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
  };

  const toggle = (id: string) => {
    if (wishlist.includes(id)) save(wishlist.filter(i => i !== id));
    else save([...wishlist, id]);
  };

  const isWishlisted = (id: string) => wishlist.includes(id);

  return { wishlist, toggle, isWishlisted };
}
