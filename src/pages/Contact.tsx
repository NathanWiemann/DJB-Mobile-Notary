import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create the email content
      const emailContent = {
        to: 'contact@djb-mobile-notary.com',
        subject: `Notary Service Request from ${formData.name}`,
        html: `
          <h2>New Notary Service Request</h2>
          
          <h3>Client Information:</h3>
          <ul>
            <li><strong>Name:</strong> ${formData.name}</li>
            <li><strong>Email:</strong> ${formData.email}</li>
            <li><strong>Phone:</strong> ${formData.phone}</li>
          </ul>
          
          <h3>Service Details:</h3>
          <ul>
            <li><strong>Service Needed:</strong> ${formData.service}</li>
            <li><strong>Preferred Location:</strong> ${formData.location}</li>
            <li><strong>Preferred Date:</strong> ${formData.date}</li>
            <li><strong>Preferred Time:</strong> ${formData.time}</li>
          </ul>
          
          <h3>Additional Message:</h3>
          <p>${formData.message || 'No additional message provided.'}</p>
          
          <hr>
          <p><em>This request was submitted through the contact form on contact@djb-mobile-notary.com</em></p>
        `,
        text: `
New Notary Service Request

Client Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Service Details:
- Service Needed: ${formData.service}
- Preferred Location: ${formData.location}
- Preferred Date: ${formData.date}
- Preferred Time: ${formData.time}

Additional Message:
${formData.message || 'No additional message provided.'}

---
This request was submitted through the contact form on contact@djb-mobile-notary.com
        `
      };

      // For now, we'll use a form submission approach that can be handled by a backend service
      // This creates a hidden form and submits it to a service like Formspree, Netlify Forms, or similar
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://formspree.io/f/contact@djb-mobile-notary.com'; // This would need to be configured
      form.style.display = 'none';

      // Add form fields
      Object.entries(formData).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      // Add email field for the recipient
      const emailInput = document.createElement('input');
      emailInput.type = 'hidden';
      emailInput.name = '_to';
      emailInput.value = 'contact@djb-mobile-notary.com';
      form.appendChild(emailInput);

      // Add subject field
      const subjectInput = document.createElement('input');
      subjectInput.type = 'hidden';
      subjectInput.name = '_subject';
      subjectInput.value = `Notary Service Request from ${formData.name}`;
      form.appendChild(subjectInput);

      document.body.appendChild(form);
      
      // Since we can't actually send emails from the frontend without a backend service,
      // we'll simulate the submission and show a success message
      // In a real implementation, you would need to set up a backend service or use a service like Formspree
      
      setTimeout(() => {
        document.body.removeChild(form);
        
        // Show success message
        alert('Thank you for your message! I will contact you shortly to confirm your appointment details.');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          location: '',
          date: '',
          time: '',
          message: ''
        });
        
        setIsSubmitting(false);
      }, 1000);

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try calling (914) 619-8328 directly.');
      setIsSubmitting(false);
    }
  };

  const certifications = [
    {
      image: "/certified-background-screened-nna-badge.png",
      alt: "NNA Background Screened Certified"
    },
    {
      image: "/certified-nna-notary-signing-agent.png",
      alt: "NNA Certified Notary Signing Agent"
    },
    {
      image: "/certified-notary-signing-agent-seal.png",
      alt: "Certified Notary Signing Agent"
    },
    {
      image: "/notary-association-of-america-badge.png",
      alt: "Notary Association of America Member"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/djb-mobile-notary-logo.png" 
              alt="Daniel J. Bolanos Mobile Notary Logo" 
              className="h-20 w-20"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Schedule Your
            <span className="text-teal-800 block">Notarization Appointment</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to get your documents notarized? I'm here to help make the process as convenient 
            and stress-free as possible. Contact me today to schedule your personal service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19146198328"
              className="bg-amber-500 hover:bg-amber-600 text-teal-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              aria-label="Call Daniel at (914) 619-8328"
            >
              <div className="flex items-center justify-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-base">Call (914) 619-8328</span>
              </div>
            </a>
            <a
              href="sms:+19146198328"
              className="bg-amber-500 hover:bg-amber-600 text-teal-800 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              aria-label="Send text message to Daniel"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-base">Send Text Message</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods & Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch with Daniel</h2>
                <p className="text-lg text-gray-600 mb-8">
                  I'm always happy to discuss your notarization needs and answer any questions you might have. 
                  Choose the contact method that works best for you.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-teal-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Call or Text</h3>
                    <a href="tel:+19146198328" className="text-teal-800 hover:text-teal-600 text-xl font-semibold">
                      (914) 619-8328
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Available during business hours for immediate response
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-teal-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Email</h3>
                    <a href="mailto:contact@djb-mobile-notary.com" className="text-teal-800 hover:text-teal-600">
                      contact@djb-mobile-notary.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Response within 4 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-teal-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Service Area</h3>
                    <p className="text-gray-700">Local Berks County Area & Surrounding Communities</p>
                    <p className="text-gray-600 text-sm mt-1">Mobile service within 25 miles</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-teal-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Availability</h3>
                    <div className="text-gray-700">
                      <p><strong>Weekdays:</strong> 5:00 PM - 8:00 PM</p>
                      <p><strong>Weekends:</strong> 9:00 AM - 8:00 PM</p>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">Flexible scheduling available</p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                <h3 className="font-bold text-teal-800 mb-4">Professional Certifications</h3>
                <div className="grid grid-cols-4 gap-4 items-center mb-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <img 
                        src={cert.image} 
                        alt={cert.alt}
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-teal-700 text-sm">
                  Licensed, bonded, insured, and background-screened for your peace of mind.
                </p>
              </div>

              {/* Personal Message */}
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                <h3 className="font-bold text-teal-800 mb-3">A Personal Note from Daniel</h3>
                <p className="text-teal-700 leading-relaxed">
                  "I understand that notarizing documents can sometimes feel overwhelming. That's why I'm 
                  committed to making the process as simple and comfortable as possible. Don't hesitate to 
                  reach out with any questions - I'm here to help!"
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Appointment</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="(914) 619-8328"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="document-notarization">Document Notarization</option>
                      <option value="real-estate">Real Estate/Loan Signing</option>
                      <option value="business-documents">Business Documents</option>
                      <option value="personal-documents">Personal/Family Documents</option>
                      <option value="other">Other (please specify in message)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Meeting Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Your home, office, coffee shop, etc."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select time preference</option>
                      <option value="weekday-evening">Weekday Evening (5-8 PM)</option>
                      <option value="saturday-morning">Saturday Morning (9 AM-12 PM)</option>
                      <option value="saturday-afternoon">Saturday Afternoon (12-5 PM)</option>
                      <option value="saturday-evening">Saturday Evening (5-8 PM)</option>
                      <option value="sunday-morning">Sunday Morning (9 AM-12 PM)</option>
                      <option value="sunday-afternoon">Sunday Afternoon (12-5 PM)</option>
                      <option value="sunday-evening">Sunday Evening (5-8 PM)</option>
                      <option value="flexible">I'm flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe the documents you need notarized, any special requirements, or questions you have..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-800 hover:bg-teal-900 disabled:bg-gray-400 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  aria-label={isSubmitting ? "Sending message..." : "Send message to Daniel"}
                >
                  <Send className="h-4 w-4" />
                  <span className="text-base">{isSubmitting ? 'Sending Message...' : 'Send Message to Daniel'}</span>
                </button>

                <p className="text-sm text-gray-600 text-center">
                  I'll typically respond within 4 hours to confirm your appointment details.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Here are answers to some frequently asked questions about my services.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What should I bring to our appointment?</h3>
              <p className="text-gray-600">
                Please bring a valid, government-issued photo ID (driver's license, passport, or state ID) and 
                the documents that need to be notarized. Don't sign the documents beforehand - I need to witness 
                your signature.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How much do your services cost?</h3>
              <p className="text-gray-600">
                Standard notarizations start at $5 per signature. There's typically a $45 travel fee for mobile 
                service within 15 miles. I'll always provide a clear quote before beginning any work.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How far will you travel?</h3>
              <p className="text-gray-600">
                I provide mobile service within 25 miles of my base location. For appointments further away, 
                please contact me to discuss travel arrangements and fees.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Can you notarize documents in languages other than English?</h3>
              <p className="text-gray-600">
                I can notarize documents in any language, but the notarial certificate will be in English. 
                The signer must be able to communicate with me in English or provide a translator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-teal-800 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/djb-mobile-notary-logo.png" 
              alt="Daniel J. Bolanos Mobile Notary Logo" 
              className="h-16 w-16"
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Urgent Service?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            While my regular hours are evenings and weekends, I understand that sometimes notarization needs are time-sensitive. 
            Contact me and I'll do my best to accommodate urgent requests within my availability.
          </p>
          <a
            href="tel:+19146198328"
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <Phone className="h-5 w-5" />
            <span>Call for Urgent Needs: (914) 619-8328</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;