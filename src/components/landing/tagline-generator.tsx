'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from 'react';
import { generateTagline } from '@/ai/flows/generate-tagline';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Wand2, Sparkles } from 'lucide-react';

const formSchema = z.object({
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }).max(200, {
    message: "Description must not exceed 200 characters.",
  }),
});

export function TaglineGenerator() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [generatedTagline, setGeneratedTagline] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedTagline('');
    try {
      const result = await generateTagline({ description: values.description });
      setGeneratedTagline(result.tagline);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with generating the tagline. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="mx-auto max-w-3xl">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <Wand2 className="mx-auto h-12 w-12 text-accent mb-4" />
          <CardTitle className="text-3xl font-bold font-headline">Generate a Tagline with AI</CardTitle>
          <CardDescription className="mt-2 text-lg">
            Describe your app or business, and our AI will create a catchy tagline for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., A mobile app that helps users find the best local coffee shops."
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Tagline
                  </>
                )}
              </Button>
            </form>
          </Form>

          {(isLoading || generatedTagline) && (
            <div className="mt-6 rounded-lg border bg-secondary/50 p-6 text-center">
              {isLoading && <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />}
              {generatedTagline && !isLoading && (
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Your new tagline:</h3>
                  <p className="mt-2 text-2xl font-bold text-primary">
                    "{generatedTagline}"
                  </p>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
