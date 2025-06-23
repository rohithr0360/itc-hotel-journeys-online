
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About ITC Hotels</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              For nearly five decades, ITC Hotels has been synonymous with luxury, elegance, and impeccable service. 
              We are India's second-largest hotel chain and the only hotel company in the world to have all its hotels 
              certified as LEED Platinum Green Buildings.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Heritage</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  Founded in 1975, ITC Hotels began its journey with the iconic ITC Maurya in New Delhi. 
                  Since then, we have grown to become one of India's most respected luxury hotel chains, 
                  known for our commitment to excellence and sustainability.
                </p>
                <p className="text-lg">
                  Our hotels are architectural marvels that seamlessly blend traditional Indian hospitality 
                  with contemporary luxury. Each property tells a unique story, reflecting the rich cultural 
                  heritage of its location while offering world-class amenities and services.
                </p>
                <p className="text-lg">
                  Today, ITC Hotels operates over 100 hotels across India, serving millions of guests annually 
                  and maintaining our position as a leader in the hospitality industry.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="ITC Hotels Heritage" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and help us deliver exceptional experiences to our guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability</h3>
                <p className="text-gray-600">
                  Committed to environmental responsibility with all our hotels being LEED Platinum certified, 
                  making us the world's greenest luxury hotel chain.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  Pursuing perfection in every detail, from service delivery to amenities, ensuring our guests 
                  receive nothing but the best during their stay with us.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏛️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Heritage</h3>
                <p className="text-gray-600">
                  Celebrating India's rich cultural heritage through our architecture, cuisine, and hospitality, 
                  while embracing modern luxury and contemporary comforts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recognition & Awards</h2>
            <p className="text-xl text-gray-600">
              Our commitment to excellence has been recognized globally by industry leaders and guests alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h4 className="font-bold text-gray-900">Best Hotel Chain</h4>
              <p className="text-gray-600">Travel + Leisure Awards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌟</span>
              </div>
              <h4 className="font-bold text-gray-900">5-Star Rating</h4>
              <p className="text-gray-600">Ministry of Tourism</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌿</span>
              </div>
              <h4 className="font-bold text-gray-900">Green Hotel Award</h4>
              <p className="text-gray-600">LEED Platinum Certified</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👑</span>
              </div>
              <h4 className="font-bold text-gray-900">Luxury Excellence</h4>
              <p className="text-gray-600">World Luxury Hotel Awards</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
