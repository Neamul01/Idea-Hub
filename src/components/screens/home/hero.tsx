'use client';

import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 bg-gradient-to-t from-background to-muted px-4 py-24 text-center">
      <div className="animate-fade-in max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold md:text-7xl">
            <span className="animate-gradient bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Neamul Haque
            </span>
          </h1>
          <p className="text-xl font-light text-muted-foreground md:text-3xl">
            Full Stack Developer specializing in modern web technologies
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <Button
            variant="default"
            size="lg"
            className="group transition-all duration-300 hover:scale-105"
            asChild
          >
            <a
              href="mailto:neamulhaque3298@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <MailIcon className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Contact Me
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="group transition-all duration-300 hover:scale-105 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            asChild
          >
            <a
              href="https://github.com/Neamul01"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
              GitHub
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="group transition-all duration-300 hover:scale-105 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            asChild
          >
            <a
              href="http://www.linkedin.com/in/neamul62"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon className="mr-2 h-5 w-5 transition-colors group-hover:text-blue-500" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
