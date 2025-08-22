import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Briefcase } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Project Alpha',
    description: 'A cutting-edge web application for data visualization.',
    imageUrl: 'https://placehold.co/600x400.png',
    hint: 'data visualization'
  },
  {
    title: 'Project Beta',
    description: 'A mobile app designed for seamless team collaboration.',
    imageUrl: 'https://placehold.co/600x400.png',
    hint: 'team collaboration'
  },
  {
    title: 'Project Gamma',
    description: 'An e-commerce platform with a focus on user experience.',
    imageUrl: 'https://placehold.co/600x400.png',
    hint: 'ecommerce platform'
  },
];

export function Portfolio() {
  return (
    <section>
      <div className="text-center mb-12">
        <Briefcase className="mx-auto h-12 w-12 text-primary mb-4" />
        <h2 className="text-3xl font-bold tracking-tight font-headline">Our Work</h2>
        <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
          Check out some of the amazing projects we've delivered.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <Card key={item.title} className="overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl flex flex-col group">
            <div className="overflow-hidden">
               <Image
                src={item.imageUrl}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={item.hint}
              />
            </div>
            <CardContent className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground flex-1">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
