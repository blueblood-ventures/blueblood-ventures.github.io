import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © 2026 {siteConfig.name} LLC. All rights reserved.
        </p>
        <Link
          href={siteConfig.links.email}
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {siteConfig.email}
        </Link>
      </div>
    </footer>
  );
}
