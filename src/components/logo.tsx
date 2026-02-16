import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Logo() {
  return (
    <Link
      href="/"
      className="text-2xl font-bold bg-gradient-to-r from-blueblood-blue-600 to-blueblood-gold-400 bg-clip-text text-transparent hover:from-blueblood-blue-500 hover:to-blueblood-gold-300 transition-all"
    >
      {siteConfig.name}
    </Link>
  );
}
