import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl font-headline">
        My test app
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
        Welcome to Landing Ace, where we turn your ideas into stunning, high-converting landing pages. Explore our features and see how we can help you succeed.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started Free</Button>
        <Button size="lg" variant="outline">Learn More</Button>
      </div>
    </section>
  );
}
