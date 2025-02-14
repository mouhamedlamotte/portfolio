"use client";


import { useRouter } from 'next/navigation';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {

    const router = useRouter()
  useEffect(() => {
    Prism.highlightAll();
  }, [router]);

  return <div>
    {children}
  </div>
}