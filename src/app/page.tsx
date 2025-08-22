import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/landing/hero";
import { Portfolio } from "@/components/landing/portfolio";
import { Testimonials } from "@/components/landing/testimonials";
import { Contact } from "@/components/landing/contact";
import { TaglineGenerator } from "@/components/landing/tagline-generator";
import ScrollFadeIn from "@/components/scroll-fade-in";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 md:py-24 space-y-24 md:space-y-32">
          <ScrollFadeIn>
            <Hero />
          </ScrollFadeIn>
          <ScrollFadeIn>
            <TaglineGenerator />
          </ScrollFadeIn>
          <ScrollFadeIn>
            <Portfolio />
          </ScrollFadeIn>
          <ScrollFadeIn>
            <Testimonials />
          </ScrollFadeIn>
          <ScrollFadeIn>
            <Contact />
          </ScrollFadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
}
