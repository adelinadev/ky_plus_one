
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  isOnSale?: boolean;
  tag?: string;
}

const ProductCard = ({ name, price, originalPrice, image, isOnSale, tag }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {tag && (
            <Badge className="absolute top-3 left-3 bg-black text-white">
              {tag}
            </Badge>
          )}
          {isOnSale && (
            <Badge className="absolute top-3 right-3 bg-red-500 text-white">
              SALE
            </Badge>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
            {name}
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold">₴{price.toFixed(2)}</span>
              {originalPrice && (
                <span className="text-gray-500 line-through text-sm">
                  £{originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
          
          <Button className="w-full mt-3 bg-black hover:bg-gray-800">
            ДОДАТИ В КОШИК
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
