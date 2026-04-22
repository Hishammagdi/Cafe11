import { Coffee, Droplets, Cake, MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

/**
 * Egyptian Cafe Landing Page
 * Design: Modern Egyptian Warmth
 * Colors: Brown (#6B4423), Gold (#D4A574), Beige (#F5E6D3), Cream (#FFFBF5)
 * Typography: Cairo Arabic Font Family
 */

export default function Home() {
  const [activeMenu, setActiveMenu] = useState('hot');

  const menuData = {
    hot: {
      title: 'ركن المزاج العالي',
      subtitle: 'مشروبات سخنة',
      icon: Coffee,
      items: [
        {
          name: 'قهوة تركي',
          desc: 'بن محوج أصلي (سادة، مظبوط، زيادة)',
          price: '35 ج.م'
        },
        {
          name: 'شاي العروسة',
          desc: 'في الخمسينة (نعناع، قرنفل، أو سادة)',
          price: '20 ج.م'
        },
        {
          name: 'سحلب ملوكي',
          desc: 'لبن طبيعي، مكسرات، وجوز هند',
          price: '50 ج.م'
        },
        {
          name: 'نسكافيه بلاك',
          desc: 'رغوة غنية تظبط اليوم',
          price: '40 ج.م'
        }
      ]
    },
    cold: {
      title: 'ركن فرفش نفسك',
      subtitle: 'مشروبات باردة',
      icon: Droplets,
      items: [
        {
          name: 'ليمون نعناع منعش',
          desc: 'ليمون فريش مع ورق نعناع أخضر',
          price: '45 ج.م'
        },
        {
          name: 'مانجو الإسماعيلية',
          desc: 'عصير مانجو طبيعي تقيل',
          price: '60 ج.م'
        },
        {
          name: 'آيس كوفي كراميل',
          desc: 'قهوة مثلجة مع صوص الكراميل',
          price: '70 ج.م'
        }
      ]
    },
    dessert: {
      title: 'ركن التحلية',
      subtitle: 'حلويات خفيفة',
      icon: Cake,
      items: [
        {
          name: 'طاجن أم علي',
          desc: 'بالقشطة والمكسرات من الفرن',
          price: '65 ج.م'
        },
        {
          name: 'رز بلبن فرن',
          desc: 'زي بتاع زمان وبوش محمر',
          price: '40 ج.م'
        }
      ]
    }
  };

  const galleryImages = [
    { src: '/images/turkish_coffee.jpg', alt: 'قهوة تركي' },
    { src: '/images/lemon_mint.jpg', alt: 'ليمون نعناع' },
    { src: '/images/om_ali.jpg', alt: 'أم علي' },
    { src: '/images/hero_coffee_breakfast.jpg', alt: 'فطار مصري' }
  ];

  const currentMenu = menuData[activeMenu as keyof typeof menuData];
  const MenuIcon = currentMenu.icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <Coffee className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">قهوة ومزاج</h1>
              <p className="text-sm opacity-90">Kahwa & Mazag</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#menu" className="hover:text-accent transition-colors">المنيو</a>
            <a href="#gallery" className="hover:text-accent transition-colors">الصور</a>
            <a href="#contact" className="hover:text-accent transition-colors">تواصل معنا</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url('/images/hero_coffee_breakfast.jpg')` }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">روق بالك عندنا</h2>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">أفضل قهوة وأجمل أوقات في قلب المدينة</p>
          <a href="#menu" className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            شوف المنيو
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">المنيو</h2>
            <div className="golden-divider mx-auto w-32 mb-8"></div>
            <p className="text-lg text-muted-foreground">اختر من أفضل المشروبات والحلويات</p>
          </div>

          {/* Menu Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(menuData).map(([key, data]) => {
              const Icon = data.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveMenu(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeMenu === key
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-card text-card-foreground hover:bg-accent/20'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {data.subtitle}
                </button>
              );
            })}
          </div>

          {/* Menu Content */}
          <div className="max-w-4xl mx-auto fade-in">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-primary mb-2">{currentMenu.title}</h3>
              <div className="w-16 h-1 bg-accent mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {currentMenu.items.map((item, idx) => (
                <div key={idx} className="menu-card">
                  <div className="menu-item">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="menu-item-name">{item.name}</h4>
                      <span className="menu-item-price">{item.price}</span>
                    </div>
                    <p className="menu-item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title text-card-foreground">معرض الصور</h2>
            <div className="golden-divider mx-auto w-32 mb-8"></div>
            <p className="text-lg text-muted-foreground">تذوق الجمال من خلال عدستنا</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">تواصل معنا</h2>
            <div className="golden-divider mx-auto w-32 mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Address */}
              <div className="menu-card text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">الموقع</h3>
                <p className="text-muted-foreground">المعادي، القاهرة</p>
                <p className="text-sm text-muted-foreground mt-1">بجانب النيل مباشرة</p>
              </div>

              {/* Phone */}
              <div className="menu-card text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">الهاتف</h3>
                <p className="text-muted-foreground">+20 100 123 4567</p>
                <p className="text-sm text-muted-foreground mt-1">متاح طول الوقت</p>
              </div>

              {/* Email */}
              <div className="menu-card text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">البريد الإلكتروني</h3>
                <p className="text-muted-foreground">info@kahwa-mazag.com</p>
                <p className="text-sm text-muted-foreground mt-1">رد سريع مضمون</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg h-80 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">خريطة الموقع</p>
                <p className="text-sm text-muted-foreground mt-2">المعادي، القاهرة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container text-center">
          <p className="mb-2">© 2026 كافيه قهوة ومزاج - جميع الحقوق محفوظة</p>
          <p className="text-sm opacity-75">صُنع بـ ❤️ من أجلك</p>
        </div>
      </footer>
    </div>
  );
}
