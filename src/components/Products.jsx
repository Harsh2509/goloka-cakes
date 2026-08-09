import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Cake, Gift, Cherry, Cookie, Candy, Sparkles, Check } from 'lucide-react';
import { products } from '../mock';

const Products = () => {
  const iconMap = {
    cake: Cake,
    gift: Gift,
    cupcake: Cherry,
    cookie: Cookie,
    chocolate: Candy,
    sparkles: Sparkles
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-rose-600">Delicious Products</span>
          </h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700">
            Explore our range of freshly baked treats, all made with premium ingredients and lots of love
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {products.map((product) => {
            const IconComponent = iconMap[product.icon];
            return (
              <Card
                key={product.id}
                className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden group"
              >
                <div className="h-2 bg-gradient-to-r from-rose-400 to-pink-400 group-hover:from-rose-600 group-hover:to-pink-600 transition-all duration-300"></div>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-rose-100 rounded-lg flex items-center justify-center group-hover:bg-rose-200 transition-colors duration-300">
                      <IconComponent className="w-7 h-7 text-rose-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm">{product.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-rose-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={scrollToContact}
                    className="w-full mt-6 bg-rose-600 hover:bg-rose-700 text-white"
                  >
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Customization CTA */}
        <Card className="border-none shadow-xl bg-gradient-to-br from-rose-600 to-pink-600 text-white">
          <CardContent className="p-8 md:p-12 text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              Want Something Special?
            </h3>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              We specialize in custom cakes and desserts tailored to your unique celebrations.
              Birthday parties, anniversaries, weddings, or corporate events – we've got you covered!
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-rose-600 hover:bg-gray-100 text-lg px-8 py-6"
            >
              Customize Your Cake
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Products;
