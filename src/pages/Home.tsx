import Header from '@/components/Header';
import RussiaMap from '@/components/RussiaMap';
import { cities } from '@/data/cities';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const cityImages: Record<string, string> = {
  'moscow': 'https://cdn.poehali.dev/projects/4381f2ad-ee6d-4c72-b9f3-e793391cea48/files/ce7f6885-3d77-4f5c-9b0e-c0539b56a8ec.jpg',
  'saint-petersburg': 'https://cdn.poehali.dev/projects/4381f2ad-ee6d-4c72-b9f3-e793391cea48/files/038370c4-7a01-43d8-b61d-9c7e85ef05b1.jpg',
  'kazan': 'https://cdn.poehali.dev/projects/4381f2ad-ee6d-4c72-b9f3-e793391cea48/files/0af1a36e-4dc6-471d-805b-df3b8a345318.jpg',
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 py-20">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Откройте Россию
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                31 город-миллионник • Интерактивная карта • История и культура
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="mb-16 animate-scale-in">
            <RussiaMap />
          </div>

          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Города России
            </h2>
            <p className="text-muted-foreground text-lg">
              Исследуйте крупнейшие города страны
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => {
              const hasImage = cityImages[city.id];
              const delay = index * 50;
              
              return (
                <Card 
                  key={city.id} 
                  className="group overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fade-in border-border/50 backdrop-blur"
                  style={{ animationDelay: `${delay}ms` }}
                  onClick={() => navigate(`/city/${city.id}`)}
                >
                  {hasImage && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={cityImages[city.id]} 
                        alt={city.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                      <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur">
                        {city.region}
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between group-hover:text-primary transition-colors">
                      <span className="text-2xl">{city.name}</span>
                      <Icon name="MapPin" size={20} className="text-secondary" />
                    </CardTitle>
                    {!hasImage && (
                      <Badge variant="outline" className="w-fit">
                        {city.region}
                      </Badge>
                    )}
                    <CardDescription className="text-base line-clamp-2">
                      {city.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Landmark" size={16} className="text-accent" />
                          Достопримечательности:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {city.attractions.slice(0, 3).map((attr, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {attr}
                            </Badge>
                          ))}
                          {city.attractions.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{city.attractions.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/city/${city.id}`);
                        }}
                      >
                        Подробнее
                        <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 mt-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Начните путешествие
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Выберите город на карте или в списке, чтобы узнать больше о его истории, культуре и достопримечательностях
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => navigate('/gallery')}>
                <Icon name="Image" className="mr-2" />
                Галерея
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/about')}>
                <Icon name="Info" className="mr-2" />
                О проекте
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
