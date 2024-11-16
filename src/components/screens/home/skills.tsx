'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = {
  'Frontend Development': [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Material UI',
    'Redux',
    'HTML5',
    'CSS3',
  ],
  'Backend Development': [
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'REST APIs',
    'GraphQL',
    'JWT',
  ],
  'Tools & Technologies': [
    'Git',
    'VS Code',
    'Postman',
    'Figma',
    'Docker',
    'AWS',
    'Vercel',
    'Netlify',
  ],
};

const Skills = () => {
  return (
    <section className="bg-muted py-24" id="skills">
      <div className="container mx-auto px-4">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies I work with
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <Card
              key={category}
              className="group border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardContent className="pt-8">
                <h3 className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-center text-xl font-bold text-transparent">
                  {category}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 text-sm transition-colors group-hover:bg-primary/10"
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

export default Skills;
