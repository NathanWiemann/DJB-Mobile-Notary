import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Downtown Office",
      rating: 5,
      text: "Exceptional service! They came to our office on short notice and handled our loan documents perfectly. Very professional and knowledgeable."
    },
    {
      name: "Michael Rodriguez",
      location: "Home Visit",
      rating: 5,
      text: "Needed documents notarized for my elderly father at home. The notary was patient, caring, and made the process stress-free. Highly recommend!"
    },
    {
      name: "Jennifer Chen",
      location: "Real Estate Closing",
      rating: 5,
      text: "Outstanding experience with our home purchase. Arrived on time, explained everything clearly, and made our closing smooth and efficient."
    },
    {
      name: "Robert Thompson",
      location: "Business Documents",
      rating: 5,
      text: "Professional, reliable, and available when needed. They've been handling our business notarizations for years. Always dependable!"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our notary services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 relative hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="h-8 w-8 text-blue-200 absolute top-4 left-4" />
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 md:p-12 border border-amber-200">
            <div className="flex justify-center items-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-amber-400 fill-current" />
              ))}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              5.0 Star Rating
            </h3>
            <p className="text-gray-600 text-lg">
              Based on 100+ satisfied clients across all our services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;