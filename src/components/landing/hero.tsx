'use client';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

export function Hero() {
  const { user } = useAuth();
  const { toast } = useToast();

  const handleGetStartedClick = () => {
    if (!user) {
      toast({
        title: 'Authentication Required',
        description: 'Please sign in first to continue.',
        variant: 'destructive',
      });
    }
  };

  return (
    <section className="text-center">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl font-headline">
        My test app
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
        Welcome to Landing Ace, where we turn your ideas into stunning, high-converting landing pages. Explore our features and see how we can help you succeed.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        {user ? (
          <Link href="/welcome" passHref>
            <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started Free</Button>
          </Link>
        ) : (
          <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleGetStartedClick}>Get Started Free</Button>
        )}
        <Button size="lg" variant="outline">Learn More</Button>
      </div>
    </section>
  );
}
