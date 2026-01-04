import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Контакты
            </h1>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами по любым вопросам
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-scale-in bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MessageSquare" className="text-primary" size={24} />
                  Напишите нам
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" className="bg-background" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" className="bg-background" />
                  </div>
                  <div>
                    <Textarea placeholder="Ваше сообщение" rows={5} className="bg-background" />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="animate-scale-in bg-card/50 backdrop-blur" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Mail" className="text-secondary" size={24} />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">info@goroda-rossii.ru</p>
                </CardContent>
              </Card>

              <Card className="animate-scale-in bg-card/50 backdrop-blur" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Phone" className="text-accent" size={24} />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">+7 (800) 555-35-35</p>
                </CardContent>
              </Card>

              <Card className="animate-scale-in bg-card/50 backdrop-blur" style={{ animationDelay: '0.3s' }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Share2" className="text-blue" size={24} />
                    Социальные сети
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button variant="ghost" size="icon" className="hover:text-primary">
                      <Icon name="Facebook" size={24} />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:text-secondary">
                      <Icon name="Twitter" size={24} />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:text-accent">
                      <Icon name="Instagram" size={24} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
