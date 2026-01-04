import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              О проекте
            </h1>
            <p className="text-xl text-muted-foreground">
              Интерактивная платформа для знакомства с городами России
            </p>
          </div>

          <div className="space-y-6">
            <Card className="animate-scale-in bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Target" className="text-primary" size={24} />
                  Наша миссия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  Создать интерактивную платформу, которая поможет людям лучше узнать города-миллионники России. 
                  Мы собрали информацию о 31 крупнейшем городе страны и представили её в удобном, визуально привлекательном формате.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-scale-in bg-card/50 backdrop-blur" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Zap" className="text-secondary" size={24} />
                  Возможности
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-lg">Интерактивная карта городов в формате сот</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-lg">Актуальная информация о погоде и времени</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-lg">Подробные описания достопримечательностей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-lg">Последние новости регионов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-lg">Удобный поиск и галерея городов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-scale-in bg-card/50 backdrop-blur" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" className="text-blue" size={24} />
                  Для кого
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  Проект будет полезен путешественникам, студентам, исследователям и всем, кто интересуется 
                  географией и культурой России. Это отличный инструмент для планирования путешествий и 
                  изучения особенностей регионов страны.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
