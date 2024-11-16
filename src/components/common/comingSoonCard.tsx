'use client';

import { useEffect, useState } from 'react';

import { Sparkles } from 'lucide-react';

import { Card, CardContent, CardHeader } from '@/components/ui/card';

const ComingSoonCard = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Card className="mx-auto w-full max-w-md transform overflow-hidden transition-all duration-500 ease-in-out hover:scale-105">
      <CardHeader className="space-y-1 bg-gradient-to-r from-purple-500 to-pink-500 p-6">
        <div className="flex items-center justify-center space-x-2">
          <Sparkles className="h-8 w-8 text-yellow-300" />
          <h2 className="text-2xl font-bold text-white">Coming Soon</h2>
        </div>
      </CardHeader>
      <CardContent className="bg-white p-6 dark:bg-gray-800">
        <p className="text-center text-lg text-gray-600 dark:text-gray-300">
          Get ready for something amazing!
        </p>
        <div className="mt-4 flex justify-center">
          <div
            className={`h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000 ease-in-out ${mounted ? 'w-32' : 'w-16'}`}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ComingSoonCard;
