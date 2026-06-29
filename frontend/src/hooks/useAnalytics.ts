'use client';
import { useEffect, useCallback } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

export function useAnalytics() {
  const track = useCallback(async (event: string, data?: Record<string, unknown>) => {
    try {
      await fetch(`${API_URL}/analytics/track`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event, page: 'landing', data }),
      });
    } catch {}
  }, []);

  useEffect(() => {
    // Track scroll depth
    const milestones = new Set<number>();
    const handleScroll = () => {
      const depth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      [25, 50, 75, 90].forEach(milestone => {
        if (depth >= milestone && !milestones.has(milestone)) {
          milestones.add(milestone);
          track('scroll_depth', { depth: milestone });
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [track]);

  return { track };
}
