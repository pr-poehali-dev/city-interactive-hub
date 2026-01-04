import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
              <Icon name="MapPin" className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Города России
            </h1>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/gallery" className="hover:text-primary transition-colors">
              Галерея
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors">
              О проекте
            </Link>
            <Link to="/contacts" className="hover:text-primary transition-colors">
              Контакты
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2">
              <Input
                type="search"
                placeholder="Поиск города..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 bg-card"
              />
              <Button type="submit" size="icon" variant="ghost">
                <Icon name="Search" size={20} />
              </Button>
            </form>

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button size="icon" variant="ghost">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <nav className="flex flex-col gap-6 mt-8">
                  <Link to="/" className="text-lg hover:text-primary transition-colors">
                    Главная
                  </Link>
                  <Link to="/gallery" className="text-lg hover:text-primary transition-colors">
                    Галерея
                  </Link>
                  <Link to="/about" className="text-lg hover:text-primary transition-colors">
                    О проекте
                  </Link>
                  <Link to="/contacts" className="text-lg hover:text-primary transition-colors">
                    Контакты
                  </Link>
                  <form onSubmit={handleSearch} className="flex flex-col gap-2 mt-4">
                    <Input
                      type="search"
                      placeholder="Поиск города..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-card"
                    />
                    <Button type="submit" className="w-full">
                      Найти
                    </Button>
                  </form>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
