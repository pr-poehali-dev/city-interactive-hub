import Header from '@/components/Header';
import { cities } from '@/data/cities';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Галерея городов
            </h1>
            <p className="text-xl text-muted-foreground">
              Все города-миллионники России в одном месте
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cities.map((city, index) => (
              <Card
                key={city.id}
                className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in bg-card/50 backdrop-blur"
                style={{ animationDelay: `${index * 0.03}s` }}
                onClick={() => navigate(`/city/${city.id}`)}
              >
                <div className="h-48 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white drop-shadow-2xl">
                      {city.name}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-2">{city.region}</p>
                  <p className="text-sm line-clamp-2">{city.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
