import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="bg-muted/50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Projects
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Innovative applications currently in development
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <Card className="relative overflow-hidden border-2 border-blueblood-blue-300 dark:border-blueblood-blue-700">
            <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-blueblood-blue-500/20 to-transparent blur-2xl" />
            <CardHeader>
              <div className="mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blueblood-gold-500" />
                <Badge className="bg-blueblood-gold-500 text-blueblood-blue-900 hover:bg-blueblood-gold-400">
                  Coming Soon
                </Badge>
              </div>
              <CardTitle className="text-2xl">Sports Fan Apps</CardTitle>
              <CardDescription className="text-base">
                Mobile applications for sports enthusiasts
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                We&apos;re developing cutting-edge mobile applications designed to revolutionize
                how sports fans engage with their favorite teams and games. Stay tuned for
                exciting announcements!
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-2 border-blueblood-gold-300 dark:border-blueblood-gold-500/30">
            <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-blueblood-gold-500/20 to-transparent blur-2xl" />
            <CardHeader>
              <div className="mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blueblood-blue-500" />
                <Badge
                  variant="secondary"
                  className="border border-blueblood-blue-300 dark:border-blueblood-blue-700"
                >
                  In Development
                </Badge>
              </div>
              <CardTitle className="text-2xl">More to Come</CardTitle>
              <CardDescription className="text-base">
                Future consumer applications
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                Beyond sports, we&apos;re exploring innovative ideas for consumer applications
                that solve real problems and create delightful user experiences. Watch this
                space for updates!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
