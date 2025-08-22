import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="mr-4 flex items-center">
          <Rocket className="mr-2 h-6 w-6 text-primary" />
          <span className="font-bold">Landing Ace</span>
        </div>
        <nav>
          <Button>Get Started</Button>
        </nav>
      </div>
    </header>
  );
}
