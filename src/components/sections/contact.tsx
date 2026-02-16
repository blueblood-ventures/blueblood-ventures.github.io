import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Interested in learning more about our work? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="mx-auto max-w-md">
          <Card className="border-2 border-blueblood-blue-300 dark:border-blueblood-blue-700">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Contact Us</CardTitle>
              <CardDescription>
                Reach out to discuss partnerships, opportunities, or just to say hello
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blueblood-blue-100 dark:bg-blueblood-blue-900">
                <Mail className="h-8 w-8 text-blueblood-blue-600 dark:text-blueblood-blue-400" />
              </div>
              <div className="text-center">
                <p className="mb-2 text-sm text-muted-foreground">Email us at</p>
                <a
                  href={siteConfig.links.email}
                  className="text-lg font-medium text-blueblood-blue-600 hover:text-blueblood-blue-700 dark:text-blueblood-blue-400 dark:hover:text-blueblood-blue-300"
                >
                  {siteConfig.email}
                </a>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full bg-blueblood-blue-600 hover:bg-blueblood-blue-700"
              >
                <a href={siteConfig.links.email}>
                  <Mail className="mr-2 h-5 w-5" />
                  Send an Email
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
