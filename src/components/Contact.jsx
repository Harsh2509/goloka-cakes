import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { contactInfo, occasions } from '../mock';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock submission - in real app, this would send to backend
    console.log('Order inquiry submitted:', formData);
    
    toast({
      title: "Thank you for your inquiry!",
      description: "We'll get back to you soon with your customized quote.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      occasion: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-rose-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700">
            Ready to order? Have questions? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg bg-gradient-to-br from-rose-50 to-pink-50">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-rose-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Phone</p>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-gray-700 hover:text-rose-600 transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">WhatsApp</p>
                      <a
                        href={`https://wa.me/${contactInfo.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-green-600 transition-colors"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Email</p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-gray-700 hover:text-blue-600 transition-colors break-all"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Location</p>
                      <p className="text-gray-700">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Occasions */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">We Cater For</h3>
                <div className="grid grid-cols-2 gap-3">
                  {occasions.map((occasion, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-gray-700 bg-rose-50 px-3 py-2 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-rose-600 rounded-full"></div>
                      <span className="text-sm">{occasion.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Form */}
          <Card className="border-none shadow-xl">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us Your Inquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="occasion">Occasion *</Label>
                  <select
                    id="occasion"
                    name="occasion"
                    required
                    value={formData.occasion}
                    onChange={handleChange}
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-600"
                  >
                    <option value="">Select an occasion</option>
                    {occasions.map((occasion, index) => (
                      <option key={index} value={occasion.name}>
                        {occasion.name}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your cake/dessert requirements, preferred flavors, design ideas, delivery date, etc."
                    rows={5}
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white text-lg py-6"
                >
                  Submit Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
