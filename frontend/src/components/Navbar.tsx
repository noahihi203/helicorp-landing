'use client';
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { Moon, Sun, ShoppingCart, Heart, Menu, X } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { items } = useCart();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Tính năng' },
    { href: '#specs', label: 'Thông số' },
    { href: '#reviews', label: 'Đánh giá' },
    { href: '#subscribe', label: 'Đặt mua' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? '12px 0' : '20px 0',
      background: scrolled ? 'rgba(var(--background-rgb, 255,255,255), 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.3s ease',
      backgroundColor: scrolled ? 'var(--card)' : 'transparent',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{
            width: 36, height: 36, borderRadius: '10px',
            background: 'linear-gradient(135deg, #ff6b35, #e85a25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 700, fontSize: '14px'
          }}>P</div>
          <span style={{ fontWeight: 700, fontSize: '18px', color: 'var(--foreground)' }}>
            PawCam<span style={{ color: '#ff6b35' }}>Pro</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="hidden-mobile">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} style={{
              textDecoration: 'none', color: 'var(--muted-foreground)',
              fontWeight: 500, fontSize: '14px', transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.target as HTMLElement).style.color = '#ff6b35'}
            onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--muted-foreground)'}
            >{link.label}</a>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={toggle} style={{
            background: 'none', border: '1px solid var(--border)',
            borderRadius: '8px', padding: '8px', cursor: 'pointer',
            color: 'var(--foreground)', display: 'flex', alignItems: 'center',
          }}>
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button style={{
            background: 'none', border: '1px solid var(--border)',
            borderRadius: '8px', padding: '8px', cursor: 'pointer',
            color: 'var(--foreground)', display: 'flex', alignItems: 'center', position: 'relative',
          }}>
            <ShoppingCart size={16} />
            {items.length > 0 && (
              <span style={{
                position: 'absolute', top: '-6px', right: '-6px',
                background: '#ff6b35', color: 'white', borderRadius: '50%',
                width: '18px', height: '18px', fontSize: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700,
              }}>{items.length}</span>
            )}
          </button>

          <a href="#subscribe" style={{
            background: 'linear-gradient(135deg, #ff6b35, #e85a25)',
            color: 'white', padding: '10px 20px', borderRadius: '8px',
            textDecoration: 'none', fontWeight: 600, fontSize: '14px',
            transition: 'opacity 0.2s',
          }}
          className="hidden-mobile"
          >Đặt trước</a>

          <button onClick={() => setMobileOpen(!mobileOpen)} style={{
            background: 'none', border: 'none', cursor: 'pointer', color: 'var(--foreground)',
            display: 'none',
          }} className="show-mobile">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'var(--card)', borderBottom: '1px solid var(--border)',
          padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '16px',
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{
              textDecoration: 'none', color: 'var(--foreground)', fontWeight: 500,
            }}>{link.label}</a>
          ))}
          <a href="#subscribe" style={{
            background: 'linear-gradient(135deg, #ff6b35, #e85a25)',
            color: 'white', padding: '12px 20px', borderRadius: '8px',
            textDecoration: 'none', fontWeight: 600, textAlign: 'center',
          }}>Đặt trước ngay</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}