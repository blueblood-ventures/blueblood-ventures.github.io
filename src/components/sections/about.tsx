import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig } from '@/config/site';

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            About Us
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            We&apos;re building the future of sports fan engagement
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-8">
          <Card className="border-blueblood-blue-200 dark:border-blueblood-blue-800">
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                At Blueblood Ventures, we&apos;re passionate about creating innovative mobile
                applications that enhance the sports fan experience. Our focus is on
                building tools and platforms that bring fans closer to the games they love.
              </p>
              <p>
                We believe that technology should amplify the excitement of sports, making
                it easier for fans to connect, engage, and share their passion with others.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blueblood-gold-300 dark:border-blueblood-gold-500/30">
            <CardHeader>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                While our current focus is on sports applications, we&apos;re exploring
                opportunities to expand into other consumer applications that solve
                real problems and delight users.
              </p>
              <p>
                Founded by {siteConfig.founder}, Blueblood Ventures combines creative
                thinking with technical excellence to build products that users love.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
