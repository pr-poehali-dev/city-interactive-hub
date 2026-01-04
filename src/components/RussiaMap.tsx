import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cities } from '@/data/cities';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const RussiaMap = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const getCityPosition = (city: typeof cities[0]) => {
    const minLon = 20;
    const maxLon = 180;
    const minLat = 42;
    const maxLat = 70;
    
    const x = ((city.lon - minLon) / (maxLon - minLon)) * 100;
    const y = ((maxLat - city.lat) / (maxLat - minLat)) * 100;
    
    return { x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) };
  };

  const handleCityClick = (cityId: string) => {
    setSelectedCity(cityId);
    navigate(`/city/${cityId}`);
  };

  return (
    <Card className="w-full bg-card/50 backdrop-blur animate-scale-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="Map" className="text-primary" size={24} />
          Интерактивная карта России
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full bg-gradient-to-br from-muted/30 via-muted/20 to-muted/30 rounded-lg overflow-hidden" style={{ paddingBottom: '50%' }}>
          <div className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.1 }} />
                  <stop offset="50%" style={{ stopColor: 'hsl(var(--secondary))', stopOpacity: 0.1 }} />
                  <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.1 }} />
                </linearGradient>
              </defs>
              
              <rect width="100" height="100" fill="url(#mapGradient)" />
              
              <path
                d="M10,30 L90,30 L90,70 L70,75 L50,70 L30,72 L10,68 Z"
                fill="hsl(var(--muted))"
                opacity="0.3"
                className="transition-opacity hover:opacity-50"
              />

              {cities.map((city) => {
                const pos = getCityPosition(city);
                const isHovered = hoveredCity === city.id;
                const isSelected = selectedCity === city.id;
                
                return (
                  <g
                    key={city.id}
                    onMouseEnter={() => setHoveredCity(city.id)}
                    onMouseLeave={() => setHoveredCity(null)}
                    onClick={() => handleCityClick(city.id)}
                    className="cursor-pointer"
                  >
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isHovered || isSelected ? 2 : 1.5}
                      className="transition-all duration-300"
                      fill={isHovered ? 'hsl(var(--secondary))' : isSelected ? 'hsl(var(--accent))' : 'hsl(var(--primary))'}
                      opacity={isHovered || isSelected ? 1 : 0.8}
                    />
                    
                    {isHovered && (
                      <>
                        <circle
                          cx={pos.x}
                          cy={pos.y}
                          r={3}
                          fill="none"
                          stroke="hsl(var(--secondary))"
                          strokeWidth="0.3"
                          opacity="0.5"
                          className="animate-ping"
                        />
                        <text
                          x={pos.x}
                          y={pos.y - 3}
                          textAnchor="middle"
                          fill="hsl(var(--foreground))"
                          fontSize="2"
                          fontWeight="bold"
                          className="pointer-events-none"
                        >
                          {city.name}
                        </text>
                      </>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2">
          {cities.slice(0, 8).map((city) => (
            <Button
              key={city.id}
              variant="ghost"
              size="sm"
              className="text-xs hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20"
              onClick={() => handleCityClick(city.id)}
            >
              {city.name}
            </Button>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center mt-4">
          Наведите на точку или кликните для перехода к городу
        </p>
      </CardContent>
    </Card>
  );
};

export default RussiaMap;
