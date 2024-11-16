'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'KCD Dhaka',
    duration: '2023',
    description:
      'Led development of landing page using Next.js and Tailwind CSS. Implemented responsive design and modern UI components.',
    skills: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Flavor Fusion',
    duration: '2023',
    description:
      'Built full-stack restaurant management system with Next.js, Node.js and MongoDB. Implemented user authentication, order management and admin dashboard.',
    skills: ['Next.js', 'Node.js', 'MongoDB', 'JWT'],
  },
];

const Experience = () => {
  return (
    <section
      className="bg-gradient-to-t from-muted to-background px-4 py-24"
      id="experience"
    >
      <div className="container mx-auto">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            My professional journey and projects
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {experiences.map((exp, i) => (
            <Card
              key={i}
              className="group border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardHeader>
                <CardTitle className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <p className="text-lg font-medium text-muted-foreground">
                      {exp.company}
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    {exp.duration}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="group-hover:bg-primary/10"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
