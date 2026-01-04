import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import CityHexagon from '@/components/CityHexagon';
import RussiaMap from '@/components/RussiaMap';
import { cities } from '@/data/cities';

const Home = () => {
  const [positions, setPositions] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    const generatePositions = () => {
      const newPositions: { top: string; left: string }[] = [];
      const used: Set<string> = new Set();
      
      cities.forEach(() => {
        let top, left, key;
        let attempts = 0;
        
        do {
          top = Math.floor(Math.random() * 85);
          left = Math.floor(Math.random() * 85);
          key = `${Math.floor(top / 10)}-${Math.floor(left / 10)}`;
          attempts++;
        } while (used.has(key) && attempts < 50);
        
        used.add(key);
        newPositions.push({
          top: `${top}%`,
          left: `${left}%`
        });
      });
      
      setPositions(newPositions);
    };

    generatePositions();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-float" />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Откройте Россию
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              31 город-миллионник в интерактивном формате
            </p>
          </div>

          <div className="mb-16">
            <RussiaMap />
          </div>

          <div className="relative w-full h-[1800px] md:h-[1400px]">
            {cities.map((city, index) => (
              positions[index] && (
                <CityHexagon
                  key={city.id}
                  city={city}
                  style={{
                    top: positions[index].top,
                    left: positions[index].left,
                    animationDelay: `${index * 0.05}s`
                  }}
                />
              )
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;