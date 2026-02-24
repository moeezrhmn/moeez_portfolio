'use client';

import dynamic from 'next/dynamic';

// ssr: false must live in a Client Component — cannot be used in Server Components
export const Terminal = dynamic(() => import('./Terminal'), { ssr: false });
export const BackgroundEffects = dynamic(() => import('./BackgroundEffects'), { ssr: false });
