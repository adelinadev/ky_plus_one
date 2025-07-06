
import ProductCard from "./ProductCard";

const products = [
  {
    id: "1",
    name: "Vidblysk Lavry",
    price: 250.00,
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=600&fit=crop",
    tag: "BESTSELLER"
  },
  {
    id: "2",
    name: "Trukhaniv Beach",
    price: 250.00,
    image: "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?w=400&h=600&fit=crop",
    isOnSale: true
  },
  {
    id: "3",
    name: "Poshtova Revolution",
    price: 250.00,
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=600&fit=crop"
  },
  {
    id: "4",
    name: "Gin & Tonic - Premium Kit",
    price: 24.00,
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=600&fit=crop"
  },
  {
    id: "5",
    name: "Zlatka",
    price: 250.00,
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&h=600&fit=crop",
    tag: "NEW"
  },
  {
    id: "6",
    name: "Marsik",
    price: 250.00,
    originalPrice: 300.00,
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=600&fit=crop",
    isOnSale: true
  },
  {
    id: "7",
    name: "Mamka Zuza",
    price: 250.00,
    image: "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?w=400&h=600&fit=crop"
  },
  {
    id: "8",
    name: "Adelina Malina",
    price: 500.00,
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=600&fit=crop"
  }
];

const ProductGrid = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">УСІ КОКТЕЙЛІ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            БЛА БЛА БЛА НА НА НА ТУТ МАЄ БУТИ ТЄКСТ, ЩОСЬ ПРО ВАШІ КАКТЕЙЛІ ТИПУ СЛОВО АВТОРА
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
