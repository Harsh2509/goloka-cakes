import React from 'react';
import { Card, CardContent } from './ui/card';
import { Heart, Leaf, Award, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every cake and dessert is crafted with passion and dedication in our home kitchen'
    },
    {
      icon: Leaf,
      title: '100% Eggless',
      description: 'All our products are completely eggless, perfect for everyone to enjoy'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We use only the finest ingredients to ensure the best taste and quality'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction and special moments are our top priority'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-rose-600">The Golokcakes</span>
          </h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Welcome to The Golokcakes, where every creation tells a story of love, passion, and perfection. 
            As a home-based bakery, we specialize in crafting delicious eggless cakes and desserts that bring 
            joy to your celebrations.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <Card className="border-none shadow-lg bg-gradient-to-br from-rose-50 to-pink-50">
            <CardContent className="p-6 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Story</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The Golokcakes began with a simple dream – to create homemade desserts that not only taste 
                  amazing but also bring smiles to people's faces. What started as baking for family and friends 
                  has blossomed into a passion-driven venture serving our wonderful community.
                </p>
                <p>
                  We understand that every celebration is unique and special. That's why we focus on customization, 
                  allowing you to create the perfect cake or dessert that matches your vision. From birthdays to 
                  anniversaries, festivals to corporate events, we're here to make your moments memorable.
                </p>
                <p>
                  Our commitment to using premium ingredients and maintaining the highest quality standards ensures 
                  that every bite is a delightful experience. Being 100% eggless, our products cater to a wide 
                  audience, making celebrations inclusive and joyful for everyone.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
