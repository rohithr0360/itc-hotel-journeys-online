
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q');
  const [filteredServices, setFilteredServices] = useState([]);

  const services = [
    {
      id: 1,
      title: "Luxury Accommodation",
      description: "Indulge in our opulent rooms and suites featuring premium amenities, stunning views, and personalized service.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["24/7 Butler Service", "Premium Linens", "City/Garden Views", "Complimentary WiFi"]
    },
    {
      id: 2,
      title: "Fine Dining Restaurants",
      description: "Experience culinary excellence at our award-winning restaurants serving authentic Indian and international cuisine.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Michelin-Star Chefs", "Local Specialties", "Wine Pairing", "Private Dining"]
    },
    {
      id: 3,
      title: "Spa & Wellness Center",
      description: "Rejuvenate your mind and body with our world-class spa treatments and wellness programs.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Ayurvedic Treatments", "Modern Fitness Center", "Yoga Sessions", "Meditation Programs"]
    },
    {
      id: 4,
      title: "Business Center",
      description: "State-of-the-art facilities for all your business needs, from meetings to conferences and events.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Meeting Rooms", "Video Conferencing", "Business Lounge", "Secretarial Services"]
    },
    {
      id: 5,
      title: "Event Management",
      description: "Create unforgettable moments with our expert event planning services for weddings, corporate events, and celebrations.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Wedding Planning", "Corporate Events", "Catering Services", "Decoration & Setup"]
    },
    {
      id: 6,
      title: "Recreation & Entertainment",
      description: "Enjoy a variety of recreational activities including swimming, tennis, and cultural performances.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Swimming Pool", "Tennis Court", "Cultural Shows", "Kids Club"]
    }
  ];

  useEffect(() => {
    if (searchQuery) {
      const filtered = services.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredServices(filtered);
    } else {
      setFilteredServices(services);
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Premium Services</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover a world of luxury and comfort with our comprehensive range of services designed to exceed your expectations.
            </p>
            {searchQuery && (
              <div className="mt-6 p-4 bg-amber-200 rounded-lg inline-block">
                <p className="text-amber-800">
                  Showing results for: <strong>"{searchQuery}"</strong> ({filteredServices.length} results found)
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredServices.length === 0 && searchQuery ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No results found</h3>
              <p className="text-gray-600 mb-8">
                No services match your search query "{searchQuery}". Please try a different search term.
              </p>
              <Button onClick={() => window.location.href = '/services'}>
                View All Services
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Our Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your stay today and enjoy all our premium services designed to make your visit unforgettable.
          </p>
          <Button size="lg" className="bg-white text-amber-800 hover:bg-gray-100 px-8 py-3 text-lg">
            <a href="/contact">Book Now</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
