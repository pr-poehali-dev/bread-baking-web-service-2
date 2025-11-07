import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const recipes = [
    {
      id: 1,
      title: 'Французский багет',
      description: 'Хрустящая корочка и мягкий мякиш',
      time: '3 часа',
      difficulty: 'Средняя',
      image: 'https://cdn.poehali.dev/projects/c1fbf653-d07c-4472-a128-27c6b0b2ddbe/files/30704c6b-6973-4790-bb82-4b6712dc5b72.jpg'
    },
    {
      id: 2,
      title: 'Слоёные круассаны',
      description: 'Нежные и воздушные к завтраку',
      time: '4 часа',
      difficulty: 'Сложная',
      image: 'https://cdn.poehali.dev/projects/c1fbf653-d07c-4472-a128-27c6b0b2ddbe/files/89d036c3-26a8-498a-a61e-55127aa96f89.jpg'
    },
    {
      id: 3,
      title: 'Синнабоны',
      description: 'Сладкие булочки с корицей и глазурью',
      time: '2 часа',
      difficulty: 'Лёгкая',
      image: 'https://cdn.poehali.dev/projects/c1fbf653-d07c-4472-a128-27c6b0b2ddbe/files/fb38dd7e-f928-4f9d-9c6f-6156b1e3a391.jpg'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Секреты идеального теста',
      excerpt: 'Узнайте, как добиться идеальной текстуры и вкуса вашей выпечки',
      date: '15 марта 2024'
    },
    {
      id: 2,
      title: 'История хлебопечения',
      excerpt: 'От древних времён до современных технологий',
      date: '10 марта 2024'
    },
    {
      id: 3,
      title: 'Как выбрать муку',
      excerpt: 'Разбираемся в типах муки и их применении',
      date: '5 марта 2024'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Wheat" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">ХлебДом</span>
            </div>
            <ul className="hidden md:flex items-center gap-8">
              <li><a href="#hero" className="hover:text-primary transition-colors">Главная</a></li>
              <li><a href="#recipes" className="hover:text-primary transition-colors">Рецепты</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Блог</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
            </ul>
            <Button className="hidden md:flex">
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Заказать
            </Button>
          </div>
        </nav>
      </header>

      <section id="hero" className="relative py-20 md:py-32 bg-gradient-to-br from-secondary via-accent to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-accent-foreground">
                Вкус домашнего хлеба в каждом кусочке
              </h1>
              <p className="text-xl text-muted-foreground">
                Откройте для себя мир традиционной выпечки с нашими проверенными рецептами и секретами мастерства
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="hover-scale">
                  <Icon name="ChefHat" size={20} className="mr-2" />
                  Смотреть рецепты
                </Button>
                <Button size="lg" variant="outline" className="hover-scale">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Читать блог
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/c1fbf653-d07c-4472-a128-27c6b0b2ddbe/files/30704c6b-6973-4790-bb82-4b6712dc5b72.jpg" 
                alt="Свежий хлеб" 
                className="rounded-3xl shadow-2xl hover-scale"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Icon name="Star" size={24} className="text-primary fill-primary" />
                  <div>
                    <p className="font-bold text-2xl">500+</p>
                    <p className="text-sm text-muted-foreground">Рецептов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="recipes" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Популярные рецепты</h2>
            <p className="text-xl text-muted-foreground">Проверенные временем рецепты для домашней выпечки</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <Card key={recipe.id} className="hover-scale overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                    {recipe.time}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{recipe.title}</CardTitle>
                  <CardDescription className="text-base">{recipe.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <Icon name="Gauge" size={16} />
                      {recipe.difficulty}
                    </span>
                    <Button variant="ghost" size="sm">
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Наш блог</h2>
            <p className="text-xl text-muted-foreground">Полезные статьи о хлебопечении</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover-scale cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Icon name="Calendar" size={16} />
                    {post.date}
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="px-0">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Есть вопросы? Мы всегда на связи!</p>
          </div>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input 
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите, чем мы можем вам помочь..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </Card>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Icon name="MapPin" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-muted-foreground">г. Москва, ул. Хлебная, д. 1</p>
            </div>
            <div className="text-center">
              <Icon name="Phone" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center">
              <Icon name="Mail" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@hlebdom.ru</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-accent py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wheat" size={28} className="text-primary" />
                <span className="text-xl font-bold text-accent-foreground">ХлебДом</span>
              </div>
              <p className="text-muted-foreground">Домашняя выпечка с любовью</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-accent-foreground">Навигация</h4>
              <ul className="space-y-2">
                <li><a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">Главная</a></li>
                <li><a href="#recipes" className="text-muted-foreground hover:text-primary transition-colors">Рецепты</a></li>
                <li><a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-accent-foreground">Рецепты</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Хлеб</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Булочки</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Пироги</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-accent-foreground">Соцсети</h4>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Youtube" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 ХлебДом. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
