import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { City } from '@/data/cities';

interface CityHexagonProps {
  city: City;
  style: React.CSSProperties;
}

const CityHexagon = ({ city, style }: CityHexagonProps) => {
  const navigate = useNavigate();
  const [weather, setWeather] = useState<{ temp: number; icon: string } | null>(null);
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    setWeather({ temp: Math.floor(Math.random() * 30 - 10), icon: '🌤️' });
    
    const updateTime = () => {
      const now = new Date();
      const offset = city.lon / 15;
      const cityTime = new Date(now.getTime() + offset * 3600000);
      setTime(cityTime.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000);
    
    return () => clearInterval(interval);
  }, [city]);

  return (
    <div
      className="absolute cursor-pointer animate-fade-in hover:scale-110 transition-transform duration-300"
      style={style}
      onClick={() => navigate(`/city/${city.id}`)}
    >
      <div className="relative w-40 h-40 md:w-48 md:h-48 group">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id={`grad-${city.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.9 }} />
              <stop offset="50%" style={{ stopColor: 'hsl(var(--secondary))', stopOpacity: 0.9 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.9 }} />
            </linearGradient>
            <clipPath id={`hexClip-${city.id}`}>
              <polygon points="50,5 90,25 90,65 50,85 10,65 10,25" />
            </clipPath>
          </defs>
          
          <polygon
            points="50,5 90,25 90,65 50,85 10,65 10,25"
            fill={`url(#grad-${city.id})`}
            className="drop-shadow-2xl group-hover:drop-shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300"
          />
          
          <polygon
            points="50,5 90,25 90,65 50,85 10,65 10,25"
            fill="none"
            stroke="hsl(var(--foreground))"
            strokeWidth="0.5"
            className="opacity-30"
          />
        </svg>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-foreground p-4">
          <h3 className="font-bold text-sm md:text-base mb-1 text-center drop-shadow-lg">
            {city.name}
          </h3>
          
          {weather && (
            <div className="text-xl md:text-2xl font-semibold mb-1 drop-shadow-lg">
              {weather.icon} {weather.temp}°C
            </div>
          )}
          
          <div className="text-xs md:text-sm opacity-90 drop-shadow-lg">
            {time}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityHexagon;
