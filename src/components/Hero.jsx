import React from 'react';
import { Button } from './ui/button';
import { Cake, Heart, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Icon decoration */}
          <div className="flex justify-center items-center space-x-6 mb-6">
            <Cake className="text-rose-500 w-8 h-8 md:w-10 md:h-10 animate-bounce" style={{ animationDelay: '0s' }} />
            <Heart className="text-pink-500 w-8 h-8 md:w-10 md:h-10 animate-bounce" style={{ animationDelay: '0.2s' }} />
            <Sparkles className="text-purple-500 w-8 h-8 md:w-10 md:h-10 animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            <span className="block" style={{ fontFamily: 'Georgia, serif' }}>
              Homemade Happiness
            </span>
            <span className="block text-rose-600 mt-2">Baked with Love</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Premium eggless cakes, customized desserts, and handcrafted chocolates
            <span className="block mt-2">made fresh daily for your special moments</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              onClick={() => scrollToSection('products')}
              size="lg"
              className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-8 py-6 w-full sm:w-auto"
            >
              Explore Products
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="border-2 border-rose-600 text-rose-600 hover:bg-rose-50 text-lg px-8 py-6 w-full sm:w-auto"
            >
              Customize Your Cake
            </Button>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-rose-600">100%</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">Eggless</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-rose-600">Fresh</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">Daily Baked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-rose-600">Premium</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">Ingredients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-rose-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-rose-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
