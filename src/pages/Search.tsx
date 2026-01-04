import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { cities } from '@/data/cities';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Search = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState(cities);

  useEffect(() => {
    const searchQuery = query.toLowerCase().trim();
    
    if (!searchQuery) {
      setResults(cities);
      return;
    }

    const filtered = cities.filter(city => 
      city.name.toLowerCase().includes(searchQuery) ||
      city.region.toLowerCase().includes(searchQuery) ||
      city.description.toLowerCase().includes(searchQuery)
    );
    
    setResults(filtered);
  }, [query]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Поиск городов
            </h1>
            
            <div className="relative">
              <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="search"
                placeholder="Введите название города или региона..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-card"
              />
            </div>
          </div>

          <div className="mb-6">
            <p className="text-muted-foreground">
              Найдено городов: <span className="font-semibold text-foreground">{results.length}</span>
            </p>
          </div>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((city, index) => (
                <Card
                  key={city.id}
                  className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in bg-card/50 backdrop-blur"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => navigate(`/city/${city.id}`)}
                >
                  <div className="h-32 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white drop-shadow-2xl">
                        {city.name}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
                      <Icon name="MapPin" size={14} />
                      {city.region}
                    </p>
                    <p className="text-sm line-clamp-2">{city.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 animate-fade-in">
              <Icon name="SearchX" className="mx-auto text-muted-foreground mb-4" size={64} />
              <h2 className="text-2xl font-semibold mb-2">Ничего не найдено</h2>
              <p className="text-muted-foreground">
                Попробуйте изменить поисковый запрос
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Search;
