import Link from 'next/link';

import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="flex items-center bg-background py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <Link
              href="/"
              className="from-primary-200 to-secondary-200 bg-gradient-to-r bg-clip-text font-semibold text-transparent"
            >
              Idea Hub
            </Link>
            <Separator orientation="vertical" className="hidden h-5 md:block" />
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Idea Hub. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 text-xs">
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
