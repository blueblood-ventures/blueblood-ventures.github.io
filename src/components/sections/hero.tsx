import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-gradient-to-br from-blueblood-blue-600 via-blueblood-blue-700 to-blueblood-blue-900 text-white"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blueblood-gold-500/20 via-transparent to-transparent animate-pulse" />

      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-white to-blueblood-gold-200 bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100 sm:text-xl md:text-2xl">
          {siteConfig.description}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-blueblood-gold-500 text-blueblood-blue-900 hover:bg-blueblood-gold-400"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            <a href="#about">Learn More</a>
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
