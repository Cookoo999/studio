import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jennings',
    title: 'CEO, Innovate Inc.',
    quote: "Landing Ace transformed our online presence. The new landing page is both beautiful and effective. We've seen a 40% increase in conversions!",
    avatar: 'https://placehold.co/40x40.png',
    hint: 'woman portrait'
  },
  {
    name: 'Michael Chen',
    title: 'Marketing Director, Tech Solutions',
    quote: "The process was seamless from start to finish. The team at Landing Ace understood our vision and delivered beyond our expectations.",
    avatar: 'https://placehold.co/40x40.png',
    hint: 'man portrait'
  },
  {
    name: 'Emily Carter',
    title: 'Founder, Creative Co.',
    quote: "I'm thrilled with the result. The AI tagline generator is a game-changer, and the design is top-notch. Highly recommended!",
    avatar: 'https://placehold.co/40x40.png',
    hint: 'woman professional'
  },
];

export function Testimonials() {
  return (
    <section>
      <div className="text-center mb-12">
        <MessageSquare className="mx-auto h-12 w-12 text-primary mb-4" />
        <h2 className="text-3xl font-bold tracking-tight font-headline">What Our Clients Say</h2>
        <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
          We're trusted by innovators and market leaders.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="flex flex-col bg-card">
            <CardContent className="p-8 flex-1 flex flex-col justify-between">
              <blockquote className="italic text-lg mb-6 flex-1">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
