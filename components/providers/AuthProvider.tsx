'use client';

import { ReactNode } from 'react';
import { AuthProvider as BaseAuthProvider } from '@/context/AuthContext';

export function AuthProvider({ children }: { children: ReactNode }) {
  return <BaseAuthProvider>{children}</BaseAuthProvider>;
} 