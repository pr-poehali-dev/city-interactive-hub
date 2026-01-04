import { useParams, useNavigate } from 'react-router-dom';
import { cities } from '@/data/cities';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const CityPage = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const navigate = useNavigate();
  const city = cities.find(c => c.id === cityId);

  if (!city) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Город не найден</h2>
          <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

  const mockNews = [
    { title: 'Открытие нового культурного центра', date: '2 дня назад', source: 'Местные новости' },
    { title: 'Городские власти анонсировали новый парк', date: '5 дней назад', source: 'Новости региона' },
    { title: 'Фестиваль искусств привлек тысячи гостей', date: '1 неделю назад', source: 'Культура' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center animate-fade-in">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-2xl">
                {city.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg">
                {city.region} федеральный округ
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="mb-8 group"
          >
            <Icon name="ArrowLeft" className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            Назад к городам
          </Button>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="animate-scale-in bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Info" className="text-primary" size={24} />
                  О городе
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">{city.description}</p>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Координаты:</span>
                    <p className="font-semibold">{city.lat.toFixed(2)}°N, {city.lon.toFixed(2)}°E</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Регион:</span>
                    <p className="font-semibold">{city.region}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-scale-in bg-card/50 backdrop-blur" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-secondary" size={24} />
                  Достопримечательности
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {city.attractions.map((attraction, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon name="Star" className="text-accent mt-1 flex-shrink-0" size={16} />
                      <span className="text-lg">{attraction}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Newspaper" className="text-blue" size={24} />
                Последние новости
              </CardTitle>
              <CardDescription>Актуальные события региона</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockNews.map((news, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer group"
                  >
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {news.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {news.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Radio" size={14} />
                        {news.source}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CityPage;
