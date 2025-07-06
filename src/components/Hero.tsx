
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-black text-white py-20">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=1200&h=600&fit=crop')"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            АВТОРСЬКІ КОКТЕЙЛІ
          </h1>
          <p className="text-xl mb-8 text-gray-200">
          Насолоджуйтесь найкращими коктейлями, створеними досвідченими міксологами,
          які доставляються свіжими до ваших дверей.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-3">
            Замовити зараз
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
